import type { Timestamp } from 'firebase/firestore'

/** Withdrawal status */
export type WithdrawalStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'PAID'

/** Firestore document: withdrawals/{withdrawId} */
export interface WithdrawalDoc {
  uid: string
  amount: number
  status: WithdrawalStatus
  createdAt: Timestamp
  updatedAt: Timestamp
  reviewedAt?: Timestamp
  reviewedBy?: string
  notes?: string
}
