export type UserRole = 'user' | 'admin' | 'superAdmin'

export interface AppUser {
  uid: string
  email: string | null
  role: UserRole
}
