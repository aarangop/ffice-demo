import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { FlightRouteSchema } from "./schemas";

const c = initContract();

export const contract = c.router({
  flightRoutes: {
    getFlightRoutes: {
      method: "GET",
      path: "/routes",
      responses: {
        200: z.array(FlightRouteSchema),
        404: c.type<{ message: string }>(),
      },
      summary: "Get all operator's flight routes",
    },
    createFlightRoute: {
      method: "POST",
      path: "/routes",
      responses: {
        201: FlightRouteSchema,
      },
      body: FlightRouteSchema,
      summary: "Create a new flight route",
    },
  },
});
