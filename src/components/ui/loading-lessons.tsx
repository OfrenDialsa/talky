"use client";

import Image from "next/image";
import PageTransition from "../page-transition";

type LessonLoadingProps = {
  title?: string;
  message?: string;
};

export default function LessonLoading({
  title = "Loading Lessons...",
  message = "Please wait, we’re preparing something fun for you 🎉",
}: LessonLoadingProps) {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col items-center justify-center bg-indigo-50 px-4">
        <div className="mb-4 animate-bounce">
          <Image
            src="/talky.png"
            alt="Talky mascot"
            width={120}
            height={120}
            priority
            className="drop-shadow-lg"
          />
        </div>

        <div className="mb-6 flex space-x-2 text-5xl">
          <span className="animate-bounce">📘</span>
          <span className="animate-bounce [animation-delay:150ms]">📗</span>
          <span className="animate-bounce [animation-delay:300ms]">📙</span>
        </div>

        <h2 className="mb-2 text-center text-2xl font-bold text-indigo-700">
          {title}
        </h2>

        <p className="max-w-sm text-center text-gray-500">{message}</p>
      </div>
    </PageTransition>
  );
}
