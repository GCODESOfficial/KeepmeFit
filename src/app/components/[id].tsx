"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

const BlogDetail = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "Unknown Title";
  const category = searchParams.get("category") || "Uncategorized";
  const description = searchParams.get("description") || "No description available.";
  const content = searchParams.get("content") || "No content available.";
  const image = searchParams.get("image") || "/images/default.jpg"; // Default image if null

  return (
    <div className="flex flex-col items-center pb-40">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm font-semibold text-gray-600">{category}</p>
      <Image src={image} alt={title} width={500} height={300} className="rounded-md" />
      <p className="text-sm mt-4">{description}</p>
      <p className="mt-4">{content}</p>
    </div>
  );
};

export default BlogDetail;