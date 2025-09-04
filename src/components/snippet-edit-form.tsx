"use client";

import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || "");
  };

  return (
    <Editor
      height="40vh"
      defaultLanguage="javascript"
      theme="vs-dark"
      defaultValue={snippet.code}
      options={{ minimap: { enabled: false } }}
      onChange={handleEditorChange}
    />
    // <div>
    //   <h1 className="font-bold text-2xl mb-4">Edit Snippet {snippet.id}</h1>
    //   <form className="flex flex-col gap-4">
    //     <div className="flex flex-col">
    //       <label htmlFor="title" className="mb-2 font-semibold">
    //         Title
    //       </label>
    //       <input
    //         type="text"
    //         id="title"
    //         name="title"
    //         className="border rounded p-2"
    //         defaultValue={snippet.title}
    //       />
    //     </div>
    //     <div className="flex flex-col">
    //       <label htmlFor="code" className="mb-2 font-semibold">
    //         Code
    //       </label>
    //       <textarea
    //         id="code"
    //         name="code"
    //         className="border rounded p-2 h-40"
    //         defaultValue={snippet.code}
    //       />
    //     </div>
    //     <button type="submit" className="border rounded p-2 bg-blue-200">
    //       Save Changes
    //     </button>
    //   </form>
    // </div>
  );
}
