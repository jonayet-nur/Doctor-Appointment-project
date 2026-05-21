"use client"

import { useState } from "react"
import DoctorCard from "@/ui/DoctorCard"

const DoctorList = ({ doctors }) => {
  const [search, setSearch] = useState("")

  const filtered = doctors.filter((doc) =>
    doc.name?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      {/* 🔍 Search Field (p tag er niche) */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search doctor by name..."
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 👇 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.length > 0 ? (
          filtered.map((appoint) => (
            <DoctorCard
              key={appoint._id}
              doctor={appoint}
            />
          ))
        ) : (
         <div className="col-span-full flex justify-center">
  <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 text-center max-w-md w-full">
    
    <div className="text-5xl mb-3">🩺</div>

    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      No Doctor Found
    </h3>

    <p className="text-gray-500 text-sm">
      Sorry, we couldn’t find any doctor matching your search.
    </p>

    <button
      onClick={() => window.location.reload()}
      className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Reset Search
    </button>
  </div>
</div>
        )}
      </div>
    </>
  )
}

export default DoctorList