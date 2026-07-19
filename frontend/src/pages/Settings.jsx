import { useState, useEffect } from 'react'
import { getSettings, updateSettings } from '../api'
import { Spinner } from '../components/ui/Spinner'
import { useToast } from '../hooks/useToast'
import { Toast } from '../components/ui/Toast'

export function Settings() {
  const { toasts, addToast } = useToast()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({ name: '', startDate: '' })

  useEffect(() => {
    getSettings()
      .then(res => {
        setForm({
          name: res.data.name || '',
          startDate: res.data.startDate || '',
        })
      })
      .catch(() => addToast('Failed to load settings', 'error'))
      .finally(() => setLoading(false))
  }, [])

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      await updateSettings(form)
      addToast('Settings saved')
    } catch {
      addToast('Failed to save settings', 'error')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <Spinner className="mt-20" />

  return (
    <div className="p-8 max-w-xl">
      <Toast toasts={toasts} />

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-100">Settings</h1>
        <p className="text-slate-400 text-sm mt-1">Configure your roadmap preferences</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Name */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <label className="block text-sm font-semibold text-slate-300 mb-3">Your Name</label>
          <input
            type="text"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            placeholder="e.g. Alex"
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <p className="text-xs text-slate-500 mt-2">Used in the dashboard greeting.</p>
        </div>

        {/* Start date */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <label className="block text-sm font-semibold text-slate-300 mb-3">Start Date</label>
          <input
            type="date"
            value={form.startDate}
            onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))}
            className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
          />
          <p className="text-xs text-slate-500 mt-2">
            Used to compute your current month, week, and today's topic.
          </p>
        </div>

        {/* Daily target info */}
        <div className="bg-slate-900 border border-amber-800/40 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-amber-300">Daily Target</span>
          </div>
          <p className="text-sm text-slate-400">
            5 hours/day — 2.5h learning + 2.5h building
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Monday to Friday. Weekends are for rest or catch-up only.
          </p>
        </div>

        {/* Save */}
        <button
          type="submit"
          disabled={saving}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
        >
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </form>
    </div>
  )
}
