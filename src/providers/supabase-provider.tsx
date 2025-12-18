"use client";

import { createContext, useContext, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

const browserSupabaseClient = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type SupabaseType = typeof browserSupabaseClient;

const SupabaseContext = createContext<
  { supabase: SupabaseType } | undefined
>(undefined);

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => browserSupabaseClient);

  return (
    <SupabaseContext.Provider value={{ supabase }}>
      {children}
    </SupabaseContext.Provider>
  );
}

export function useSupabase() {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }
  return context;
}
