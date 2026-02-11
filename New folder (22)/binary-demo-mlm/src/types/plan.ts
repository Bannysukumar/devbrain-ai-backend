import type { Timestamp } from 'firebase/firestore'

/** Firestore document: plans/{planId} */
export interface PlanDoc {
  name: string
  amount: number
  /** Value per pair for pair income calculation */
  pairValue: number
  isActive: boolean
  createdAt: Timestamp
  updatedAt: Timestamp
}
