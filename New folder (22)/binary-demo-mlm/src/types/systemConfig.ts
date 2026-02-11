import type { Timestamp } from 'firebase/firestore'

/** Firestore document: systemConfig/global */
export interface SystemConfigDoc {
  /** Whether new registrations are allowed */
  registrationOpen: boolean
  /** Default plan ID for demo */
  defaultPlanId?: string
  /** Pair income cycle in hours (for scheduled function) */
  pairIncomeCycleHours?: number
  /** Minimum withdrawal amount */
  minWithdrawal?: number
  /** Maximum withdrawal amount */
  maxWithdrawal?: number
  updatedAt: Timestamp
  updatedBy?: string
}
