import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { FlightRouteSchema } from "./schemas";

const c = initContract();

export const contract = c.router({
  flightRoutes: {
    getFlightRoute: {
      method: "GET",
      path: "/flight-routes/:id",
      pathParams: z.object({
        id: z.coerce.number(),
      }),
      responses: {
        200: FlightRouteSchema,
      },
      summary: "Get a single flight route",
    },
    getFlightRoutes: {
      method: "GET",
      path: "/flight-routes",
      responses: {
        200: z.array(FlightRouteSchema),
        404: c.type<{ message: string }>(),
      },
      summary: "Get all operator's flight routes",
    },
    createFlightRoute: {
      method: "POST",
      path: "/flight-routes",
      responses: {
        201: FlightRouteSchema,
        400: c.type<{ message: string }>(),
      },
      body: FlightRouteSchema,
      summary: "Create a new flight route",
    },
  },
});
