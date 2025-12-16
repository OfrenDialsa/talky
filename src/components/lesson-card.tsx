"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type LessonItem = {
  id: string;
  prompt_text: string;
};

type LessonCardProps = {
  lesson: {
    id: string;
    title: string;
    level: number;
    language: string;
    lesson_items?: LessonItem[];
  };
};

export default function LessonCard({ lesson }: LessonCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="cursor-pointer rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg"
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {lesson.title}
          </h2>
          <p className="text-sm text-gray-500">
            Level {lesson.level} · {lesson.language.toUpperCase()}
          </p>
        </div>

        <Link
          href={`/lessons/${lesson.id}`}
          onClick={(e) => e.stopPropagation()}
          className="rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        >
          Start
        </Link>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {lesson.lesson_items?.map((item, index) => (
            <div key={item.id} className="rounded-lg bg-indigo-50 px-4 py-2">
              <span className="text-sm text-gray-700">
                {index + 1}. {item.prompt_text}
              </span>
            </div>
          ))}
          {lesson.lesson_items?.length === 0 && (
            <p className="text-sm text-gray-400">No exercises available.</p>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <ChevronDown
          className={`h-5 w-5 text-indigo-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
    </div>
  );
}
