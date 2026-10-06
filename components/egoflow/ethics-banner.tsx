export function EthicsBanner() {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 shadow-sm flex items-center gap-3">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm font-black text-sm">
        i
      </div>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-900">EgoFlow Ethical Metric Policy</h4>
        <p className="text-xs text-emerald-700 mt-0.5">
          Team-level metrics only. Individual developer rankings are excluded to protect team well-being and psychological safety.
        </p>
      </div>
    </div>
  )
}