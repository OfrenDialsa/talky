import { supabase } from "@/lib/supabase/client";
import { Result } from "@/types/result.types";

export async function getResult(): Promise<Result[]> {
    
    const { data, error } = await supabase
        .from("results")
        .select("*")
        .order("created_at", { ascending: false })
        .overrideTypes<Result[], { merge: false }>();

    if (error) {
        console.error("Failed to get Result data:", error);
        throw new Error("Failed to get Result data.");
    }

    return data ?? [];
}
