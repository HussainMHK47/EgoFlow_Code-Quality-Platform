'use client'

import { useState } from 'react'
import { Bell, X, CheckCircle2, AlertTriangle, GitMerge } from 'lucide-react'
import { cn } from '@/lib/utils'
import { tabs, type TabId } from './data'

export function TopNav({ active, onChange }: { active: TabId; onChange: (tab: TabId) => void }) {
  const [notifOpen, setNotifOpen] = useState(false)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Pipeline Success",
      desc: "fastapi/fastapi CI workflow passed successfully",
      time: "30 min ago",
      type: "success"
    },
    {
      id: 2,
      title: "Review Bottleneck",
      desc: "Awaiting initial reviewer assignment on core-api",
      time: "1 hr ago",
      type: "warning"
    },
    {
      id: 3,
      title: "High Merge Latency",
      desc: "payments-service exceeded 24h threshold",
      time: "2 hrs ago",
      type: "warning"
    },
    {
      id: 4,
      title: "GitHub Sync",
      desc: "Successfully synced latest branch metrics",
      time: "3 hrs ago",
      type: "info"
    }
  ])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6">
          
          {/* Blue Lock Style Flashy Bold Title */}
          <a href="#" className="flex shrink-0 items-center group" aria-label="EgoFlow home">
            <span className="text-2xl font-black tracking-tighter text-black uppercase transition-transform duration-150 group-hover:scale-105 italic drop-shadow-[2px_2px_0px_rgba(34,197,94,1)]">
              Ego<span className="text-emerald-600 underline decoration-black decoration-2">Flow</span>
            </span>
          </a>

          <nav aria-label="Dashboard sections" className="-mb-px flex h-full min-w-0 flex-1 overflow-x-auto ml-4">
            <div role="tablist" className="flex h-full items-stretch gap-1">
              {tabs.map((tab) => {
                const selected = tab.id === active
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls={`panel-${tab.id}`}
                    id={`tab-${tab.id}`}
                    onClick={() => onChange(tab.id)}
                    className={cn(
                      'relative whitespace-nowrap px-3 text-[13px] font-semibold transition-colors focus-visible:outline-2',
                      selected ? 'text-slate-900 font-bold' : 'text-slate-500 hover:text-slate-900',
                    )}
                  >
                    {tab.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-x-2 bottom-0 h-[2px] transition-opacity',
                        selected ? 'bg-emerald-600 opacity-100' : 'opacity-0',
                      )}
                    />
                  </button>
                )
              })}
            </div>
          </nav>

          <div className="relative hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => setNotifOpen(!notifOpen)}
              aria-label="Notifications"
              className="relative flex size-9 items-center justify-center rounded-xl border-2 border-black bg-yellow-200 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
            >
              <Bell className="size-4" aria-hidden="true" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-black text-white border border-black">
                  {notifications.length}
                </span>
              )}
            </button>

            {/* Notification Dropdown Menu */}
            {notifOpen && (
              <div className="absolute right-0 top-12 w-80 rounded-2xl border-3 border-black bg-white p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">Live Team Alerts</h3>
                  <button 
                    onClick={() => setNotifOpen(false)}
                    className="rounded-lg p-1 text-slate-500 hover:bg-slate-100 hover:text-black cursor-pointer"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                <div className="mt-3 space-y-2.5 max-h-64 overflow-y-auto pr-1">
                  {notifications.length === 0 ? (
                    <p className="py-4 text-center text-xs text-slate-500">No new notifications</p>
                  ) : (
                    notifications.map((n) => (
                      <div key={n.id} className="flex items-start gap-2.5 rounded-xl border-2 border-slate-200 bg-slate-50 p-2.5">
                        {n.type === 'success' && <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 shrink-0" />}
                        {n.type === 'warning' && <AlertTriangle className="size-4 text-amber-600 mt-0.5 shrink-0" />}
                        {n.type === 'info' && <GitMerge className="size-4 text-sky-600 mt-0.5 shrink-0" />}
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-bold text-slate-900">{n.title}</p>
                            <span className="text-[10px] font-mono text-slate-600">{n.time}</span>
                          </div>
                          <p className="text-[11px] text-slate-600 mt-0.5">{n.desc}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 text-center">
                  <button 
                    onClick={() => setNotifications([])}
                    className="text-[11px] font-bold text-slate-500 hover:text-black underline cursor-pointer"
                  >
                    Clear all notifications
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}