'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DashboardLayout = ({ children }) => {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col lg:flex-row">

      {/* Mobile Top Tabs */}
      <div className="lg:hidden bg-white border-b border-gray-200 p-4 sticky top-0 z-20">
        <div className="flex gap-3">

          <Link href="/dashboard" className="flex-1">
            <button
              className={`w-full rounded-xl py-3 text-sm font-semibold transition ${
                pathname === '/dashboard'
                  ? 'bg-[#2563eb] text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              My Bookings
            </button>
          </Link>

          <Link href="/dashboard/profile" className="flex-1">
            <button
              className={`w-full rounded-xl py-3 text-sm font-semibold transition ${
                pathname === '/dashboard/profile'
                  ? 'bg-[#2563eb] text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              My Profile
            </button>
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      <div className="hidden lg:block w-72 bg-white border-r border-gray-200 p-6">
        <div className="space-y-3 sticky top-6">

          <Link href="/dashboard">
            <button
              className={`w-full rounded-xl px-4 py-3 text-left font-medium transition ${
                pathname === '/dashboard'
                  ? 'bg-[#e8f0ff] text-[#2563eb]'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              My Bookings
            </button>
          </Link>

          <Link href="/dashboard/profile">
            <button
              className={`w-full rounded-xl px-4 py-3 text-left font-medium transition ${
                pathname === '/dashboard/profile'
                  ? 'bg-[#e8f0ff] text-[#2563eb]'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              My Profile
            </button>
          </Link>
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-10">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout