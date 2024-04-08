"use client";

import PrimaryButton from "@/components/button/PrimaryButton";
import { useRouter } from "next/navigation";

export default function FlightRoutesPage() {
  const router = useRouter();
  const onNewRouteClicked = () => {
    router.push("flight-routes/new-flight-route");
  };
  return (
    <div className="flex flex-row">
      <h1>Flight Routes</h1>
      <div>My routes</div>
      <PrimaryButton
        title="New Route"
        onClick={onNewRouteClicked}
      ></PrimaryButton>
    </div>
  );
}
