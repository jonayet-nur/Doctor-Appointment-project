'use client'

import { authClient } from "@/lib/auth-client"
import Image from "next/image"

const ProfilePage = () => {
    const { 
            data: session, 
           
        } = authClient.useSession() 
        const user = session?.user
        console.log(user)

        const onSubmit = async(e)=>{
            e.preventDefault()
            const name = e.target.name.value
            const photo = e.target.photo.value
            console.log(name, photo)
            await authClient.updateUser({
                name,
                photo
})
        }
  return (
    <div>
        {/* ProfilePage */}
        {/* Profile Update Card */}
<div className="w-full max-w-xl mx-auto bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
  
  {/* Card Header */}
  <div className="relative bg-gradient-to-r from-[#0b8fac] to-[#12b5d0] px-6 py-8 text-white">
    
    <div className="flex items-center gap-4">
      
      {/* Avatar Preview */}
      {/* <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-2xl font-bold shadow-lg">
        {user?.name[0]}
      </div> */}
      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
  {user?.image ? (
    <Image
      src={user?.image}
      alt={user?.name || 'User'}
      width={64}
      height={64}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-white">
      {user?.name[0]}
    </div>
  )}
</div>

      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          {user?.name}
        </h2>
        <p className="text-sm text-white/80 mt-1">
          {user?.email}
        </p>
      </div>

    </div>
  </div>

  {/* Form Body */}
  <form onSubmit={onSubmit}>
    <div className="p-5 sm:p-7 space-y-5">

    {/* Name Field */}
    <div className="space-y-2">
      <label
        htmlFor="name"
        className="block text-sm font-semibold text-gray-700"
      >
        Name
      </label>

      <input
        type="text"
        
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
        
        name="photo"
        placeholder="https://example.com/photo.jpg"
        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none focus:border-[#0b8fac] focus:bg-white focus:ring-4 focus:ring-[#0b8fac]/10 transition-all duration-200"
      />
    </div>

  

  </div>

    {/* Update Button */}
    <button
    
      type="submit"
      className="w-full rounded-2xl bg-[#0b8fac] hover:bg-[#087286] text-white font-bold py-3.5 transition-all duration-300 shadow-lg hover:shadow-cyan-200 active:scale-[0.98]"
    >
      Update Profile
    </button>
  </form>
</div>
    </div>
  )
}

export default ProfilePage