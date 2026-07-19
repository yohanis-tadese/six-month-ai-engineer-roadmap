export function Spinner({ className = '' }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="w-8 h-8 border-4 border-slate-700 border-t-indigo-500 rounded-full animate-spin" />
    </div>
  )
}
