import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import PublicLayout from './layouts/PublicLayout'
import AppLayout from './layouts/AppLayout'
import AdminLayout from './layouts/AdminLayout'
import ProtectedRoute from './components/ProtectedRoute'
import RoleRoute from './components/RoleRoute'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AppDashboardPage from './pages/AppDashboardPage'
import AdminPage from './pages/AdminPage'
import SuperAdminPage from './pages/SuperAdminPage'

function RootRedirect() {
  const { user, loading } = useAuth()
  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  if (user) {
    if (user.role === 'superAdmin') return <Navigate to="/super" replace />
    if (user.role === 'admin') return <Navigate to="/admin" replace />
    return <Navigate to="/app" replace />
  }
  return <Navigate to="/login" replace />
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AppDashboardPage />} />
      </Route>
      <Route
        path="/admin"
        element={
          <RoleRoute allowedRoles={['admin', 'superAdmin']}>
            <AdminLayout />
          </RoleRoute>
        }
      >
        <Route index element={<AdminPage />} />
      </Route>
      <Route
        path="/super"
        element={
          <RoleRoute allowedRoles={['superAdmin']}>
            <AdminLayout />
          </RoleRoute>
        }
      >
        <Route index element={<SuperAdminPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}
