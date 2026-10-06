'use client'

import { AlertTriangle, Clock, Users } from 'lucide-react'

export function CicdFailures() {
  const failures = [
    { cause: 'Integration Test Timeout', count: 14, percentage: '42%', severity: 'High' },
    { cause: 'Docker Image Build Failure', count: 8, percentage: '24%', severity: 'Medium' },
    { cause: 'Environment Variable Missing', count: 6, percentage: '18%', severity: 'Medium' },
    { cause: 'Linter / Typecheck Errors', count: 5, percentage: '16%', severity: 'Low' },
  ]

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">Pipeline Failure Root Causes</h3>
          <p className="text-xs text-slate-500">Most frequent CI/CD failure vectors across active branches</p>
        </div>
        <div className="flex size-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600 border border-amber-200">
          <AlertTriangle className="size-4" />
        </div>
      </div>

      <div className="space-y-3">
        {failures.map((item, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/60 p-4">
            <div>
              <p className="text-sm font-bold text-slate-900">{item.cause}</p>
              <p className="text-xs text-slate-500">{item.count} recorded failures this cycle</p>
            </div>
            <div className="text-right">
              <span className="font-mono text-sm font-bold text-slate-900">{item.percentage}</span>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-600">{item.severity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PrBottlenecks() {
  const bottlenecks = [
    { stage: 'Awaiting Initial Reviewer Assignment', avgTime: '14.2 hrs', status: 'Critical' },
    { stage: 'Changes Requested / Revision Loop', avgTime: '11.5 hrs', status: 'Moderate' },
    { stage: 'QA / Staging Verification Hold', avgTime: '8.4 hrs', status: 'Stable' },
    { stage: 'Ready to Merge / Final Approval', avgTime: '2.1 hrs', status: 'Fast' },
  ]

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">Pull Request Lifecycle Bottlenecks</h3>
          <p className="text-xs text-slate-500">Where pull requests stall during the code review process</p>
        </div>
        <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200">
          <Clock className="size-4" />
        </div>
      </div>

      <div className="space-y-3">
        {bottlenecks.map((item, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/60 p-4">
            <div>
              <p className="text-sm font-bold text-slate-900">{item.stage}</p>
            </div>
            <div className="text-right">
              <span className="font-mono text-sm font-bold text-slate-900">{item.avgTime}</span>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TeamHealth() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">Sustainable Pace & Team Well-being</h3>
          <p className="text-xs text-slate-500">Aggregated team signals ensuring burnout prevention</p>
        </div>
        <div className="flex size-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600 border border-sky-200">
          <Users className="size-4" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 text-center">
          <p className="text-xs font-semibold text-slate-500">After-Hours Commits</p>
          <p className="mt-2 text-2xl font-black text-slate-900">3.2%</p>
          <span className="mt-1 inline-block text-[11px] font-bold text-emerald-600">Well below threshold</span>
        </div>
        <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 text-center">
          <p className="text-xs font-semibold text-slate-500">WIP PR Limit Adherence</p>
          <p className="mt-2 text-2xl font-black text-slate-900">94.8%</p>
          <span className="mt-1 inline-block text-[11px] font-bold text-emerald-600">Healthy flow</span>
        </div>
        <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 text-center">
          <p className="text-xs font-semibold text-slate-500">Review Workload Balance</p>
          <p className="mt-2 text-2xl font-black text-slate-900">Balanced</p>
          <span className="mt-1 inline-block text-[11px] font-bold text-emerald-600">No overload flagged</span>
        </div>
      </div>
    </div>
  )
}