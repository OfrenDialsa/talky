"use client";

import LessonError from "@/components/ui/lessons-error";
import LessonLoading from "@/components/ui/loading-lessons";
import AnimatedList from "@/components/ui/animated-list";
import AnimatedItem from "@/components/ui/animated-item";
import { useLesson } from "@/hooks/useLesson";
import Link from "next/link";

export default function LessonDetailClient({ id }: { id: string }) {
  const { data, isLoading, error } = useLesson(id);

  if (isLoading)
    return (
      <LessonLoading
        title="Loading Lesson..."
        message="Hang tight! We’re opening your lesson and getting it ready just for you ✨"
      />
    );

  if (error) return <LessonError />;
  if (!data) return null;

  return (
    <div className="min-h-screen bg-indigo-50 px-6 py-10">
      <div className="mx-auto mb-8 max-w-4xl">
        <Link
          href="/lessons"
          className="mb-4 inline-block text-sm text-indigo-600 hover:underline"
        >
          ← Back to Lessons
        </Link>

        <h1 className="text-3xl font-bold text-indigo-700">
          {data.title}
        </h1>
        <p className="text-gray-500">
          Level {data.level} · {data.language.toUpperCase()}
        </p>
      </div>

      <AnimatedList>
        <div className="mx-auto max-w-4xl space-y-4">
          {data.lesson_items?.map((item, index) => (
            <AnimatedItem key={item.id}>
              <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow hover:shadow-md">
                <div>
                  <p className="text-sm text-gray-400">
                    Exercise {index + 1}
                  </p>
                  <p className="text-lg font-medium text-gray-800">
                    {item.prompt_text}
                  </p>
                </div>

                <Link
                  href={`/lessons/${data.id}/practice/${item.id}`}
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
                >
                  Practice
                </Link>
              </div>
            </AnimatedItem>
          ))}

          {data.lesson_items?.length === 0 && (
            <p className="text-center text-gray-500">
              No exercises available for this lesson.
            </p>
          )}
        </div>
      </AnimatedList>
    </div>
  );
}
