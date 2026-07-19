import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { getMonths, getMonthFull, getProgress, markComplete, markIncomplete, getSettings } from '../api'
import { ProgressBar } from '../components/ui/ProgressBar'
import { Spinner } from '../components/ui/Spinner'
import { useToast } from '../hooks/useToast'
import { Toast } from '../components/ui/Toast'

const MONTH_COLORS = {
  1: '#6366f1',
  2: '#8b5cf6',
  3: '#ec4899',
  4: '#f59e0b',
  5: '#10b981',
  6: '#3b82f6',
}

function getWeekLabel(weekIndex) {
  return weekIndex === 3 ? 'Build Week' : `Learning Week ${weekIndex + 1}`
}

// Map topic sort_order to a week index (0-2) within a month's learning sections
// Learning sections have 5 topics each (Mon-Fri). Week 4 = project (build week).
function groupTopicsIntoWeeks(sections) {
  const learningSections = sections.filter(s => s.type === 'learning')
  const projectSections = sections.filter(s => s.type === 'project')

  // Weeks 1-3: one learning section per week
  const weeks = learningSections.slice(0, 3).map((section, idx) => ({
    weekIndex: idx,
    label: getWeekLabel(idx),
    topics: section.topics || [],
    sectionTitle: section.title,
  }))

  // Week 4: project section
  if (projectSections.length > 0) {
    weeks.push({
      weekIndex: 3,
      label: 'Build Week',
      topics: projectSections[0].topics || [],
      sectionTitle: projectSections[0].title,
      isProject: true,
    })
  }

  return weeks
}

function TopicRow({ topic, completed, onToggle, today, isPast }) {
  const [loading, setLoading] = useState(false)

  const handleToggle = async () => {
    setLoading(true)
    await onToggle(topic.id, completed)
    setLoading(false)
  }

  return (
    <div
      className={`flex items-start gap-3 px-4 py-2.5 rounded-lg group cursor-pointer transition-colors ${
        completed ? 'opacity-60' : 'hover:bg-slate-800/50'
      }`}
      onClick={handleToggle}
    >
      <div className={`mt-0.5 w-5 h-5 flex-shrink-0 rounded border-2 flex items-center justify-center transition-colors ${
        completed
          ? 'bg-emerald-600 border-emerald-600'
          : 'border-slate-600 group-hover:border-slate-400'
      }`}>
        {loading ? (
          <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : completed ? (
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        ) : null}
      </div>
      <span className={`text-sm flex-1 leading-relaxed ${completed ? 'line-through text-slate-500' : 'text-slate-300'}`}>
        {topic.text}
      </span>
      {today && !completed && (
        <span className="px-2 py-0.5 bg-indigo-600/20 text-indigo-300 rounded-full text-xs font-semibold border border-indigo-700/40 flex-shrink-0">
          Today
        </span>
      )}
      {isPast && !completed && !today && (
        <span className="px-2 py-0.5 bg-amber-600/20 text-amber-300 rounded-full text-xs font-semibold border border-amber-700/40 flex-shrink-0">
          Catch up
        </span>
      )}
    </div>
  )
}

function CodingSessionCard({ session, completedIds, onToggle }) {
  const tasks = session.coding_tasks || []
  const completedCount = tasks.filter(t => completedIds.has(t.id)).length

  return (
    <div className="mt-4 bg-slate-800/60 border border-slate-700/60 rounded-xl p-5">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-xs font-semibold text-purple-400 uppercase tracking-wide mb-1">Coding Session</div>
          <h4 className="text-sm font-semibold text-slate-200">{session.title}</h4>
        </div>
        <span className="text-xs font-semibold text-slate-400 bg-slate-700 px-2 py-1 rounded-full flex-shrink-0 ml-3">
          {completedCount}/{tasks.length}
        </span>
      </div>

      {session.why && (
        <p className="text-xs text-slate-400 mb-1">
          <span className="font-semibold text-slate-500">Why: </span>{session.why}
        </p>
      )}
      {session.outcome && (
        <p className="text-xs text-slate-400 mb-3">
          <span className="font-semibold text-slate-500">Outcome: </span>{session.outcome}
        </p>
      )}

      <div className="space-y-1 mt-3">
        {tasks.map(task => {
          const done = completedIds.has(task.id)
          return (
            <div
              key={task.id}
              className={`flex items-start gap-3 px-3 py-2 rounded-lg cursor-pointer group transition-colors ${
                done ? 'opacity-60' : 'hover:bg-slate-700/40'
              }`}
              onClick={() => onToggle(task.id, done, 'coding_task')}
            >
              <div className={`mt-0.5 w-4 h-4 flex-shrink-0 rounded border-2 flex items-center justify-center transition-colors ${
                done ? 'bg-purple-600 border-purple-600' : 'border-slate-600 group-hover:border-slate-400'
              }`}>
                {done && (
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className={`text-xs flex-1 leading-relaxed ${done ? 'line-through text-slate-500' : 'text-slate-400'}`}>
                {task.text}
              </span>
            </div>
          )
        })}
      </div>

      {tasks.length > 0 && (
        <div className="mt-3">
          <ProgressBar
            value={Math.round((completedCount / tasks.length) * 100)}
            color="#a855f7"
          />
        </div>
      )}
    </div>
  )
}

function WeekCard({ week, session, completedIds, onToggle, startDate, globalWeekOffset }) {
  const [open, setOpen] = useState(false)

  // Compute which days are today/past based on startDate
  const getTopicDateInfo = (topicIndex) => {
    if (!startDate) return { today: false, isPast: false }
    const start = new Date(startDate)
    const weekStartDay = globalWeekOffset * 7
    const topicDay = weekStartDay + topicIndex
    const topicDate = new Date(start.getTime() + topicDay * 24 * 60 * 60 * 1000)
    const now = new Date()
    const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const topicDateOnly = new Date(topicDate.getFullYear(), topicDate.getMonth(), topicDate.getDate())
    return {
      today: topicDateOnly.getTime() === todayDate.getTime(),
      isPast: topicDateOnly < todayDate,
    }
  }

  const topicsCompleted = week.topics.filter(t => completedIds.has(t.id)).length
  const topicsTotal = week.topics.length

  return (
    <div className="border border-slate-800 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-800/40 transition-colors text-left"
        onClick={() => setOpen(o => !o)}
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
            week.isProject ? 'bg-pink-600/20 text-pink-400' : 'bg-indigo-600/20 text-indigo-400'
          }`}>
            W{week.weekIndex + 1}
          </div>
          <div>
            <div className={`text-sm font-semibold ${week.isProject ? 'text-pink-300' : 'text-slate-200'}`}>
              {week.label}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">{week.sectionTitle}</div>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 ml-4">
          <span className="text-xs text-slate-400">{topicsCompleted}/{topicsTotal}</span>
          <svg
            className={`w-4 h-4 text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="border-t border-slate-800 px-3 py-3">
          {/* Daily topics */}
          <div className="space-y-0.5">
            {week.topics.map((topic, i) => {
              const { today, isPast } = getTopicDateInfo(i)
              return (
                <TopicRow
                  key={topic.id}
                  topic={topic}
                  completed={completedIds.has(topic.id)}
                  onToggle={(id, done) => onToggle(id, done, 'topic')}
                  today={today}
                  isPast={isPast}
                />
              )
            })}
          </div>

          {/* Coding session card */}
          {session && (
            <CodingSessionCard
              session={session}
              completedIds={completedIds}
              onToggle={onToggle}
            />
          )}
        </div>
      )}
    </div>
  )
}

export function Roadmap() {
  const { stats, refreshStats } = useOutletContext()
  const { toasts, addToast } = useToast()

  const [months, setMonths] = useState([])
  const [activeMonthId, setActiveMonthId] = useState(null)
  const [monthData, setMonthData] = useState(null)
  const [completedIds, setCompletedIds] = useState(new Set())
  const [startDate, setStartDate] = useState(null)
  const [loading, setLoading] = useState(true)
  const [monthLoading, setMonthLoading] = useState(false)

  useEffect(() => {
    Promise.all([getMonths(), getProgress(), getSettings()])
      .then(([monthsRes, progressRes, settingsRes]) => {
        setMonths(monthsRes.data)
        const allIds = [
          ...(progressRes.data.topics || []),
          ...(progressRes.data.codingTasks || []),
        ]
        setCompletedIds(new Set(allIds))
        setStartDate(settingsRes.data.startDate || null)
        if (monthsRes.data.length > 0) {
          setActiveMonthId(monthsRes.data[0].id)
        }
      })
      .catch(() => addToast('Failed to load roadmap data', 'error'))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (!activeMonthId) return
    setMonthLoading(true)
    getMonthFull(activeMonthId)
      .then(res => setMonthData(res.data))
      .catch(() => addToast('Failed to load month data', 'error'))
      .finally(() => setMonthLoading(false))
  }, [activeMonthId])

  const handleToggle = async (itemId, isCurrentlyDone, itemType = 'topic') => {
    try {
      if (isCurrentlyDone) {
        await markIncomplete(itemId)
        setCompletedIds(prev => {
          const next = new Set(prev)
          next.delete(itemId)
          return next
        })
      } else {
        await markComplete(itemId, itemType)
        setCompletedIds(prev => new Set([...prev, itemId]))
      }
      refreshStats()
    } catch {
      addToast('Failed to update progress', 'error')
    }
  }

  if (loading) return <Spinner className="mt-20" />

  const activeMonth = months.find(m => m.id === activeMonthId)
  const monthColor = activeMonth ? MONTH_COLORS[activeMonth.month_number] : '#6366f1'
  const monthProgressPct = stats.monthProgress?.[activeMonth?.month_number] || 0

  const weeks = monthData ? groupTopicsIntoWeeks(monthData.sections || []) : []
  const sessions = monthData?.coding_sessions || []

  return (
    <div className="p-8">
      <Toast toasts={toasts} />

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-100">Roadmap</h1>
        <p className="text-slate-400 text-sm mt-1">
          {stats.completed || 0} of {stats.totalTopics || 0} topics completed — {stats.overall || 0}% overall
        </p>
      </div>

      {/* Month tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {months.map(month => {
          const pct = stats.monthProgress?.[month.month_number] || 0
          const isActive = month.id === activeMonthId
          return (
            <button
              key={month.id}
              onClick={() => setActiveMonthId(month.id)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                isActive
                  ? 'text-white border-transparent shadow-lg'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
              style={isActive ? { backgroundColor: MONTH_COLORS[month.month_number], borderColor: MONTH_COLORS[month.month_number] } : {}}
            >
              <div>M{month.month_number}</div>
              <div className="text-xs font-normal opacity-80">{pct}%</div>
            </button>
          )
        })}
      </div>

      {/* Month content */}
      {activeMonth && (
        <div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="text-lg font-bold text-slate-100">{activeMonth.title}</h2>
                {monthData?.main_goal && (
                  <p className="text-sm text-slate-400 mt-1 max-w-2xl">{monthData.main_goal}</p>
                )}
              </div>
              <span className="text-sm font-bold text-slate-300 ml-4 flex-shrink-0">{monthProgressPct}%</span>
            </div>
            <ProgressBar value={monthProgressPct} color={monthColor} />
          </div>

          {monthLoading ? (
            <Spinner className="mt-10" />
          ) : (
            <div className="space-y-3">
              {weeks.map((week, idx) => {
                // Match session: sessions are stored per week_number (1-3 per month)
                const session = sessions.find(s => s.week_number === idx + 1)
                // Global week offset for date calculation
                const globalWeekOffset = ((activeMonth.month_number - 1) * 3) + idx
                return (
                  <WeekCard
                    key={week.weekIndex}
                    week={week}
                    session={session}
                    completedIds={completedIds}
                    onToggle={handleToggle}
                    startDate={startDate}
                    globalWeekOffset={globalWeekOffset}
                  />
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
