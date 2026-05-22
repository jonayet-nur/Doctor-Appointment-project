
"use client";

import Link from "next/link";
import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-6">
      
      {/* Background Blur */}
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

      <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
        
        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10">
          <SearchX className="h-12 w-12 text-cyan-400" />
        </div>

        {/* Text */}
        <div className="mt-8 text-center">
          <h1 className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-8xl font-extrabold text-transparent">
            404
          </h1>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Page Not Found
          </h2>

          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-300">
            The page you are looking for may have been removed,
            renamed, or is temporarily unavailable.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-cyan-600"
          >
            <Home size={18} />
            Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/20"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          © 2026 Healthcare Management System
        </div>
      </div>
    </main>
  );
}