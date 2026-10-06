'use client'

import { Dashboard } from '@/components/egoflow/dashboard'

export default function Page() {
  const Dash = Dashboard as any
  return <Dash active="overview" onChange={() => {}} />
}