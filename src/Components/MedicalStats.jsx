// "use client";

// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
// import {
//   HeartPulse,
//   HeartHandshake,
//   Stethoscope,
//   Activity,
// } from "lucide-react";

// const stats = [
//   {
//     id: 1,
//     icon: <HeartPulse size={60} />,
//     number: 180,
//     title: "saved hearts",
//   },
//   {
//     id: 2,
//     icon: <HeartHandshake size={60} />,
//     number: 2568,
//     title: "saved tooth",
//   },
//   {
//     id: 3,
//     icon: <Activity size={60} />,
//     number: 112,
//     title: "saved lungs",
//   },
//   {
//     id: 4,
//     icon: <Stethoscope size={60} />,
//     number: 235,
//     title: "saved stomaches",
//   },
// ];

// export default function MedicalStats() {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   return (
//     <section
//       ref={ref}
//       className="relative bg-[url('/assets/bg.jpg')] bg-cover bg-center bg-no-repeat py-24 my-4 rounded-2xl"
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

//       <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 text-center text-white sm:grid-cols-2 lg:grid-cols-4">
//         {stats.map((item) => (
//           <div key={item.id} className="space-y-3">
//             <div className="flex justify-center text-cyan-400">
//               {item.icon}
//             </div>

//             <p className="text-3xl font-light text-cyan-400">over</p>

//             <h2 className="text-6xl font-extrabold">
//               {inView ? (
//                 <CountUp
//                   end={item.number}
//                   duration={3}
//                   separator=","
//                 />
//               ) : (
//                 0
//               )}
//             </h2>

//             <p className="text-3xl font-light capitalize">
//               {item.title}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  HeartPulse,
  HeartHandshake,
  Stethoscope,
  Activity,
  Star,
} from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <HeartPulse size={55} />,
    number: 180,
    title: "saved hearts",
  },
  {
    id: 2,
    icon: <HeartHandshake size={55} />,
    number: 2568,
    title: "saved tooth",
  },
  {
    id: 3,
    icon: <Activity size={55} />,
    number: 112,
    title: "saved lungs",
  },
  {
    id: 4,
    icon: <Stethoscope size={55} />,
    number: 235,
    title: "saved stomaches",
  },
];

export default function MedicalStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative my-6 overflow-hidden bg-linear-to-br from-slate-400 via-slate-400 to-slate-400 py-24"
    >
      {/* Glow Effect */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 text-center text-white shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/15"
          >
            {/* Star Box */}
            <div className="absolute right-4 top-4 rounded-full bg-cyan-400/20 p-2 text-[#0b8fac]">
              <Star size={18} fill="currentColor" />
            </div>

            {/* Icon */}
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-[#0b8fac] shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
              {item.icon}
            </div>

            {/* Text */}
            <p className="mb-2 text-lg font-medium uppercase tracking-[4px] text-[#0b8fac]">
              Over
            </p>

            <h2 className="mb-3 text-5xl font-extrabold">
              {inView ? (
                <CountUp end={item.number} duration={3} separator="," />
              ) : (
                0
              )}
              +
            </h2>

            <p className="text-2xl font-light capitalize text-gray-100">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}