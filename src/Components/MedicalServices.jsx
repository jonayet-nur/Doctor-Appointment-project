"use client";

import Image from "next/image";
import {
  HeartPulse,
  Baby,
  Stethoscope,
  Activity,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "General Consultation",
    description:
      "Personalized health checkups and expert medical advice for common illnesses.",
    icon: <Stethoscope className="h-8 w-8 text-black" />,
  },
  {
    id: 2,
    title: "Pediatrics (Child Care)",
    description:
      "Specialized healthcare services for infants, children, and adolescents.",
    icon: <Baby className="h-8 w-8 text-black" />,
  },
  {
    id: 3,
    title: "Women's Health",
    description:
      "Comprehensive gynecological care, maternity support, and preventive screenings.",
    icon: <HeartPulse className="h-8 w-8 text-black" />,
  },
  {
    id: 4,
    title: "Cardiology Care",
    description:
      "Heart health evaluations, ECG, and preventive cardiovascular treatments.",
    icon: <Activity className="h-8 w-8 text-black" />,
  },
];

export default function MedicalServices() {
  return (
  <div className="w-11/12 mx-auto">
      <section className="relative overflow-hidden rounded-[30px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/service-img.jpg"
          alt="Medical Services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-16 md:px-12 lg:px-16">
        {/* Top Text */}
        <div className="mb-10">
          <span className="rounded-full bg-white/20 px-4 py-1 text-sm text-white backdrop-blur-md">
            Service
          </span>

          <h2 className="mt-4 max-w-xl text-3xl font-bold text-[#0b8fac] md:text-5xl">
            Our Medical Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100">
                {service.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-zinc-900">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-zinc-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
}