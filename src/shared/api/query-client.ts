import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      retry: 2,
      retryDelay: 1000,
    },
  },
});
