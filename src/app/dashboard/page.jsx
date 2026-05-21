'use client'

import {
  CalendarDays,
  Edit,
  Trash2,
  User,
} from 'lucide-react'

const DashboardPage = () => {

  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Jenkins',
      specialty: 'Cardiology',
      patient: 'Alex Smith',
      date: 'May 24, 2026',
      time: '10:30 AM',
      status: 'CONFIRMED',
    },
  ]

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, Alex Smith
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your healthcare appointments easily.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-5">
        {appointments.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
          >
            <h2 className="text-xl font-bold text-[#0f766e]">
              {item.doctor}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {item.specialty}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

              <div className="flex items-center gap-3">
                <User size={18} />
                <p>{item.patient}</p>
              </div>

              <div className="flex items-center gap-3">
                <CalendarDays size={18} />
                <p>{item.date}</p>
              </div>

              <div className="flex items-center gap-3">
                <CalendarDays size={18} />
                <p>{item.time}</p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button className="flex items-center gap-2 bg-gray-100 px-5 py-3 rounded-xl">
                <Edit size={16} />
                Update
              </button>

              <button className="flex items-center gap-2 bg-red-500 text-white px-5 py-3 rounded-xl">
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default DashboardPage