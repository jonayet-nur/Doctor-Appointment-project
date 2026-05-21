'use client'

import { authClient } from "@/lib/auth-client"

const ProfilePage = () => {
    const { 
            data: session, 
           
        } = authClient.useSession() 
        const user = session?.user
        console.log(user)
  return (
    <div>ProfilePage
        {/* Profile Update Card */}
<div className="w-full max-w-xl mx-auto bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
  
  {/* Card Header */}
  <div className="relative bg-gradient-to-r from-[#0b8fac] to-[#12b5d0] px-6 py-8 text-white">
    
    <div className="flex items-center gap-4">
      
      {/* Avatar Preview */}
      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-2xl font-bold shadow-lg">
        J
      </div>

      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Update Profile
        </h2>
        <p className="text-sm text-white/80 mt-1">
          Keep your personal information up to date
        </p>
      </div>

    </div>
  </div>

  {/* Form Body */}
  <div className="p-5 sm:p-7 space-y-5">

    {/* Name Field */}
    <div className="space-y-2">
      <label
        htmlFor="name"
        className="block text-sm font-semibold text-gray-700"
      >
        Full Name
      </label>

      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your full name"
        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none focus:border-[#0b8fac] focus:bg-white focus:ring-4 focus:ring-[#0b8fac]/10 transition-all duration-200"
      />
    </div>

    {/* Photo URL */}
    <div className="space-y-2">
      <label
        htmlFor="photo"
        className="block text-sm font-semibold text-gray-700"
      >
        Photo URL
      </label>

      <input
        type="url"
        id="photo"
        name="photo"
        placeholder="https://example.com/photo.jpg"
        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none focus:border-[#0b8fac] focus:bg-white focus:ring-4 focus:ring-[#0b8fac]/10 transition-all duration-200"
      />
    </div>

    {/* Update Button */}
    <button
      type="submit"
      className="w-full rounded-2xl bg-[#0b8fac] hover:bg-[#087286] text-white font-bold py-3.5 transition-all duration-300 shadow-lg hover:shadow-cyan-200 active:scale-[0.98]"
    >
      Update Profile
    </button>

  </div>
</div>
    </div>
  )
}

export default ProfilePage