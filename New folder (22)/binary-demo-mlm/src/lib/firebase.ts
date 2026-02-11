import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

let app: FirebaseApp
let auth: ReturnType<typeof getAuth>
let db: ReturnType<typeof getFirestore>

function initFirebase() {
  if (app) return { app, auth, db }
  app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  db = getFirestore(app)

  const useEmulator = import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true'
  if (useEmulator) {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true })
    connectFirestoreEmulator(db, '127.0.0.1', 8080)
  }

  return { app, auth, db }
}

const { app: firebaseApp, auth: authInstance, db: dbInstance } = initFirebase()

export { firebaseApp as app, authInstance as auth, dbInstance as db }
