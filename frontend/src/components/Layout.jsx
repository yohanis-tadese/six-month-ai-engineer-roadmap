import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { getProgressStats } from '../api'

export function Layout() {
  const [stats, setStats] = useState({ overall: 0 })

  const refreshStats = () => {
    getProgressStats().then(r => setStats(r.data)).catch(() => {})
  }

  useEffect(() => {
    refreshStats()
  }, [])

  return (
    <div className="flex h-screen bg-slate-950 overflow-hidden">
      <Sidebar overallProgress={stats.overall} />
      <main className="flex-1 overflow-y-auto">
        <Outlet context={{ stats, refreshStats }} />
      </main>
    </div>
  )
}
