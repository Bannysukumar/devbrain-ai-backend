import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function AdminLayout() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    const { signOut } = await import('firebase/auth')
    const { auth } = await import('../lib/firebase')
    await signOut(auth)
    navigate('/login')
  }

  const isSuper = user?.role === 'superAdmin'

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="border-b bg-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">Admin — Binary Plan Demo</h1>
          <nav className="flex items-center gap-4">
            <Link to="/admin" className="text-gray-600 hover:text-gray-900">Users</Link>
            {isSuper && (
              <Link to="/super" className="text-gray-600 hover:text-gray-900">Super Admin</Link>
            )}
            <span className="text-gray-500 text-sm">{user?.email}</span>
            <button
              type="button"
              onClick={handleLogout}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}
