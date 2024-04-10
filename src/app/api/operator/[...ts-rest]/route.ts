import { contract } from "@/lib/api/operatorapi";
import { FlightRouteSchema } from "@/lib/api/schemas";
import prisma from "@/lib/db";
import { createNextHandler } from "@ts-rest/serverless/next";

const handler = createNextHandler(
  contract.flightRoutes,
  {
    getFlightRoutes: async () => {
      const flightRoutes = await prisma.flightRoute.findMany({
        include: { waypoints: true },
      });
      console.log(flightRoutes);
      return {
        status: 200,
        body: await prisma.flightRoute.findMany({
          include: {
            waypoints: true,
          },
        }),
      };
    },
    createFlightRoute: async (args) => {
      const newRoute = await prisma.flightRoute.create({
        data: {
          waypoints: {
            create: args.body.waypoints,
          },
        },
        include: {
          waypoints: true,
        },
      });
      return {
        status: 201,
        body: newRoute,
      };
    },
  },
  {
    basePath: "/api/operator",
    jsonQuery: true,
    responseValidation: true,
    handlerType: "app-router",
  }
);

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
};
