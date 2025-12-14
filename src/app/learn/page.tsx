import PageTransition from "@/components/page-transition";

export default function LearnPage() {
  return (
    <PageTransition>
      <div className="flex min-h-screen items-center justify-center bg-indigo-50">
        <h1 className="text-4xl font-bold text-indigo-600">
          🎤 Let’s Start Learning!
        </h1>
      </div>
    </PageTransition>
  );
}
