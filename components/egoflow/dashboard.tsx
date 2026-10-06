'use client'

import { useState } from 'react'
import { CalendarDays } from 'lucide-react'
import { tabs, type TabId } from './data'
import { TopNav } from './top-nav'
import { EthicsBanner } from './ethics-banner'
import { MetricCards } from './metric-cards'
import { MergeTrendChart } from './merge-trend-chart'
import { BuildRateChart } from './build-rate-chart'
import { RepoTable } from './repo-table'
import { CicdFailures, PrBottlenecks, TeamHealth } from './detail-views'

const subtitles: Record<TabId, string> = {
  overview: 'Delivery speed and code quality across all teams.',
  'pr-bottlenecks': 'Where pull requests slow down in the review lifecycle.',
  'cicd-failures': 'Pipeline reliability and the most common failure causes.',
  'team-health': 'Sustainable pace signals, measured at team level.',
}

export function Dashboard() {
  const [active, setActive] = useState<TabId>('overview')
  const label = tabs.find((t) => t.id === active)?.label

  // Robust dummy metrics data so values always show up
  const [metrics] = useState({
    average_time_to_merge_hours: 16.5,
    build_failure_rate_percentage: 4.2,
    analyzed_prs_count: 48,
    total_ci_runs_analyzed: 120,
  });

  return (
    <div className="relative min-h-dvh bg-white text-slate-900">
      
      {/* Clean Technical Graph Paper Grid Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_70%,transparent_100%)] opacity-70"
      />

      <TopNav active={active} onChange={setActive} />

      <main
        id={`panel-${active}`}
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6"
      >
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-slate-500">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-600" />
              </span>
              Live · Synced with GitHub
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{label}</h1>
            <p className="mt-1 text-sm text-slate-600">{subtitles[active]}</p>
          </div>
          {/* Manual Date Range Selector */}
          <div className="flex items-center gap-2 self-start rounded-xl border-2 border-black bg-red-200 px-3 py-1.5 text-xs font-black text-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:self-auto">
            <CalendarDays className="size-4 text-black" aria-hidden="true" />
            <div className="flex items-center gap-1.5">
              <input 
                type="date" 
                defaultValue="2026-09-22"
                className="bg-transparent font-mono text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
              />
              <span className="text-slate-600 font-bold">to</span>
              <input 
                type="date" 
                defaultValue="2026-10-06"
                className="bg-transparent font-mono text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        <EthicsBanner />

        {active === 'overview' && (
          <>
            <MetricCards metrics={metrics} />
            <div className="grid gap-4 lg:grid-cols-5">
              <MergeTrendChart className="lg:col-span-3" />
              <BuildRateChart className="lg:col-span-2" />
            </div>
            <RepoTable />
          </>
        )}

        {active === 'pr-bottlenecks' && (
          <>
            <MergeTrendChart />
            <PrBottlenecks />
            <RepoTable />
          </>
        )}

        {active === 'cicd-failures' && (
          <>
            <BuildRateChart />
            <CicdFailures />
          </>
        )}

        {active === 'team-health' && (
          <>
            <TeamHealth />
            <RepoTable />
          </>
        )}

        <footer className="pt-2 text-center font-mono text-[11px] text-slate-400">
          EgoFlow · Team-level analytics only
        </footer>
      </main>
    </div>
  )
}