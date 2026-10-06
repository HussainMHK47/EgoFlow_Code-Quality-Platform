'use client'

import { Clock, ShieldAlert, GitPullRequest, Cpu } from 'lucide-react'

export function MetricCards({ metrics }: { metrics?: any }) {
  const data = metrics || {
    average_time_to_merge_hours: 0,
    build_failure_rate_percentage: 0,
    analyzed_prs_count: 0,
    total_ci_runs_analyzed: 0,
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* Card 1: Avg Time-to-Merge */}
      <div className="group relative rounded-2xl border-3 border-black bg-yellow-200 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center justify-between">
          <p className="text-xs font-black uppercase tracking-wider text-slate-800">Avg Time-to-Merge</p>
          <div className="rounded-xl border-2 border-black bg-white p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform">
            <Clock className="size-4 text-black" />
          </div>
        </div>
        <p className="mt-4 text-4xl font-black tracking-tight text-black">
          {data.average_time_to_merge_hours} <span className="text-lg font-bold">hrs</span>
        </p>
      </div>

      {/* Card 2: Build Failure Rate */}
      <div className="group relative rounded-2xl border-3 border-black bg-pink-200 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center justify-between">
          <p className="text-xs font-black uppercase tracking-wider text-slate-800">Build Failure Rate</p>
          <div className="rounded-xl border-2 border-black bg-white p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform">
            <ShieldAlert className="size-4 text-black" />
          </div>
        </div>
        <p className="mt-4 text-4xl font-black tracking-tight text-black">
          {data.build_failure_rate_percentage}%
        </p>
      </div>

      {/* Card 3: Analyzed PRs */}
      <div className="group relative rounded-2xl border-3 border-black bg-cyan-200 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center justify-between">
          <p className="text-xs font-black uppercase tracking-wider text-slate-800">Analyzed PRs</p>
          <div className="rounded-xl border-2 border-black bg-white p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform">
            <GitPullRequest className="size-4 text-black" />
          </div>
        </div>
        <p className="mt-4 text-4xl font-black tracking-tight text-black">
          {data.analyzed_prs_count}
        </p>
      </div>

      {/* Card 4: Total CI Runs */}
      <div className="group relative rounded-2xl border-3 border-black bg-lime-200 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center justify-between">
          <p className="text-xs font-black uppercase tracking-wider text-slate-800">Total CI Runs</p>
          <div className="rounded-xl border-2 border-black bg-white p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform">
            <Cpu className="size-4 text-black" />
          </div>
        </div>
        <p className="mt-4 text-4xl font-black tracking-tight text-black">
          {data.total_ci_runs_analyzed}
        </p>
      </div>
    </div>
  )
}