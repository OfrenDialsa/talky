"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SupabaseProvider from "@/providers/supabase-provider";
import { ReactNode, useState } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SupabaseProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </SupabaseProvider>
  );
}
