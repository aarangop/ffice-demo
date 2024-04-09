import { fetchClient } from "../api";
import { components } from "../api/fetch";

type FlightRoute = components["schemas"]["FlightRoute"];

export const retrieveRoutes = async () => {
  const { data, error } = await fetchClient.GET("/routes");
  if (!error) {
    return data;
  }
  return [];
};

export const saveNewRoute = async (newRoute: FlightRoute) => {
  const { data, error } = await fetchClient.POST("/routes", {
    body: newRoute,
  });
  if (data?.insertedId) {
    return data.insertedId;
  }
};
