
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