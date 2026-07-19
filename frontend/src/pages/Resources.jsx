import { useState, useEffect } from 'react'
import { getTools, markToolUsed, markToolUnused } from '../api'
import { Spinner } from '../components/ui/Spinner'
import { useToast } from '../hooks/useToast'
import { Toast } from '../components/ui/Toast'

const ALL_LABEL = 'All'

function ToolCard({ tool, onToggleUsed }) {
  const [loading, setLoading] = useState(false)

  const handleToggle = async () => {
    setLoading(true)
    await onToggleUsed(tool.id, tool.is_used)
    setLoading(false)
  }

  return (
    <div className={`bg-slate-900 border rounded-xl p-5 flex flex-col gap-3 transition-all ${
      tool.is_used ? 'border-emerald-800/60' : 'border-slate-800 hover:border-slate-700'
    }`}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-200">{tool.name}</h3>
          <span className="text-xs text-slate-500">{tool.category}</span>
        </div>
        {tool.is_used && (
          <span className="px-2 py-0.5 bg-emerald-600/20 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-700/40 flex-shrink-0">
            Used
          </span>
        )}
      </div>

      {tool.what && (
        <p className="text-xs text-slate-400 leading-relaxed">{tool.what}</p>
      )}

      {tool.why && (
        <div>
          <span className="text-xs font-semibold text-slate-500">Why: </span>
          <span className="text-xs text-slate-400">{tool.why}</span>
        </div>
      )}

      {tool.when_to_use && (
        <div>
          <span className="text-xs font-semibold text-slate-500">When: </span>
          <span className="text-xs text-slate-400">{tool.when_to_use}</span>
        </div>
      )}

      <div className="flex items-center justify-between mt-auto pt-1 gap-2">
        {tool.url && (
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
            onClick={e => e.stopPropagation()}
          >
            Docs
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        <button
          onClick={handleToggle}
          disabled={loading}
          className={`ml-auto text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors disabled:opacity-50 ${
            tool.is_used
              ? 'bg-emerald-700/30 text-emerald-300 hover:bg-emerald-700/50'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
          }`}
        >
          {loading ? '...' : tool.is_used ? 'Mark Unused' : 'Mark Used'}
        </button>
      </div>
    </div>
  )
}

export function Resources() {
  const { toasts, addToast } = useToast()
  const [tools, setTools] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState(ALL_LABEL)
  const [usedFilter, setUsedFilter] = useState('all') // 'all' | 'used' | 'unused'

  useEffect(() => {
    getTools()
      .then(res => setTools(res.data))
      .catch(() => addToast('Failed to load tools', 'error'))
      .finally(() => setLoading(false))
  }, [])

  const handleToggleUsed = async (toolId, isCurrentlyUsed) => {
    try {
      if (isCurrentlyUsed) {
        await markToolUnused(toolId)
      } else {
        await markToolUsed(toolId)
      }
      setTools(prev =>
        prev.map(t => t.id === toolId ? { ...t, is_used: !isCurrentlyUsed } : t)
      )
    } catch {
      addToast('Failed to update tool status', 'error')
    }
  }

  const categories = [ALL_LABEL, ...Array.from(new Set(tools.map(t => t.category))).sort()]

  const filtered = tools.filter(tool => {
    const matchesCategory = activeCategory === ALL_LABEL || tool.category === activeCategory
    const matchesSearch = !search || [tool.name, tool.what, tool.why, tool.when_to_use]
      .some(field => field?.toLowerCase().includes(search.toLowerCase()))
    const matchesUsed =
      usedFilter === 'all' ||
      (usedFilter === 'used' && tool.is_used) ||
      (usedFilter === 'unused' && !tool.is_used)
    return matchesCategory && matchesSearch && matchesUsed
  })

  const usedCount = tools.filter(t => t.is_used).length

  if (loading) return <Spinner className="mt-20" />

  return (
    <div className="p-8">
      <Toast toasts={toasts} />

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-100">AI Engineering Toolbox</h1>
        <p className="text-slate-400 text-sm mt-1">
          {usedCount} of {tools.length} tools used
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 mb-6">
        {/* Search */}
        <div className="relative max-w-md">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search tools..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-900 border border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Used filter */}
        <div className="flex gap-2">
          {[
            { value: 'all', label: 'All' },
            { value: 'used', label: 'Used' },
            { value: 'unused', label: 'Not Used' },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => setUsedFilter(opt.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                usedFilter === opt.value
                  ? 'bg-slate-700 text-slate-100'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tools grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-500 text-sm">No tools match your filters.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map(tool => (
            <ToolCard key={tool.id} tool={tool} onToggleUsed={handleToggleUsed} />
          ))}
        </div>
      )}
    </div>
  )
}
