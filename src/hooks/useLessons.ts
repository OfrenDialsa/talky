"use client";

import { getLessons } from "@/services/lesson.service";
import { useQuery } from "@tanstack/react-query";

export function useLessons() {
  return useQuery({
    queryKey: ["lessons"],
    queryFn: getLessons,
    staleTime: 1000 * 60 * 5,
  });
}
