import type { Timestamp } from 'firebase/firestore'

/** Firestore document: auditLogs/{logId} */
export interface AuditLogDoc {
  actorUid: string
  actorRole: string
  action: string
  targetId?: string
  targetType?: string
  details?: Record<string, unknown>
  createdAt: Timestamp
}
