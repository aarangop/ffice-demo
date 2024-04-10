import { z } from "zod";

export const WaypointSchema = z.object({
  id: z.string(),
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
  alt: z.number().min(-5000).max(200000),
});

export const FlightRouteSchema = z.object({
  id: z.string(),
  waypoints: z.array(WaypointSchema),
});
