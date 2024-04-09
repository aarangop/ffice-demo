"use client";

import PrimaryButton from "@/components/button/PrimaryButton";
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
    error,
    isLoading,
  } = useQuery({ queryKey: ["routes"], queryFn: retrieveRoutes });

  const postNewRoute = useMutation({
    mutationFn: saveNewRoute,
    mutationKey: ["routes"],
  });

  const [state, dispatch] = useReducer(routeReducer, routeInitialState);

  const onNewRouteClicked = () => {
    const newRoute = {
      routeId: crypto.randomUUID(),
      waypoints: [],
    };
    postNewRoute.mutate(newRoute);
    dispatch({
      type: RouteActionType.ADD_ROUTE,
      payload: newRoute,
    });
    router.push(`flight-routes/${newRoute.routeId}`);
  };
  return (
    <div className="flex flex-row">
      <h1>Flight Routes</h1>
      <div className="flex flex-col">
        {routes?.length != 0 &&
          routes?.map((route) => <div>{route.routeId}</div>)}
      </div>
      <PrimaryButton
        title="New Route"
        onClick={onNewRouteClicked}
        disabled={isLoading}
      ></PrimaryButton>
    </div>
  );
}
