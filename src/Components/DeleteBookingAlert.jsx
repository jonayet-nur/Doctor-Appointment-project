"use client";

import {AlertDialog, AlertDialogTrigger, Button} from "@heroui/react";
import { Trash2 } from "lucide-react";

export function DeleteBookingAlert({bookingId}) {
    const handleDelete = async()=>{
        const response = await fetch(`http://localhost:5000/bookings/${bookingId}`,{
            method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
        })
        const data = await response.json()
        window.location.reload()
        console.log(data)
    }
  return (
    <AlertDialog>
      {/* <Button variant="danger">Delete Project</Button> */}
      {/* <button className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-white">
                <Trash2 size={16} />
                Delete
              </button> */}

                   {/* Trigger Button */}
      <AlertDialogTrigger>
        <Button
          variant="danger"
          className="flex items-center justify-center gap-2"
        >
          <Trash2 size={16} />
          Delete
        </Button>
      </AlertDialogTrigger>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            {/* <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body> */}
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} type="submit" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}