"use client";

import SecondaryButton from "@/components/button/SecondaryButton";
import { components } from "@/schema";
import { useState } from "react";

type FlightRoute = components["schemas"]["FlightRoute"];
type Waypoint = components["schemas"]["Waypoint"];

export default function NewFlightRoutePage() {
  const [flightRoute, setFlightRoute] = useState<FlightRoute>();
  const [waypoints, setWaypoints] = useState<Waypoint[]>([]);
  const addWaypointToRoute = () => {};

  return (
    <div className="bg-slate-800 rounded-md flex flex-row">
      <h2>New Route</h2>
      <div>Waypoints</div>
      <div>
        <SecondaryButton title="Add Waypoint"></SecondaryButton>
      </div>
    </div>
  );
}
