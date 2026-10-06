'use client'

export function RepoTable() {
  const repos = [
    { name: 'core-api', team: 'Platform', prs: 3, time: '32.1h', status: 'Healthy', statusColor: 'bg-emerald-100 text-emerald-800' },
    { name: 'web-client', team: 'Frontend', prs: 5, time: '43.4h', status: 'Healthy', statusColor: 'bg-emerald-100 text-emerald-800' },
    { name: 'payments-service', team: 'Billing', prs: 2, time: '27.8h', status: 'Needs Attention', statusColor: 'bg-amber-100 text-amber-800' },
    { name: 'mobile-app', team: 'Mobile', prs: 4, time: '35.9h', status: 'Needs Attention', statusColor: 'bg-amber-100 text-amber-800' },
    { name: 'infra-terraform', team: 'Infrastructure', prs: 1, time: '11.6h', status: 'Healthy', statusColor: 'bg-emerald-100 text-emerald-800' },
    { name: 'data-pipeline', team: 'Data', prs: 2, time: '12.8h', status: 'Healthy', statusColor: 'bg-emerald-100 text-emerald-800' },
  ]

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">Team-Level Performance Breakdown</h3>
          <p className="text-xs text-slate-500">Aggregated per repository — no individual contributor data</p>
        </div>
        <span className="rounded-lg bg-slate-100 px-2.5 py-1 font-mono text-xs font-semibold text-slate-600 border border-slate-200">
          6 repos · 2 flagged
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-slate-200 font-mono text-slate-400 uppercase">
            <tr>
              <th className="pb-3 font-semibold">Repository Name</th>
              <th className="pb-3 font-semibold">Team</th>
              <th className="pb-3 font-semibold">Open PRs</th>
              <th className="pb-3 font-semibold">Average Review Time</th>
              <th className="pb-3 font-semibold text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
            {repos.map((repo, i) => (
              <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 font-bold text-slate-900">{repo.name}</td>
                <td className="py-3 text-slate-500">{repo.team}</td>
                <td className="py-3">{repo.prs}</td>
                <td className="py-3 font-mono">{repo.time}</td>
                <td className="py-3 text-right">
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold ${repo.statusColor}`}>
                    {repo.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}