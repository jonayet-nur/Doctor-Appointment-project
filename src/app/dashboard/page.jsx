
'use client'

import { useEffect, useState } from 'react'
import {
  CalendarDays,
  Edit,
  Mail,
  Phone,
  Trash2,
  User,
} from 'lucide-react'
import { DeleteBookingAlert } from '@/Components/DeleteBookingAlert'
import UpdateAppointmentModal from '@/Components/UpdateAppoointment '

const DashboardPage = () => {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:5000/bookings')
        const data = await response.json()
        setAppointments(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchAppointments()
  }, [])

  return (
    // <>
    //   {/* Header */}
    //   <div className="mb-8">
    //     <h1 className="text-3xl font-bold text-gray-900">
    //       Welcome back
    //     </h1>

    //     <p className="mt-2 text-gray-500">
    //       Manage your healthcare appointments easily.
    //     </p>
    //   </div>

    //   {/* Cards */}
    //   <div className="flex flex-col gap-5">
    //     {appointments.map((item) => (
    //       <div
    //         key={item._id}
    //         className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
    //       >
    //         <h2 className="text-xl font-bold text-[#0f766e]">
    //          Doctor: {item.dname}
    //         </h2>

    //         {/* <p className="mt-1 text-sm text-gray-500">
    //           {item.specialty}
    //         </p> */}

    //         <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
    //           <div className="flex items-center gap-3">
    //             <User size={18} />
    //             <p> Patient: {item.pname}</p>
    //           </div>

    //           <div className="flex items-center gap-3">
    //             <CalendarDays size={18} />
    //             <p>Date: {item.date}</p>
    //           </div>

    //           <div className="flex items-center gap-3">
    //             <CalendarDays size={18} />
    //             <p>Time: {item.time}</p>
    //           </div>
    //         </div>

    //         <div className="mt-6 flex gap-3">
    //           <button className="flex items-center gap-2 rounded-xl bg-gray-100 px-5 py-3">
    //             <Edit size={16} />
    //             Update
    //           </button>

    //           <DeleteBookingAlert bookingId = {item._id}></DeleteBookingAlert>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </>

    <>
    {/* Header */}
<div className="mb-8">
  <h1 className="text-3xl font-bold text-gray-900">
    Welcome back
  </h1>

  <p className="mt-2 text-gray-500">
    Manage your healthcare appointments easily.
  </p>
</div>

{/* যদি booking থাকে তাহলে card দেখাবে */}
{appointments.length > 0 ? (
  <div className="flex flex-col gap-5">
    {appointments.map((item) => (
      <div
        key={item._id}
        className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-bold text-[#0f766e]">
          Doctor: {item.dname}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <User size={18} />
            <p>Patient: {item.pname}</p>
          </div>

          <div className="flex items-center gap-3">
  <Phone size={18} />
  <p>Phone: {item.phone}</p>
</div>

<div className="flex items-center gap-3">
  <User size={18} />
  <p>Gender: {item.gender}</p>
</div>
<div className="flex items-center gap-3">
  <Mail size={18} />
  <p>Email: {item.email}</p>
</div>

          <div className="flex items-center gap-3">
            <CalendarDays size={18} />
            <p>Date: {item.date}</p>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays size={18} />
            <p>Time: {item.time}</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3 ">
        {/* update button components */}
        <UpdateAppointmentModal item={item}  appointments={appointments}
  setAppointments={setAppointments}></UpdateAppointmentModal>

          <DeleteBookingAlert bookingId={item._id} />
        </div>
      </div>
    ))}
  </div>
) : (
  /* booking না থাকলে এই card দেখাবে */
  <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center shadow-sm">
    <CalendarDays size={60} className="text-gray-400" />

    <h2 className="mt-4 text-2xl font-bold text-gray-700">
      No Booking Found
    </h2>

    <p className="mt-2 text-gray-500">
      You have not booked any appointment yet.
    </p>
  </div>
)}
    </>
  )
}

export default DashboardPage