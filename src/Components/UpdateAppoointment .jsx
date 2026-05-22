// "use client";

// import { Edit } from "lucide-react";
// import { useState } from "react";

// export default function UpdateAppointmentModal({item}) {
//   const [open, setOpen] = useState(false);




// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const form = e.target;

//   const updatedAppointment = {
//     patientName: form.patientName.value,
//     phone: form.phone.value,
//     userEmail: form.userEmail.value,
//     appointmentDate: form.appointmentDate.value,
//     doctorName: form.doctorName.value,
//     gender: form.gender.value,
//     appointmentTime: form.appointmentTime.value,
//   };

//   const response = await fetch(
//     `http://localhost:5000/bookings/${id}`,
//     {
//       method: "PATCH",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(updatedAppointment),
//     }
//   );

//   const data = await response.json();

//   if (data.modifiedCount > 0) {
//     alert("Appointment Updated Successfully");
//     setOpen(false);
//   }
// };

//   return (
//     <>
//       {/* Update Button */}
//       <button
//         onClick={() => setOpen(true)}
//         className="rounded-xl bg-cyan-600 px-5 py-2 text-white"
//       >
//         Update Appointment
//       </button>
//         {/* <button className="flex items-center gap-2 rounded-xl bg-gray-100 px-5 py-3">
//             <Edit size={16} />
//             Update
//           </button> */}

//       {/* Modal */}
//       {open && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
//           <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl">
//             {/* Header */}
//             <div className="mb-6 flex items-center justify-between">
//               <h2 className="text-2xl font-bold">
//                 Update Appointment
//               </h2>

//               <button
//                 onClick={() => setOpen(false)}
//                 className="text-2xl"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Form */}
//             <form
//               onSubmit={handleSubmit}
//               className="grid grid-cols-1 gap-5 md:grid-cols-2"
//             >
//               {/* Patient Name */}
//               <div>
//                 <label className="mb-2 block font-medium">
//                   Patient Name
//                 </label>

//                 <input
//                   type="text"
//                   name="patientName"
//                   defaultValue="Rahim Uddin"
//                   className="w-full rounded-xl border p-3 outline-none"
//                 />
//               </div>

//               {/* Phone */}
//               <div>
//                 <label className="mb-2 block font-medium">
//                   Phone
//                 </label>

//                 <input
//                   type="text"
//                   name="phone"
//                   defaultValue="01700000000"
//                   className="w-full rounded-xl border p-3 outline-none"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="mb-2 block font-medium">
//                   Email
//                 </label>

//                 <input
//                   type="email"
//                   name="userEmail"
//                   defaultValue="rahim@gmail.com"
//                   className="w-full rounded-xl border p-3 outline-none"
//                 />
//               </div>

//               {/* Appointment Date */}
//               <div>
//                 <label className="mb-2 block font-medium">
//                   Appointment Date
//                 </label>

//                 <input
//                   type="date"
//                   name="appointmentDate"
//                   defaultValue="2026-05-25"
//                   className="w-full rounded-xl border p-3 outline-none"
//                 />
//               </div>

//               {/* Doctor Name */}
//               <div>
//                 <label className="mb-2 block font-medium">
//                   Doctor Name
//                 </label>

//                 <input
//                   type="text"
//                   name="doctorName"
//                   defaultValue="Dr. Ayesha Rahman"
//                   className="w-full rounded-xl border p-3 outline-none"
//                 />
//               </div>

//               {/* Gender */}
//               <div>
//                 <label className="mb-2 block font-medium">
//                   Gender
//                 </label>

//                 <select
//                   name="gender"
//                   defaultValue="Male"
//                   className="w-full rounded-xl border p-3 outline-none"
//                 >
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//               </div>

//               {/* Appointment Time */}
//               <div className="md:col-span-2">
//                 <label className="mb-2 block font-medium">
//                   Appointment Time
//                 </label>

//                 <input
//                   type="text"
//                   name="appointmentTime"
//                   defaultValue="10:00 AM"
//                   className="w-full rounded-xl border p-3 outline-none"
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="md:col-span-2 rounded-xl bg-cyan-600 py-3 font-semibold text-white"
//               >
//                 Update Appointment
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }



"use client";

import { useState } from "react";
import { Edit } from "lucide-react";

export default function UpdateAppointmentModal({ item ,appointments,
  setAppointments }) {
  const [open, setOpen] = useState(false);

  // destructure item data
  const {
    _id,
    pname,
    phone,
    email,
    date,
    dname,
    gender,
    time,
  } = item;

  // update submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedAppointment = {
      pname: form.patientName.value,
      phone: form.phone.value,
      email: form.userEmail.value,
      date: form.appointmentDate.value,
      dname: form.doctorName.value,
      gender: form.gender.value,
      time: form.appointmentTime.value,
    };

    try {
      const response = await fetch(
        `http://localhost:5000/bookings/${_id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedAppointment),
        }
      );

      const data = await response.json();

    //   if (data.modifiedCount > 0) {
    //     alert("Appointment Updated Successfully");
    //     setOpen(false);
    //   }

    if (data.modifiedCount > 0) {
  const updatedList = appointments.map((appointment) => {
    if (appointment._id === _id) {
      return {
        ...appointment,
        ...updatedAppointment,
      };
    }

    return appointment;
  });

  setAppointments(updatedList);

  alert("Appointment Updated Successfully");

  setOpen(false);
}
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Update Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 text-white"
      >
        <Edit size={16} />
        Update
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Update Appointment
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 md:grid-cols-2"
            >
              {/* Patient Name */}
              <div>
                <label className="mb-2 block font-medium">
                  Patient Name
                </label>

                <input
                  type="text"
                  name="patientName"
                 
                  className="w-full rounded-xl border p-3 outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block font-medium">
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                 
                  className="w-full rounded-xl border p-3 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="userEmail"
                  
                  className="w-full rounded-xl border p-3 outline-none"
                />
              </div>

              {/* Appointment Date */}
              <div>
                <label className="mb-2 block font-medium">
                  Appointment Date
                </label>

                <input
                  type="date"
                  name="appointmentDate"
                  
                  className="w-full rounded-xl border p-3 outline-none"
                />
              </div>

              {/* Doctor Name */}
              <div>
                <label className="mb-2 block font-medium">
                  Doctor Name
                </label>

                <input
                readOnly
                  type="text"
                  name="doctorName"
                  defaultValue={dname}
                  className="w-full rounded-xl border p-3 outline-none"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="mb-2 block font-medium">
                  Gender
                </label>

                <select
                  name="gender"
                 
                  className="w-full rounded-xl border p-3 outline-none"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Appointment Time */}
              <div className="md:col-span-2">
                <label className="mb-2 block font-medium">
                  Appointment Time
                </label>

                <input
                  type="text"
                  name="appointmentTime"
                  
                  className="w-full rounded-xl border p-3 outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="md:col-span-2 rounded-xl bg-cyan-600 py-3 font-semibold text-white"
              >
                Update Appointment
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}