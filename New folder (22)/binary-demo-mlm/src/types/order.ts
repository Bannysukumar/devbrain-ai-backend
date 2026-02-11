import type { Timestamp } from 'firebase/firestore'

/** Order type: initial activation or repurchase */
export type OrderType = 'activation' | 'repurchase'

/** Order status */
export type OrderStatus = 'PENDING' | 'PAID' | 'CANCELLED'

/** Firestore document: orders/{orderId} */
export interface OrderDoc {
  uid: string
  planId: string
  type: OrderType
  status: OrderStatus
  amount: number
  createdAt: Timestamp
  updatedAt: Timestamp
  paidAt?: Timestamp
}
