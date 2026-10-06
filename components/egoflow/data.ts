export type TabId = 'overview' | 'pr-bottlenecks' | 'cicd-failures' | 'team-health'

export const tabs: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'pr-bottlenecks', label: 'PR Bottlenecks' },
  { id: 'cicd-failures', label: 'CI/CD Failures' },
  { id: 'team-health', label: 'Team Health' },
]

export const mergeTrend = [
  { day: 'Sep 23', hours: 5.8, p90: 11.2 },
  { day: 'Sep 24', hours: 5.4, p90: 10.6 },
  { day: 'Sep 25', hours: 6.1, p90: 12.4 },
  { day: 'Sep 26', hours: 5.2, p90: 9.8 },
  { day: 'Sep 27', hours: 4.9, p90: 9.1 },
  { day: 'Sep 28', hours: 4.6, p90: 8.7 },
  { day: 'Sep 29', hours: 5.0, p90: 9.4 },
  { day: 'Sep 30', hours: 4.7, p90: 8.9 },
  { day: 'Oct 1', hours: 4.3, p90: 8.2 },
  { day: 'Oct 2', hours: 4.5, p90: 8.6 },
  { day: 'Oct 3', hours: 4.0, p90: 7.8 },
  { day: 'Oct 4', hours: 3.8, p90: 7.4 },
  { day: 'Oct 5', hours: 4.1, p90: 7.9 },
  { day: 'Oct 6', hours: 3.6, p90: 7.1 },
]

export const buildRates = [
  { day: 'Sep 23', success: 88, failure: 12 },
  { day: 'Sep 24', success: 90, failure: 10 },
  { day: 'Sep 25', success: 86, failure: 14 },
  { day: 'Sep 26', success: 89, failure: 11 },
  { day: 'Sep 27', success: 91, failure: 9 },
  { day: 'Sep 28', success: 93, failure: 7 },
  { day: 'Sep 29', success: 90, failure: 10 },
  { day: 'Sep 30', success: 92, failure: 8 },
  { day: 'Oct 1', success: 91, failure: 9 },
  { day: 'Oct 2', success: 94, failure: 6 },
  { day: 'Oct 3', success: 92, failure: 8 },
  { day: 'Oct 4', success: 93, failure: 7 },
  { day: 'Oct 5', success: 91, failure: 9 },
  { day: 'Oct 6', success: 94, failure: 6 },
]

export type RepoStatus = 'Healthy' | 'Needs Attention'

export const repositories: {
  name: string
  team: string
  openPRs: number
  avgReviewHours: number
  buildPass: number
  status: RepoStatus
}[] = [
  { name: 'core-api', team: 'Platform', openPRs: 3, avgReviewHours: 2.1, buildPass: 96, status: 'Healthy' },
  { name: 'web-client', team: 'Frontend', openPRs: 4, avgReviewHours: 3.4, buildPass: 93, status: 'Healthy' },
  { name: 'payments-service', team: 'Billing', openPRs: 2, avgReviewHours: 7.8, buildPass: 84, status: 'Needs Attention' },
  { name: 'mobile-app', team: 'Mobile', openPRs: 3, avgReviewHours: 5.9, buildPass: 87, status: 'Needs Attention' },
  { name: 'infra-terraform', team: 'Infrastructure', openPRs: 1, avgReviewHours: 1.6, buildPass: 98, status: 'Healthy' },
  { name: 'data-pipeline', team: 'Data', openPRs: 1, avgReviewHours: 2.8, buildPass: 94, status: 'Healthy' },
]

export const prBottlenecks = [
  { stage: 'Waiting for first review', hours: 1.9, share: 45 },
  { stage: 'Review iterations', hours: 1.2, share: 29 },
  { stage: 'Waiting on CI', hours: 0.7, share: 17 },
  { stage: 'Approved → merged', hours: 0.4, share: 9 },
]

export const stalePRs = [
  { repo: 'payments-service', title: 'Refactor ledger reconciliation job', ageHours: 52, size: 'L' },
  { repo: 'mobile-app', title: 'Migrate navigation to new router', ageHours: 41, size: 'XL' },
  { repo: 'web-client', title: 'Add billing settings page', ageHours: 27, size: 'M' },
  { repo: 'core-api', title: 'Rate limiter for public endpoints', ageHours: 19, size: 'S' },
]

export const pipelineFailures = [
  { pipeline: 'payments-service / integration-tests', cause: 'Flaky test: ledger_sync_spec', count: 9, lastSeen: '18m ago' },
  { pipeline: 'mobile-app / ios-build', cause: 'Xcode cache miss timeout', count: 6, lastSeen: '1h ago' },
  { pipeline: 'web-client / e2e', cause: 'Playwright selector timeout', count: 4, lastSeen: '3h ago' },
  { pipeline: 'core-api / lint', cause: 'Dependency lockfile drift', count: 2, lastSeen: '6h ago' },
]

export const teamHealth = [
  { team: 'Platform', focusTime: 72, afterHours: 4, wipPerDev: 1.4, sentiment: 'Strong' },
  { team: 'Frontend', focusTime: 68, afterHours: 6, wipPerDev: 1.7, sentiment: 'Strong' },
  { team: 'Billing', focusTime: 54, afterHours: 14, wipPerDev: 2.6, sentiment: 'Strained' },
  { team: 'Mobile', focusTime: 58, afterHours: 11, wipPerDev: 2.3, sentiment: 'Watch' },
  { team: 'Infrastructure', focusTime: 70, afterHours: 7, wipPerDev: 1.2, sentiment: 'Strong' },
  { team: 'Data', focusTime: 66, afterHours: 5, wipPerDev: 1.5, sentiment: 'Strong' },
]
