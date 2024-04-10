import { contract } from "@/lib/api/operatorapi";
import prisma from "@/lib/db";
import { createNextHandler } from "@ts-rest/serverless/next";

const handler = createNextHandler(
  contract.flightRoutes,
  {
    getFlightRoutes: async () => {
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
      return {
        status: 201,
        body: args.body,
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
