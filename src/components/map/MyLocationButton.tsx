"use client";

import { FaLocationCrosshairs } from "react-icons/fa6";
import { useMapEvents } from "react-leaflet/hooks";

export default function MyLocationButton() {
  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  const onLocationButtonClicked = () => {
    map.locate();
  };

  return (
    <div
      onClick={onLocationButtonClicked}
      className="bg-slate-800 w-8 h-8 rounded-md cursor-pointer p-1"
    >
      <FaLocationCrosshairs className=" text-primary-100 h-full w-full"></FaLocationCrosshairs>
    </div>
  );
}
