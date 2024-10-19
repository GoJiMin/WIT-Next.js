"use client";

import { useSearchResult } from "@/entities/search";

type Props = {
  params: {
    slug: ["keyword" | "tag", string];
  };
};
export default function SearchResult({ params }: Props) {
  const [type, query] = params.slug;

  const decodedQuery = decodeURIComponent(query);

  const { data, isLoading, isError } = useSearchResult({
    type,
    query: decodedQuery,
  });

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>error</p>;

  console.log(data);

  return <section></section>;
}
