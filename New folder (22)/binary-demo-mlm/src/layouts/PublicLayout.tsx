import { Outlet } from 'react-router-dom'

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="border-b bg-white py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">Binary Plan Demo</h1>
          <nav className="flex gap-4">
            <a href="/login" className="text-gray-600 hover:text-gray-900">Login</a>
            <a href="/register" className="text-gray-600 hover:text-gray-900">Register</a>
          </nav>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-6">
        <Outlet />
      </main>
    </div>
  )
}
