
"use client";

import { useState } from "react";
import { Edit } from "lucide-react";
import { toast } from "react-toastify";

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
      pname: form.pname.value,
      phone: form.phone.value,
      email: form.email.value,
      date: form.date.value,
      dname: form.dname.value,
      gender: form.gender.value,
      time: form.time.value,
    };

//     const updatedAppointment = {
//   patientName: form.patientName.value,
//   phone: form.phone.value,
//   userEmail: form.userEmail.value,
//   appointmentDate: form.appointmentDate.value,
//   doctorName: form.doctorName.value,
//   gender: form.gender.value,
//   appointmentTime: form.appointmentTime.value,
// };

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

  toast.success("Appointment Updated Successfully");

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
        className="flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 text-white"
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
                  // name="patientName"
                  name="pname"
                 
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
                  // name="userEmail"
                  name="email"
                  
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
                  // name="appointmentDate"
                  name="date"
                  
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
                  // name="doctorName"
                  name="dname"
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
                  // name="appointmentTime"
                  name="time"
                  
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