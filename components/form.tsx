"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export default function Form({ url }: { url: string }) {
  const [file, setFile] = useState<File | null>(null);
  return (
    <form
      className="flex flex-col md:flex-row items-center justify-center gap-2 p-2 mb-2"
      onSubmit={async (e) => {
        e.preventDefault();

        const file = (e.target as HTMLFormElement).file.files?.[0] ?? null;

        const image = await fetch(url, {
          body: file,
          method: "PUT",
          headers: {
            "Content-Type": file.type,
            "Content-Disposition": `attachment; filename="${file.name}"`,
          },
        });

        window.location.href = image.url.split("?")[0];
      }}
    >
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="file">Picture</Label>
      <div className="flex flex-col md:flex-row gap-2">
        <Input
          name="file"
          type="file"
          accept="image/png, image/jpeg"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
          <Button disabled={!file} type="submit">
            Upload
          </Button>
        </div>  
      </div>
    </form>
  );
}