"use client";

import Link from "next/link";

export default function LessonError() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-indigo-50 px-6 text-center">
      <div className="mb-6 text-6xl animate-bounce">😵‍💫</div>

      <h2 className="mb-2 text-2xl font-bold text-red-500">
        Oops! Something went wrong
      </h2>

      <p className="mb-6 text-gray-500">
        We couldn’t load the lessons right now.
        <br />
        Please try again later!
      </p>

      <Link
        href="/"
        className="rounded-xl bg-indigo-600 px-6 py-3 text-white shadow hover:bg-indigo-700 transition"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}
