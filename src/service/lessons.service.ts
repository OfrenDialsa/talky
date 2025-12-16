import { supabase } from "@/lib/supabase/client";
import { Lesson } from "@/types/lesson.types";

export async function getLessons(): Promise<Lesson[]> {
    const { data, error } = await supabase
        .from("lessons")
        .select(`
            id,
            title,
            level,
            language,
            created_at,
            lesson_items (
                id,
                lesson_id,
                prompt_text,
                expected_text,
                created_at
            )
        `)
        .order("created_at", { ascending: false })
        .overrideTypes<Lesson[], { merge: false }>();

    if (error) {
        console.error("Failed to get Lesson data:", error);
        throw new Error("Failed to get Lesson data.");
    }

    return data ?? [];
}

export async function getLessonById(id: string): Promise<Lesson | null> {
  const { data, error } = await supabase
    .from("lessons")
    .select(`
      id,
      title,
      level,
      language,
      created_at,
      lesson_items (
        id,
        lesson_id,
        prompt_text,
        expected_text,
        created_at
      )
    `)
    .eq("id", id)
    .single()
    .overrideTypes<Lesson, { merge: false }>();

  if (error) {
    console.error("Failed to get lesson:", error);
    return null;
  }

  return {
    id: data.id,
    title: data.title,
    level: data.level,
    language: data.language,
    created_at: data.created_at,
    lesson_items: data.lesson_items ?? [],
  };
}
