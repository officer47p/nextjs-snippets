import { db } from "@/db";
import Link from "next/link";
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
      <div className="flex m-4 justify-between items-center">
        <h1 className="font-bold text-2xl mb-4">{snippet?.title}</h1>
        <div className="flex gap-2">
          <Link href={`/snippets/${id}/edit`} className="p-2 border rounded">
            Edit
          </Link>
          <button className="p-2 border rounded">Delete</button>
        </div>
      </div>
      <pre className="bg-gray-100 p-4 rounded border">
        <code>{snippet?.code}</code>
      </pre>
    </div>
  );
}
