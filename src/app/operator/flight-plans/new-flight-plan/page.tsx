"use client";

import PrimaryButton from "@/components/button/PrimaryButton";
import { components } from "@/lib/api/schema";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import "@/styles/datepicker.css";

type FlightPlan = components["schemas"]["FlightPlan"];

export default function NewFlightPlanPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FlightPlan>();

  const onSubmit = async (flightPlanData: FlightPlan) => {
    console.log(flightPlanData);
  };

  const now = new Date();
  const [departureDate, setDepartureDate] = useState<Date | null>(now);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-2 p-2 bg-slate-800 m-2 rounded-md"
    >
      <div className="mb-3 flex space-x-2">
        <label htmlFor="flightRules" className="">
          Flight Rules:
        </label>
        <select
          id="flightRules"
          {...register("flightRules")}
          className="bg-slate-500 rounded-sm"
        >
          <option value="IFR">IFR</option>
          <option value="VFR">VFR</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="departureAirport">Departure Airport (ICAO):</label>
        <input
          type="text"
          id="departureAirport"
          {...register("departure.airport", {
            required: true,
            pattern: /^[A-Z]{4}/,
          })}
          className="rounded-sm bg-slate-200 text-slate-900 px-2 py-1 max-w-16 uppercase"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="destinationAirport">Destination Airport (ICAO):</label>
        <input
          type="text"
          id="departureAirport"
          {...register("departure.airport", {
            required: true,
            pattern: /^[A-Z]{4}/,
          })}
          className="rounded-sm bg-slate-200 text-slate-900 px-2 py-1 max-w-16 uppercase"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="departureDate">Departure Date:</label>
        <DatePicker
          id="departureDate"
          selected={departureDate}
          onChange={(date: Date) => setDepartureDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="yyyy-MM-dd HH:mm"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="flightRoute">Flight Route:</label>
        <input
          id="flightRoute"
          className="rounded-sm bg-slate-200 text-slate-900 px-2 py-1 max-w-48"
        ></input>
      </div>
      <PrimaryButton title="Submit" className="w-32"></PrimaryButton>
    </form>
  );
}
