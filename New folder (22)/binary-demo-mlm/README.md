# Binary Plan Demo (MLM)

A demo web app for a binary plan MLM with Firebase backend. Built with React, Vite, Tailwind, React Router, Firebase Auth, and Firestore.

## Tech stack

- **Frontend:** React 19, Vite 7, Tailwind CSS 4, React Router 7
- **Backend:** Firebase Auth, Firestore (Cloud Functions in later phases)
- **Local dev:** Firebase Emulators supported via env flag

## Phase 1 — Setup

### Prerequisites

- Node.js 20+
- npm

### 1. Install dependencies

```bash
cd binary-demo-mlm
npm install
```

### 2. Firebase configuration

1. Create a project at [Firebase Console](https://console.firebase.google.com).
2. Enable **Authentication** (Email/Password sign-in).
3. Create a **Firestore** database.
4. In Project settings → General, copy your app’s config (or add a web app and copy config).

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

Edit `.env` and set:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

For local development with emulators (Phase 2+), set:

- `VITE_USE_FIREBASE_EMULATOR=true`

### 3. Run the app

```bash
npm run dev
```

Open the URL shown (e.g. `http://localhost:5173`).

### What works in Phase 1

- **Login** (`/login`) and **Register** (`/register`) pages render and submit to Firebase Auth.
- **Protected routes**
  - `/app` — requires login; redirects to `/login` if not authenticated.
  - `/admin` — requires role `admin` or `superAdmin` (from Firestore `users/{uid}.role`); otherwise redirect to `/app` or `/super`.
  - `/super` — requires role `superAdmin`; otherwise redirect to `/app` or `/admin`.
- Root `/` redirects to `/app`, `/admin`, or `/super` by role when logged in, otherwise to `/login`.
- Layouts: **PublicLayout** (login/register), **AppLayout** (user app), **AdminLayout** (admin/super).

User role is read from Firestore `users/{uid}`. New users have no doc yet, so they get default role `user` until Phase 2+ seeds or creates user docs.

## Project structure (Phase 1)

```
binary-demo-mlm/
├── src/
│   ├── components/     # ProtectedRoute, RoleRoute
│   ├── contexts/       # AuthContext
│   ├── layouts/        # PublicLayout, AppLayout, AdminLayout
│   ├── lib/            # firebase.ts (client init)
│   ├── pages/          # Login, Register, AppDashboard, Admin, SuperAdmin
│   ├── types/          # auth.ts (UserRole, AppUser)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── package.json
├── vite.config.ts
└── README.md
```

## Next steps (Phase 2+)

- Add Firestore schema, security rules, and TypeScript models.
- Add Cloud Functions and demo seeding.
- Build user and admin UI for dashboard, tree, ledger, orders, withdrawals.
- Implement business logic in Cloud Functions only (no client-side balance writes).
