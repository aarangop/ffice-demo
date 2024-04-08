import FlightPlanList from "@/components/FlightPlanList";
import NewFlightPlanButton from "@/components/NewFlightPlanButton";

export default function OperatorPage() {
  return (
    <div className="flex flex-row justify-between w-full p-2 space-x-2 space-y-2">
      <div className="flex flex-col bg-slate-800 p-2 rounded-md space-y-2">
        <h1>Flight Plans</h1>
        <FlightPlanList />
        <NewFlightPlanButton />
      </div>
      <div className="grow">Map</div>
    </div>
  );
}
