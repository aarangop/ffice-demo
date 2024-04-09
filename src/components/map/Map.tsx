import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

import { IMapState } from "@/reducers/mapReducer";
import "leaflet/dist/leaflet.css";
import MyLocationButton from "./MyLocationButton";
import MapToolbar from "./MapToolbar";

const initialMapState: IMapState = {
  position: [52.268, 10.542],
};

export default function Map() {
  return (
    <>
      <MapContainer
        className="min-h-[400px] h-full"
        center={initialMapState.position as LatLngExpression}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <div className="absolute z-[1000] flex flex-row bottom-0 min-w-32 min-h-8 w-full justify-start items-center space-x-4 m-2">
          <MyLocationButton />
          <MapToolbar />
        </div>
      </MapContainer>
    </>
  );
}
