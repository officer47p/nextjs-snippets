import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { id } = await props.params;

  const snippet = await db.snippet.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-4">{snippet?.title}</h1>
      <pre className="bg-gray-100 p-4 rounded">
        <code>{snippet?.code}</code>
      </pre>
    </div>
  );
}
