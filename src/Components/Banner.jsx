"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Find Your Trusted Doctor",
    subtitle:
      "Book appointments with experienced doctors anytime, anywhere.",
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Easy & Fast Appointment",
    subtitle:
      "Schedule your medical visits in just a few clicks without hassle.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "24/7 Healthcare Support",
    subtitle:
      "Get healthcare consultation and support whenever you need it.",
    image:
      "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function HeroBanner() {
  return (
   <div className=" my-6">
     <section className="relative overflow-hidden rounded-[20px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-[90vh] w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[90vh] w-full">
              
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto max-w-7xl px-6">
                  <div className="max-w-2xl text-white">
                    <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
                      Trusted Healthcare Platform
                    </span>

                    <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
                      {slide.title}
                    </h1>

                    <p className="mb-8 text-lg text-gray-200 md:text-xl">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <button className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600">
                        Book Appointment
                      </button>

                      <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gradient Blur Effect */}
              <div className="absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/30 blur-3xl"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
   </div>
  );
}