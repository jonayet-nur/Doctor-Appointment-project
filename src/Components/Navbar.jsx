'use client'
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
   const { 
        data: session, 
       
    } = authClient.useSession() 
    const user = session?.user
    console.log(user)

    const handleSignOut = async()=>{
      await authClient.signOut();
    }

  return (
    <header className="sticky top-0 z-50   w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/20 bg-white/10 px-6 py-4 shadow-2xl backdrop-blur-xl">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo-10.png"
            alt="logo"
            height={50}
            width={50}
            className="rounded-full"
          />

          <h1 className="text-2xl font-extrabold text-[#0b8fac]">
            Doctor{" "}
            <span className="text-lg text-[#0b8fac]">
              Appoint
            </span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 text-lg font-medium text-gray-700 md:flex">
          <li>
            <Link href="/" className="hover:text-[#0b8fac]">
              Home
            </Link>
          </li>

          <li>
            <Link href="/appointments" className="hover:text-[#0b8fac]">
              All Appointment
            </Link>
          </li>

          <li>
            <Link href="/dashboard" className="hover:text-[#0b8fac]">
              Dashboard
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
       
      
      
      
        <div className="hidden items-center gap-4 md:flex">
        {user?<>
       
          <Avatar>
        <Avatar.Image alt="John Doe" src={user?.image} />
        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
      </Avatar>
       
       <Button onClick={handleSignOut} variant="danger">Signout</Button>
        </>:
        <>
        <Link href={"/login"}>
            <button className="rounded-full border border-[#0b8fac] px-5 py-2 font-semibold text-[#0b8fac] transition-all duration-300 hover:bg-[#0b8fac] hover:text-white">
            Login
          </button>
        </Link>

         <Link href={"/sign-up"}>
          <button className="rounded-full bg-linear-to-r from-[#0b8fac] to-purple-600 px-5 py-2 font-semibold text-white shadow-lg">
            Register
          </button>
         </Link>
        </>
        }
        </div>
       
       

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-white/20 bg-white/10 p-2 text-gray-700 backdrop-blur-lg md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-xl transition-all duration-500 md:hidden ${
          open
            ? "max-h-[500px] p-5 opacity-100"
            : "max-h-0 p-0 opacity-0 border-0"
        }`}
      >
        <ul className="flex flex-col gap-5 text-center text-lg font-medium text-gray-700">
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="hover:text-[#0b8fac]"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/appointments"
              onClick={() => setOpen(false)}
              className="hover:text-[#0b8fac]"
            >
              All Appointment
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="hover:text-[#0b8fac]"
            >
              Dashboard
            </Link>
          </li>
        </ul>

        <div className="mt-6 flex flex-col gap-3">
       <Link href={"/login"}>
        <button className="rounded-full border border-[#0b8fac] py-2 font-semibold text-[#0b8fac] transition-all duration-300 hover:bg-[#0b8fac] hover:text-white">
          Login
        </button>
       </Link>

          <button className="rounded-full bg-linear-to-r from-[#0b8fac] to-purple-600 py-2 font-semibold text-white shadow-lg">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}