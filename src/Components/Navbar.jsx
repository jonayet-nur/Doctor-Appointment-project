
'use client'

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const {
    data: session,
  } = authClient.useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  // active link style
  const activeLink = (path) =>
    pathname === path
      ? "text-[#0b8fac] border-b-2 border-[#0b8fac] pb-1"
      : "hover:text-[#0b8fac]";

  return (
    <header className="sticky top-0 z-50 w-full px-3 py-3">
      
      {/* Navbar */}
      <nav className="mx-auto flex items-center justify-between rounded-3xl border border-white/20 bg-white/10 px-6 py-4 shadow-2xl backdrop-blur-xl">

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
            <Link href="/" className={activeLink("/")}>
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/all-appoint"
              className={activeLink("/all-appoint")}
            >
              All Appointment
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard"
              className={activeLink("/dashboard")}
            >
              Dashboard
            </Link>
          </li>

        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          {user ? (
            <>
              <Avatar>
                <Avatar.Image alt="John Doe" src={user?.image} />
                <Avatar.Fallback>
                  {user?.name?.[0]}
                </Avatar.Fallback>
              </Avatar>

              <Button
                onClick={handleSignOut}
                className="bg-[#0b8fac]"
              >
                Signout
              </Button>
            </>
          ) : (
            <>
              <Link href={"/login"}>
                <button className="rounded-full border border-[#0b8fac] px-5 py-2 font-semibold text-[#0b8fac] transition-all duration-300 hover:bg-[#0b8fac] hover:text-white">
                  Login
                </button>
              </Link>

              <Link href={"/sign-up"}>
                <button className="rounded-full bg-gradient-to-r from-[#0b8fac] to-purple-600 px-5 py-2 font-semibold text-white shadow-lg">
                  Register
                </button>
              </Link>
            </>
          )}
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
      {open && (
        <div className="mt-3 rounded-3xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-xl md:hidden">

          <ul className="flex flex-col gap-5 text-center text-lg font-medium text-gray-700">

            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={activeLink("/")}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/all-appoint"
                onClick={() => setOpen(false)}
                className={activeLink("/all-appoint")}
              >
                All Appointment
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className={activeLink("/dashboard")}
              >
                Dashboard
              </Link>
            </li>

          </ul>

          {/* Mobile Buttons */}
          <div className="mt-6 flex items-center justify-center gap-3">

            {user ? (
              <>
                <Avatar>
                  <Avatar.Image alt="John Doe" src={user?.image} />
                  <Avatar.Fallback>
                    {user?.name?.[0]}
                  </Avatar.Fallback>
                </Avatar>

                <Button
                  onClick={handleSignOut}
                  className="bg-[#0b8fac]"
                >
                  Signout
                </Button>
              </>
            ) : (
              <>
                <Link href={"/login"} className="w-full">
                  <button className="w-full rounded-full border border-[#0b8fac] py-2 font-semibold text-[#0b8fac] transition-all duration-300 hover:bg-[#0b8fac] hover:text-white">
                    Login
                  </button>
                </Link>

                <Link href={"/sign-up"} className="w-full">
                  <button className="w-full rounded-full bg-gradient-to-r from-[#0b8fac] to-purple-600 py-2 font-semibold text-white shadow-lg">
                    Register
                  </button>
                </Link>
              </>
            )}

          </div>
        </div>
      )}
    </header>
  );
}