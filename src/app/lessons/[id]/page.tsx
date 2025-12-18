import LessonDetailClient from "./lesson-detail-client";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function LessonDetailPage({ params }: Props) {
  const { id } = await params;

  return <LessonDetailClient id={id} />;
}
