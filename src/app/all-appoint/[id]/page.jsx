

import Image from "next/image";
import {
  MapPin,
  Star,
  Calendar,
  Clock3,
  BriefcaseMedical,
} from "lucide-react";
import Link from "next/link";
import AppointmentModal, { WithForm } from "@/Components/AppointmentModal";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const AllAppointDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers()
  })
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/all-appointment/${id}`,{
      headers:{
        authorization: `Bearer ${token}` 
      }
    }
    // {
    //   cache: "no-store",
    // }
  );

  const doctor = await res.json();

  return (
    <div className="min-h-screen bg-[#f4f7fb] p-4 md:p-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl">
        
        {/* Hero Section */}
        <div className="relative h-[500px] w-full overflow-hidden rounded-t-3xl">
  <Image
    src={doctor.image}
    alt={doctor.name}
    fill
    priority
    className="object-cover object-center"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Doctor Info */}
  <div className="absolute bottom-8 left-8 z-10 text-white">
    <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-medium">
      {doctor.specialty}
    </span>

    <h1 className="mt-4 text-3xl font-bold md:text-5xl">
      {doctor.name}
    </h1>

    <p className="mt-2 text-lg font-medium">
      {doctor.experience} Experience
    </p>

    <div className="mt-4 flex flex-wrap items-center gap-5 text-sm md:text-base">
      <div className="flex items-center gap-2">
        <BriefcaseMedical size={18} />
        <span>{doctor.hospital}</span>
      </div>

      <div className="flex items-center gap-2">
        <MapPin size={18} />
        <span>{doctor.location}</span>
      </div>

      <div className="flex items-center gap-2 text-yellow-400">
        <Star size={18} fill="currentColor" />
        <span>{doctor.rating} Rating</span>
      </div>
    </div>
  </div>
</div>

        {/* Bottom Content */}
        <div className="grid gap-6 p-6 md:grid-cols-3">
          
          {/* Left */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
              Meet The Expert
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              {doctor.description}
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[3px] text-gray-400">
                  Specialization
                </p>

                <h3 className="mt-2 font-semibold text-gray-800">
                  {doctor.specialty}
                </h3>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[3px] text-gray-400">
                  Experience
                </p>

                <h3 className="mt-2 font-semibold text-gray-800">
                  {doctor.experience}
                </h3>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[3px] text-gray-400">
                  Consultation Fee
                </p>

                <h3 className="mt-2 font-semibold text-blue-700">
                  {doctor.fee} BDT
                </h3>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-gray-200 bg-[#f8fbff] p-6">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
              Schedule A Visit
            </p>

            <div className="mt-6 space-y-4">
              {doctor.availability.map((time, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-2xl border border-blue-200 bg-white px-4 py-4"
                >
                  <div className="flex items-center gap-2 text-blue-700">
                    <Clock3 size={18} />
                    <span className="font-medium">
                      {index === 0 ? "Morning" : "Evening"}
                    </span>
                  </div>

                  <span className="text-sm font-medium text-gray-700">
                    {time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
              <Calendar size={16} />
              Available Sun - Thu
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="p-6 pt-0">
        
          {/* <button className="w-full rounded-2xl bg-[#0b8fac] py-4 text-lg font-semibold text-white transition hover:bg-cyan-800">
            Book Your Appointment
          </button> */}
         <AppointmentModal doctor={doctor}></AppointmentModal>
         {/* <WithForm doctor={doctor}></WithForm> */}

          <p className="mt-3 text-center text-sm text-gray-400">
            No payment required until you visit the hospital
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllAppointDetailsPage;