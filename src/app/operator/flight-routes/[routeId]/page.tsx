"use client";

import { useEffect, useState } from "react";
import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import Map from "@/components/map/Map";
import { components } from "@/lib/api/schema";

type FlightRoute = components["schemas"]["FlightRoute"];
type Waypoint = components["schemas"]["Waypoint"];

export default function NewFlightRoutePage({ routeId }: { routeId: string }) {
  const [waypoints, setWaypoints] = useState<Waypoint[]>([]);

  return (
    <div className="bg-slate-800 h-full rounded-md flex min-h-[500px] flex-col m-2 p-2 space-y-2">
      <h2>New Route</h2>
      <div className="flex flex-row flex-1 space-x-2">
        <div className="flex flex-col bg-slate-700 rounded-md p-2">
          {waypoints.length == 0 && <p>No waypoints added to route</p>}
          <SecondaryButton
            className="w-48"
            title="Add Waypoint"
            onClick={() => {}}
          ></SecondaryButton>
        </div>
        <div className="flex-1 p-2 bg-slate-700 rounded-md h-full">
          <div className="rounded-md overflow-clip">
            <Map />
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        <PrimaryButton className="w-48" title="Save"></PrimaryButton>
      </div>
    </div>
  );
}
