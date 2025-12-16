import PageTransition from "@/components/page-transition";
import { getLessons } from "@/service/lessons.service";
import LessonCard from "@/components/lesson-card";

export default async function LessonPage() {
  const lessons = await getLessons();

  return (
    <PageTransition>
      <div className="min-h-screen bg-indigo-50 px-6 py-10">
        <h1 className="mb-8 text-center text-4xl font-bold text-indigo-700">
          🎤 Let’s Start Learning!
        </h1>

        <div className="mx-auto max-w-4xl space-y-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}

          {lessons.length === 0 && (
            <p className="text-center text-gray-500">
              No lessons available yet.
            </p>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
