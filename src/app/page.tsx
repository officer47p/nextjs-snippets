import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <Link
      key={snippet.id}
      href={`/snippets/${snippet.id}`}
      className="block mb-4 p-4 border rounded hover:bg-gray-50"
    >
      <div className="flex items-center">
        <h2>{snippet.title}</h2>
        <h3 className="ml-auto">View</h3>
      </div>
    </Link>
  ));

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
