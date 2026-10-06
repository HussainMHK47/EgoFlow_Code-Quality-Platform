'use client'

import { ShieldAlert } from 'lucide-react'

export function BuildRateChart({ className }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${className || ''}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">Build Failure Rate</h3>
          <p className="text-xs text-slate-500">CI workflow failures over time</p>
        </div>
        <div className="flex size-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600 border border-amber-200">
          <ShieldAlert className="size-4" />
        </div>
      </div>

      {/* Visual Chart Placeholder matching the bright clean grid style */}
      <div className="mt-6 h-48 w-full rounded-xl border border-slate-100 bg-slate-50/50 p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 border-b border-slate-200 pb-2">
          <span>CURRENT: 65%</span>
          <span className="text-amber-600 font-medium">Needs Attention</span>
        </div>
        <div className="flex items-end justify-between gap-3 h-28 pt-2">
          {[30, 45, 35, 60, 50, 75, 65].map((height, i) => (
            <div key={i} className="w-full bg-amber-100 hover:bg-amber-500 rounded-t-md transition-colors relative group" style={{ height: `${height}%` }}>
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-900 text-white text-[10px] font-mono px-1.5 py-0.5 rounded shadow">
                {height}%
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-200">
          <span>Mon</span>
          <span>Wed</span>
          <span>Fri</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  )
}