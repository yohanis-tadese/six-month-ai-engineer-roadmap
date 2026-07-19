export function ProgressBar({ value, color = '#6366f1', className = '' }) {
  return (
    <div className={`h-1.5 bg-slate-700 rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${value}%`, backgroundColor: color }}
      />
    </div>
  )
}
