import { components } from "@/lib/api/schema";

type FlightRoute = components["schemas"]["FlightRoute"];

export enum RouteActionType {
  ADD_ROUTE = "ADD_ROUTE",
}

export type RouteAction = {
  type: RouteActionType.ADD_ROUTE;
  payload: FlightRoute;
};

export interface IRouteState {
  routes: FlightRoute[];
}

export default function routeReducer(
  state: IRouteState,
  action: RouteAction
): IRouteState {
  const { type, payload } = action;
  switch (type) {
    case RouteActionType.ADD_ROUTE:
      return { ...state, routes: [...state.routes, payload] };
    default:
      return state;
  }
}
