"use client";

import { useRouter } from "next/navigation";
import Button from "./button/Button";
import PrimaryButton from "./button/PrimaryButton";

export default function NewFlightPlanButton() {
  const router = useRouter();
  const newFlightPlan = () => {
    router.push("operator/flight-plans/new-flight-plan");
  };
  return (
    <PrimaryButton
      onClick={newFlightPlan}
      title="New Flight Plan"
    ></PrimaryButton>
  );
}
