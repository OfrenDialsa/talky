"use client";

import LessonCard from "@/components/lesson-card";
import LessonError from "@/components/ui/lessons-error";
import LessonLoading from "@/components/ui/loading-lessons";
import AnimatedList from "@/components/ui/animated-list";
import AnimatedItem from "@/components/ui/animated-item";
import { useLessons } from "@/hooks/useLessons";

export default function LessonCLient() {
  const { data, isLoading, error } = useLessons();

  if (isLoading)
    return (
      <LessonLoading
        title="Getting your lessons ready 📚"
        message="Hang tight! We’re loading exciting exercises just for you 🚀"
      />
    );

  if (error) return <LessonError />;
  if (!data) return null;

  return (
    <div className="min-h-screen bg-indigo-50 px-6 py-10">
      <h1 className="mb-8 text-center text-4xl font-bold text-indigo-700">
        🎤 Let’s Start Learning!
      </h1>

      <AnimatedList>
        <div className="mx-auto max-w-4xl space-y-6">
          {data.map((lesson) => (
            <AnimatedItem key={lesson.id}>
              <LessonCard lesson={lesson} />
            </AnimatedItem>
          ))}

          {data.length === 0 && (
            <p className="text-center text-gray-500">
              No lessons available yet.
            </p>
          )}
        </div>
      </AnimatedList>
    </div>
  );
}
