import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { getSettings, getMonths } from '../api'
import { ProgressBar } from '../components/ui/ProgressBar'
import { Spinner } from '../components/ui/Spinner'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

function computeCurrentMonth(startDate) {
  if (!startDate) return 1
  const start = new Date(startDate)
  const now = new Date()
  const daysDiff = Math.floor((now - start) / (1000 * 60 * 60 * 24))
  const month = Math.floor(daysDiff / 30) + 1
  return Math.max(1, Math.min(6, month))
}

function computeCurrentWeek(startDate) {
  if (!startDate) return 1
  const start = new Date(startDate)
  const now = new Date()
  const daysDiff = Math.floor((now - start) / (1000 * 60 * 60 * 24))
  const globalWeek = Math.floor(daysDiff / 7) + 1
  return Math.max(1, Math.min(18, globalWeek))
}

const MONTH_COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6']

export function Dashboard() {
  const { stats } = useOutletContext()
  const [settings, setSettings] = useState({ name: 'AI Engineer', startDate: '' })
  const [months, setMonths] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getSettings(), getMonths()])
      .then(([settingsRes, monthsRes]) => {
        setSettings(settingsRes.data)
        setMonths(monthsRes.data)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const currentMonth = computeCurrentMonth(settings.startDate)
  const currentWeek = computeCurrentWeek(settings.startDate)
  const weekInMonth = ((currentWeek - 1) % 3) + 1

  // Find first incomplete topic — scan months array for progress
  const findNextTopic = () => {
    if (!months.length) return null
    // The months list only has summary data; we show placeholder until roadmap loads
    return null
  }

  if (loading) {
    return <Spinner className="mt-20" />
  }

  const monthProgressData = stats.monthProgress || {}

  return (
    <div className="p-8 max-w-4xl">
      {/* Greeting */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100">
          {getGreeting()}, {settings.name || 'AI Engineer'}
        </h1>
        <p className="text-slate-400 mt-1 text-sm">
          {settings.startDate
            ? `Started ${new Date(settings.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
            : 'Set your start date in Settings to track progress'}
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-xs text-slate-400 font-medium mb-1 uppercase tracking-wide">Current Month</div>
          <div className="text-3xl font-bold text-indigo-400">M{currentMonth}</div>
          <div className="text-sm text-slate-400 mt-1 truncate">
            {months.find(m => m.month_number === currentMonth)?.title || '—'}
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-xs text-slate-400 font-medium mb-1 uppercase tracking-wide">Current Week</div>
          <div className="text-3xl font-bold text-purple-400">W{weekInMonth}</div>
          <div className="text-sm text-slate-400 mt-1">
            Week {currentWeek} of 18
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-xs text-slate-400 font-medium mb-1 uppercase tracking-wide">Overall Progress</div>
          <div className="text-3xl font-bold text-emerald-400">{stats.overall || 0}%</div>
          <div className="text-sm text-slate-400 mt-1">
            {stats.completed || 0} / {stats.totalTopics || 0} topics
          </div>
        </div>
      </div>

      {/* Month progress bars */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
        <h2 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wide">Month Progress</h2>
        <div className="space-y-4">
          {months.map((month, idx) => {
            const pct = monthProgressData[month.month_number] || 0
            const isCurrent = month.month_number === currentMonth
            return (
              <div key={month.id}>
                <div className="flex justify-between items-center mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-300">M{month.month_number}</span>
                    <span className={`text-xs ${isCurrent ? 'text-slate-200 font-medium' : 'text-slate-500'}`}>
                      {month.title}
                      {isCurrent && (
                        <span className="ml-2 text-[10px] bg-indigo-600 text-white px-1.5 py-0.5 rounded-full font-semibold">
                          Current
                        </span>
                      )}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">{pct}%</span>
                </div>
                <ProgressBar value={pct} color={MONTH_COLORS[idx]} />
              </div>
            )
          })}
        </div>
      </div>

      {/* The Rule card */}
      <div className="bg-slate-900 border border-indigo-800/40 rounded-xl p-6">
        <h2 className="text-sm font-semibold text-indigo-400 mb-2 uppercase tracking-wide">The Rule</h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Do not only watch tutorials. Every concept must become:
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {['Learn', 'Understand', 'Build', 'Deploy', 'Explain'].map((step, i) => (
            <span key={step} className="flex items-center gap-1.5">
              <span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-xs font-semibold border border-indigo-700/40">
                {step}
              </span>
              {i < 4 && <span className="text-slate-600 text-xs">→</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
