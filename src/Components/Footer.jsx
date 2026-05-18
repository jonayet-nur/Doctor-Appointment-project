"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-linear-to-br from-slate-400 via-slate-400 to-slate-400 text-white">
      
      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        
        {/* Top Footer */}
        <div className="flex flex-col items-center justify-between gap-10 border-b border-white/10 pb-10 md:flex-row">
          
          {/* Logo & Name */}
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
              <Image
                src="/assets/logo-10.png"
                alt="logo"
                width={45}
                height={45}
                className="rounded-full"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-wide">
                Doctor<span className="text-cyan-400">Appointment</span>
              </h2>
              <p className="text-sm text-gray-600">
                Smart Healthcare Platform
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            
            <Link
              href="#"
              className="group rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400"
            >
              <FaFacebookF className="text-lg text-white transition group-hover:text-black" />
            </Link>

            <Link
              href="#"
              className="group rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-500"
            >
              <FaInstagram className="text-lg text-white transition group-hover:text-black" />
            </Link>

            <Link
              href="#"
              className="group rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500"
            >
              <FaLinkedinIn className="text-lg text-white transition group-hover:text-black" />
            </Link>

            <Link
              href="#"
              className="group rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:bg-gray-300"
            >
              <FaGithub className="text-lg text-white transition group-hover:text-black" />
            </Link>

            <Link
              href="#"
              className="group rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white"
            >
              <FaXTwitter className="text-lg text-white transition group-hover:text-black" />
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          
          <p className="text-sm text-gray-900">
            &copy; 2026 Doctor Appointment. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="#" className="text-gray-900 transition hover:text-cyan-400">
              Privacy Policy
            </Link>

            <Link href="#" className=" text-gray-900 transition hover:text-cyan-400">
              Terms & Conditions
            </Link>

            <Link href="#" className=" text-gray-900 transition hover:text-cyan-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}