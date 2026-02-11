import type { Timestamp } from 'firebase/firestore'

/** Ledger entry type */
export type LedgerType =
  | 'direct_income'
  | 'pair_income'
  | 'matching_income'
  | 'withdrawal_debit'
  | 'order_credit'
  | 'adjustment'
  | 'other'

/** Firestore document: ledger/{txnId} */
export interface LedgerDoc {
  uid: string
  type: LedgerType
  amount: number
  /** Positive = credit, negative = debit */
  balanceAfter?: number
  refId?: string
  description?: string
  createdAt: Timestamp
}
