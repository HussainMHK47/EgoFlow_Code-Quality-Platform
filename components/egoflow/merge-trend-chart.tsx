'use client'

import { Activity } from 'lucide-react'

export function MergeTrendChart({ className }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${className || ''}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">Time-to-Merge Trend</h3>
          <p className="text-xs text-slate-500">Hours from PR opened to merged, across repositories</p>
        </div>
        <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200">
          <Activity className="size-4" />
        </div>
      </div>

      {/* Visual Chart Placeholder matching the bright clean grid style */}
      <div className="mt-6 h-48 w-full rounded-xl border border-slate-100 bg-slate-50/50 p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 border-b border-slate-200 pb-2">
          <span>PEAK: 6.2h</span>
          <span>AVG: 4.5h</span>
          <span>TARGET: &lt;4h</span>
        </div>
        <div className="flex items-end justify-between gap-2 h-28 pt-2">
          {[40, 65, 45, 80, 50, 75, 90, 60, 45, 55, 70, 85, 60, 50].map((height, i) => (
            <div key={i} className="w-full bg-emerald-100 hover:bg-emerald-500 rounded-t-md transition-colors relative group" style={{ height: `${height}%` }}>
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-900 text-white text-[10px] font-mono px-1.5 py-0.5 rounded shadow">
                {height * 0.1}h
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-200">
          <span>Sep 23</span>
          <span>Sep 30</span>
          <span>Oct 6</span>
        </div>
      </div>
    </div>
  )
}