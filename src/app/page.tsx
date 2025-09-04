import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <div key={snippet.id}>
      <h2>{snippet.title}</h2>
      <pre>{snippet.code}</pre>
    </div>
  ));

  return (
    <div>
      <h1>Home Page</h1>
      <ul>{renderedSnippets}</ul>
    </div>
  );
}
