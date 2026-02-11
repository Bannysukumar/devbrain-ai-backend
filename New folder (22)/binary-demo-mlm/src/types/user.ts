import type { Timestamp } from 'firebase/firestore'
import type { UserRole } from './auth'

/** Firestore document: users/{uid} */
export interface UserDoc {
  email: string
  role: UserRole
  name?: string
  phone?: string
  sponsorRef?: string
  sponsorUid?: string
  refCode: string
  /** Left child uid in binary tree */
  leftUid?: string
  /** Right child uid in binary tree */
  rightUid?: string
  /** Parent uid in binary tree */
  parentUid?: string
  createdAt: Timestamp
  updatedAt: Timestamp
}
