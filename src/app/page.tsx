import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="flex w-full max-w-md flex-col items-center gap-10 rounded-3xl bg-linear-to-b from-white to-yellow-50 px-8 py-16 shadow-xl">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/talky.png"
            alt="Talky Mascot"
            width={180}
            height={180}
            priority
          />
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-yellow-600">Talky</h1>
            <h2 className="text-2xl font-bold text-yellow-500">
              Talk. Learn. Smile.
            </h2>
          </div>
        </div>

        <p className="text-center text-lg text-gray-600">
          Learn by speaking 🎤 Let’s talk and have fun!
        </p>

        <Link
          href="/lessons"
          className="flex h-16 w-full items-center justify-center rounded-full bg-yellow-500 text-2xl font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
        >
          Let’s Begin 🚀
        </Link>

        <p className="text-center text-sm text-sky-400">
          No login required · Safe for kids
        </p>
      </main>
    </div>
  );
}
