import { Resource } from "sst";
import Form from "@/components/form";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
export const dynamic = "force-dynamic";

export default async function Home() {
  const command = new PutObjectCommand({
    Key: crypto.randomUUID(),
    Bucket: Resource.MyBucket.name,
  });
  const url = await getSignedUrl(new S3Client({}), command);

  return (
    <div className="container pt-5 px-3">
      <main className="flex flex-col items-center justify-center bg-secondary rounded-lg">
        <h1 className="text-2xl font-bold">Upload files to S3</h1>
        <Form url={url} />
      </main>
    </div>
  );
}