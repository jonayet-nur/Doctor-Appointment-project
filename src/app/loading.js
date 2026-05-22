import {Spinner} from "@heroui/react";

export default function loading() {
  return (
    <div className="flex items-center  justify-center h-screen">
      <Spinner size="xl" />
    </div>
  );
}