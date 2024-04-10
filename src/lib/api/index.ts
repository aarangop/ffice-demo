import { QueryClient } from "@tanstack/react-query";
import { initQueryClient } from "@ts-rest/react-query";
import { contract } from "./operatorapi";

export const queryClient = new QueryClient();

export const client = initQueryClient(contract, {
  baseUrl: "http://localhost:3000/api/operator",
  baseHeaders: {},
});
