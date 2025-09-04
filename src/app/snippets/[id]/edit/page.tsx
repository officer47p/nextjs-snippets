import SnippetEditForm from "@/components/snippet-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const { id } = await props.params;

  const snippet = await db.snippet.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  return <SnippetEditForm snippet={snippet} />;
}
