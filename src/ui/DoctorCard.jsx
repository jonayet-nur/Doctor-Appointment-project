
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaHospital, FaMapMarkerAlt, FaClock, FaCalendarCheck } from 'react-icons/fa';

export default function DoctorCard({ doctor }) {
  return (
    <article className="group relative flex flex-col justify-between bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden ">
      
      {/* Image & Badge Header Section */}
      <div className="relative h-64 md:h-72 lg:h-80 w-full bg-slate-50 overflow-hidden">
        <Image
          src={doctor.image}
          alt={`Dr. ${doctor.name}, ${doctor.specialty}`}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority={false}
        />
        
        {/* Soft Dark Overlay for badge readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-60" />

        {/* Floating Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          {/* Rating */}
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/95 backdrop-blur-sm text-xs font-bold text-gray-800 rounded-lg shadow-sm border border-gray-100">
            <FaStar className="text-amber-500 fill-amber-500 text-xs" />
            {doctor.rating ? doctor.rating.toFixed(1) : "4.5"}
          </span>
          
          {/* Specialty */}
          <span className="px-2.5 py-1 bg-[#0b8fac] text-white text-xs font-semibold rounded-lg shadow-sm tracking-wide">
            {doctor.specialty}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col grow justify-between">
        
        {/* Identity & Work Location */}
        <div className="space-y-1 mb-4">
          <h2 className="text-lg font-bold text-gray-900 tracking-tight leading-snug group-hover:text-[#0b8fac] transition-colors duration-200">
            {doctor.name}
          </h2>
          <p className="text-sm font-medium text-gray-500 flex items-center gap-2">
            <FaHospital className="text-gray-400 shrink-0 text-xs" />
            <span className="truncate" title={doctor.hospital}>{doctor.hospital}</span>
          </p>
        </div>

        {/* Bento-Style Details Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs font-semibold mb-4">
          <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl text-gray-600 border border-slate-100">
            <FaMapMarkerAlt className="text-blue-500 text-sm shrink-0" />
            <span className="truncate" title={doctor.location}>{doctor.location}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl text-gray-600 border border-slate-100">
            <FaClock className="text-blue-500 text-sm shrink-0" />
            <span>{doctor.experience}+exp</span>
          </div>
        </div>

       
        {/* Card Footer: Pricing & Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto gap-4">
          <div className="shrink-0">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">Consultation Fee</div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-2xl font-black text-gray-900">${doctor.fee}</span>
              <span className="text-xs font-semibold text-gray-400">/visit</span>
            </div>
          </div>

          <Link 
            href={`/all-appoint/${doctor._id}`}
            className="grow px-5 py-2.5 bg-[#0b8fac] hover:bg-[#075b6b] text-white text-sm font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-blue-200 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-[#0b8fac] focus:ring-offset-2 flex items-center justify-center text-center whitespace-nowrap"
            aria-label={`Book appointment with Dr. ${doctor.name}`}
          >
           View Details
          </Link>
        </div>
        
      </div>
    </article>
  );
}