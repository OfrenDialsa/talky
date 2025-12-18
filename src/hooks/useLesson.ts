"use client";

import { useQuery } from "@tanstack/react-query";
import { getLessonById } from "@/services/lesson.service";

export function useLesson(id: string) {
  return useQuery({
    queryKey: ["lesson", id],
    queryFn: async () => {
      const res = await getLessonById(id);
      console.log("LESSON RESULT:", res);
      return res;
    },
    enabled: !!id,
  });
}
