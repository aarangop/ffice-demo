import createClient from "openapi-fetch";
import { paths } from "./fetch";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
const fetchClient = createClient<paths>({
  baseUrl: "http://localhost:3000/api",
});

export { queryClient, fetchClient };
