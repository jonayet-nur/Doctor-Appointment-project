import {Spinner} from "@heroui/react";

export default function loading() {
  return (
    <div className="  flex items-center h-screen justify-center">
      <Spinner size="xl" />
    </div>
  );
}