"use client";

import { queryClient } from "@/shared/api/query-client";
import { QueryClientProvider } from "react-query";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
