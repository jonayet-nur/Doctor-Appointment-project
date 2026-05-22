// "use client";

// import { useState } from "react";
// import { X, Calendar, Clock, Phone, User, Mail } from "lucide-react";

// export default function AppointmentModal({doctor}) {
//   const [isOpen, setIsOpen] = useState(true);

//   const appointmentData = {
//     userEmail: "user@gmail.com",
//     doctorName: "Dr. Ayesha Rahman",
//     patientName: "Rahim Uddin",
//     gender: "Male",
//     phone: "01712345678",
//     appointmentDate: "2026-05-12",
//     appointmentTime: "10:30 AM",
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
//       <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        
//         {/* Header */}
//         <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-white">
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute right-4 top-4 rounded-full bg-white/20 p-2 transition hover:bg-white/30"
//           >
//             <X size={20} />
//           </button>

//           <h2 className="text-3xl font-bold">Appointment Details</h2>
//           <p className="mt-1 text-white/80">
//             Patient appointment information
//           </p>
//         </div>

//         {/* Body */}
//         <div className="grid gap-5 p-6 md:grid-cols-2">
          
//           {/* Patient Name */}
//           <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
//             <div className="mb-2 flex items-center gap-2 text-cyan-600">
//               <User size={20} />
//               <span className="font-semibold">Patient Name</span>
//             </div>
//             <p className="text-lg font-bold text-gray-800">
//               {/* {appointmentData.patientName} */}
//             </p>
//           </div>

//           {/* Doctor Name */}
//           <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
//             <div className="mb-2 flex items-center gap-2 text-cyan-600">
//               <User size={20} />
//               <span className="font-semibold">Doctor</span>
//             </div>
//             <p className="text-lg font-bold text-gray-800">
//               {/* {appointmentData.doctorName} */}
//             </p>
//           </div>

//           {/* Email */}
//           <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
//             <div className="mb-2 flex items-center gap-2 text-cyan-600">
//               <Mail size={20} />
//               <span className="font-semibold">Email</span>
//             </div>
//             <p className="text-gray-700">
//                 {/* {appointmentData.userEmail} */}
//                 </p>
//           </div>

//           {/* Phone */}
//           <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
//             <div className="mb-2 flex items-center gap-2 text-cyan-600">
//               <Phone size={20} />
//               <span className="font-semibold">Phone</span>
//             </div>
//             <p className="text-gray-700">
//                 {/* {appointmentData.phone} */}

//             </p>
//           </div>

//           {/* Gender */}
//           <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
//             <div className="mb-2 flex items-center gap-2 text-cyan-600">
//               <User size={20} />
//               <span className="font-semibold">Gender</span>
//             </div>
//             <p className="text-gray-700">
//                 {/* {appointmentData.gender} */}
//                 </p>
//           </div>

//           {/* Date */}
//           <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
//             <div className="mb-2 flex items-center gap-2 text-cyan-600">
//               <Calendar size={20} />
//               <span className="font-semibold">Appointment Date</span>
//             </div>
//             <p className="text-gray-700">
//               {/* {appointmentData.appointmentDate} */}
//             </p>
//           </div>

//           {/* Time */}
//           <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 md:col-span-2">
//             <div className="mb-2 flex items-center gap-2 text-cyan-600">
//               <Clock size={20} />
//               <span className="font-semibold">Appointment Time</span>
//             </div>
//             <p className="text-gray-700">
//               {/* {appointmentData.appointmentTime} */}
//             </p>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex items-center justify-end gap-3 border-t p-5">
//           <button
//             onClick={() => setIsOpen(false)}
//             className="rounded-xl border border-gray-300 px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
//           >
//             Close
//           </button>

//           <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 font-medium text-white shadow-lg transition hover:scale-105">
//             Confirm Appointment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { CalendarDays, Clock3, Mail, Phone, User } from "lucide-react";
// import {
//   Button,
//   Input,
//   Label,
//   Modal,
//   Surface,
//   TextField,
// } from "@heroui/react";

// export default function AppointmentModal({doctor}) {
// //   const appointmentData = {
// //     userEmail: "user@gmail.com",
// //     doctorName: "Dr. Ayesha Rahman",
// //     patientName: "Rahim Uddin",
// //     gender: "Male",
// //     phone: "01712345678",
// //     appointmentDate: "2026-05-12",
// //     appointmentTime: "10:30 AM",
// //   };

//   return (
//     <Modal>
//       {/* Open Button */}
//       {/* <Button className="  rounded-2xl bg-[#0b8fac] px-6 py-3 font-semibold text-white hover:bg-cyan-700">
//         Book Appointment
//       </Button> */}
//       <div className="flex items-center justify-center">
//   <Button className="rounded-2xl w-full bg-[#0b8fac] px-6 py-6 font-semibold text-white hover:bg-cyan-700">
//     Book Appointment
//   </Button>
// </div>

//       <Modal.Backdrop>
//         <Modal.Container placement="center">
//           <Modal.Dialog className="w-full max-w-2xl rounded-3xl">
//             <Modal.CloseTrigger />

//             {/* Header */}
//             <Modal.Header>
//               <Modal.Icon className="bg-cyan-100 text-cyan-700">
//                 <CalendarDays className="size-5" />
//               </Modal.Icon>

//               <div>
//                 <Modal.Heading className="text-2xl font-bold">
//                   Appointment Details
//                 </Modal.Heading>

//                 <p className="mt-1 text-sm text-gray-500">
//                   Confirm your doctor appointment information.
//                 </p>
//               </div>
//             </Modal.Header>

//             {/* Body */}
//             <Modal.Body className="p-6">
//               <Surface
//                 variant="default"
//                 className="rounded-3xl border border-gray-200 p-6 shadow-sm"
//               >
//                 <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  
//                   {/* Patient Name */}
//                   <TextField
//                     className="w-full"
//                     name="patientName"
//                     variant="secondary"
//                   >
//                     <Label>Patient Name</Label>

//                     <Input
//                       startContent={<User size={18} />}
//                     //   defaultValue={appointmentData.patientName}
//                     />
//                   </TextField>

//                   {/* Doctor Name */}
//                   <TextField
//                     className="w-full"
//                     name="doctorName"
//                     variant="secondary"
//                   >
//                     <Label>Doctor Name</Label>

//                     <Input
//                       startContent={<User size={18} />}
//                     //   defaultValue={appointmentData.doctorName}
                    
                    
//                     />
//                   </TextField>

//                   {/* Email */}
//                   <TextField
//                     className="w-full"
//                     name="email"
//                     type="email"
//                     variant="secondary"
//                   >
//                     <Label>Email</Label>

//                     <Input
//                       startContent={<Mail size={18} />}
//                     //   defaultValue={appointmentData.userEmail}
//                     />
//                   </TextField>

//                   {/* Phone */}
//                   <TextField
//                     className="w-full"
//                     name="phone"
//                     type="tel"
//                     variant="secondary"
//                   >
//                     <Label>Phone</Label>

//                     <Input
//                       startContent={<Phone size={18} />}
//                     //   defaultValue={appointmentData.phone}
//                     />
//                   </TextField>

//                   {/* Gender */}
//                   <TextField
//                     className="w-full"
//                     name="gender"
//                     variant="secondary"
//                   >
//                     <Label>Gender</Label>

//                     <Input  />
//                     {/* defaultValue={appointmentData.gender} */}
//                   </TextField>

//                   {/* Appointment Date */}
//                   <TextField
//                     className="w-full"
//                     name="appointmentDate"
//                     type="date"
//                     variant="secondary"
//                   >
//                     <Label>Appointment Date</Label>

//                     <Input
//                       startContent={<CalendarDays size={18} />}
//                     //   defaultValue={appointmentData.appointmentDate}
//                     />
//                   </TextField>

//                   {/* Appointment Time */}
//                   <TextField
//                     className="w-full md:col-span-2"
//                     name="appointmentTime"
//                     variant="secondary"
//                   >
//                     <Label>Appointment Time</Label>

//                     <Input
//                       startContent={<Clock3 size={18} />}
//                     //   defaultValue={appointmentData.appointmentTime}
//                     />
//                   </TextField>
//                   {/* Footer */}
//             <Modal.Footer>
//                 <Button slot="close" variant="secondary">
//                 Cancel
//               </Button>

//               <Button
//                 slot="close"
//                 className="bg-[#0b8fac] text-white hover:bg-cyan-700"
//               >
//                 Confirm Appointment
//               </Button>
//             </Modal.Footer>
//                 </form>
//               </Surface>
//             </Modal.Body>

          
//           </Modal.Dialog>
//         </Modal.Container>
//       </Modal.Backdrop>
//     </Modal>
//   );
// }



"use client";

import {
  CalendarDays,
  Clock3,
  Mail,
  Phone,
  User,
} from "lucide-react";

import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

export default function AppointmentModal({ doctor }) {
    const bookingSubmit=async(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data)
        try {
      const response = await fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
      toast.success("Appointment booked successfully!");
        // setIsOpen(false);
        e.target.reset();
      }
    } catch (error) {
      toast.error("Failed to book appointment.");
    }
    

    }
  return (
    <Modal>
      {/* Open Button */}
      <div className="flex items-center justify-center">
        <Button className="w-full rounded-2xl bg-[#0b8fac] px-6 py-6 font-semibold text-white hover:bg-cyan-700">
          Book Appointment
        </Button>
      </div>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="w-full max-w-2xl rounded-3xl">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header>
              <Modal.Icon className="bg-cyan-100 text-cyan-700">
                <CalendarDays className="size-5" />
              </Modal.Icon>

              <div>
                <Modal.Heading className="text-2xl font-bold">
                  Appointment Details
                </Modal.Heading>

                <p className="mt-1 text-sm text-gray-500">
                  Confirm your doctor appointment information.
                </p>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6">
              <Surface
                variant="default"
                className="rounded-3xl border border-gray-200 p-6 shadow-sm"
              >
                <form onSubmit={bookingSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  
                  {/* Patient Name */}
                  <div>
                    <Label>Patient Name</Label>

                    <div className="mt-2 flex items-center gap-2 rounded-xl border border-gray-300 px-3">
                      <User size={18} className="text-gray-500" />

                      <Input
                        placeholder="Enter patient name"
                        className="border-none"
                        name="pname"
                      />
                    </div>
                  </div>

                  {/* Doctor Name */}
                  <div>
                    <Label>Doctor Name</Label>

                    <div className="mt-2 flex items-center gap-2 rounded-xl border border-gray-300 px-3">
                      <User size={18} className="text-gray-500" />

                      <Input
                        value={doctor?.name}
                        readOnly
                        className="border-none"
                        name="dname"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <Label>Email</Label>

                    <div className="mt-2 flex items-center gap-2 rounded-xl border border-gray-300 px-3">
                      <Mail size={18} className="text-gray-500" />

                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="border-none"
                        name="email"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <Label>Phone</Label>

                    <div className="mt-2 flex items-center gap-2 rounded-xl border border-gray-300 px-3">
                      <Phone size={18} className="text-gray-500" />

                      <Input
                        type="tel"
                        placeholder="Enter your phone"
                        className="border-none"
                        name="phone"
                      />
                    </div>
                  </div>

                  {/* Gender */}
                  <div>
                    <Label>Gender</Label>

                    <div className="mt-2 rounded-xl border border-gray-300 px-3">
                      <Input
                        placeholder="Male / Female"
                        className="border-none"
                        name="gender"
                      />
                    </div>
                  </div>

                  {/* Appointment Date */}
                  <div>
                    <Label>Appointment Date</Label>

                    <div className="mt-2 flex items-center gap-2 rounded-xl border border-gray-300 px-3">
                      <CalendarDays size={18} className="text-gray-500" />

                      <Input
                        type="date"
                        className="border-none"
                        name="date"
                      />
                    </div>
                  </div>

                  {/* Appointment Time */}
                  <div className="md:col-span-2">
                    <Label>Appointment Time</Label>

                    <div className="mt-2 flex items-center gap-2 rounded-xl border border-gray-300 px-3">
                      <Clock3 size={18} className="text-gray-500" />

                      <Input
                        placeholder="10:30 AM"
                        className="border-none"
                        name="time"
                      />
                    </div>
                  </div>

                     {/* Footer */}
            
              <Modal.Footer>
                <Button slot="close" variant="secondary">
                Cancel
              </Button>

              <Button
                type="submit"
                className="bg-[#0b8fac] text-white hover:bg-cyan-700"
              >
                Confirm Appointment
              </Button>
              </Modal.Footer>
           
                </form>
              </Surface>
            </Modal.Body>

         
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}