import type { Timestamp } from 'firebase/firestore'

/** Firestore document: binaryStats/{uid} */
export interface BinaryStatsDoc {
  uid: string
  /** Total left leg count (direct + indirect) */
  leftCount: number
  /** Total right leg count */
  rightCount: number
  /** Left leg business volume */
  leftBusiness: number
  /** Right leg business volume */
  rightBusiness: number
  /** Pairs matched (for pair income) */
  pairsMatched: number
  /** Carry-forward for next cycle */
  carryForward: number
  /** Wallet balance (read-only from client; written by Cloud Functions only) */
  walletBalance: number
  updatedAt: Timestamp
}
