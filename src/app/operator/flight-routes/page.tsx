"use client";

import PrimaryButton from "@/components/button/PrimaryButton";
import { client } from "@/lib/api";
import { FlightRouteSchema } from "@/lib/api/schemas";
import { retrieveRoutes, saveNewRoute } from "@/lib/serverActions/routes";
import routeReducer, {
  IRouteState,
  RouteAction,
  RouteActionType,
} from "@/reducers/routeReducer";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Dispatch, createContext, useReducer } from "react";

const routeInitialState: IRouteState = {
  routes: [],
};

export const routesContext = createContext<{
  state: IRouteState;
  dispatch: Dispatch<RouteAction>;
}>({ state: routeInitialState, dispatch: () => {} });

export default function FlightRoutesPage() {
  const router = useRouter();
  const {
    data: routes,
    isLoading,
    error,
  } = client.flightRoutes.getFlightRoutes.useQuery(["flight-routes"]);

  const postNewRoute = client.flightRoutes.createFlightRoute.useMutation({
    mutationKey: ["routes"],
  });

  const onNewRouteClicked = async () => {
    const newRoute = await postNewRoute.mutateAsync({
      body: FlightRouteSchema.parse({ waypoints: [] }),
    });
    router.push(`flight-routes/${newRoute.body.id}`);
  };
  return (
    <div className="flex flex-col p-2">
      <h1>Flight Routes</h1>
      <div className="flex flex-col">
        {!error && routes?.body.map((route) => <div>{route.id}</div>)}
      </div>
      <PrimaryButton
        title="New Route"
        onClick={onNewRouteClicked}
        disabled={isLoading}
      ></PrimaryButton>
    </div>
  );
}
