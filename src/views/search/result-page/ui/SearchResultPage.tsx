"use client";

import { useSearchResult } from "@/entities/search";

type Props = {
  params: {
    slug: ["keyword" | "tag", string];
  };
};
export default function SearchResultPage({ params }: Props) {
  const [type, query] = params.slug;

  const decodedQuery = decodeURIComponent(query);

  const { data } = useSearchResult({
    type,
    query: decodedQuery,
  });

  console.log(data);

  return <section></section>;
}
