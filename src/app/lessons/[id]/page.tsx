import PageTransition from "@/components/page-transition";
import { getLessonById } from "@/service/lessons.service";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function LessonDetailPage({ params }: Props) {
  const { id } = await params;
  const lesson = await getLessonById(id);

  if (!lesson) {
    return (
      <PageTransition>
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-gray-500">Lesson not found.</p>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-indigo-50 px-6 py-10">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-4xl">
          <Link
            href="/lessons"
            className="mb-4 inline-block text-sm text-indigo-600 hover:underline"
          >
            ← Back to Lessons
          </Link>

          <h1 className="text-3xl font-bold text-indigo-700">{lesson.title}</h1>
          <p className="text-gray-500">
            Level {lesson.level} · {lesson.language.toUpperCase()}
          </p>
        </div>

        {/* Items */}
        <div className="mx-auto max-w-4xl space-y-4">
          {lesson.lesson_items?.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl bg-white p-5 shadow transition hover:shadow-md"
            >
              <div>
                <p className="text-sm text-gray-400">Exercise {index + 1}</p>
                <p className="text-lg font-medium text-gray-800">
                  {item.prompt_text}
                </p>
              </div>

              <Link
                href={`/lessons/${lesson.id}/practice/${item.id}`}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
              >
                Practice
              </Link>
            </div>
          ))}

          {lesson.lesson_items?.length === 0 && (
            <p className="text-center text-gray-500">
              No exercises available for this lesson.
            </p>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
