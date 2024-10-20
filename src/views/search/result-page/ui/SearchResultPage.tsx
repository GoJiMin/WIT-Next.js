"use client";

import { useSearchResult } from "@/entities/search";
import { BooksByKeyword } from "@/features/book/display-book-data/by-keyword";
import { BooksByTag } from "@/features/book/display-book-data/by-tag";

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

  return (
    <section>
      {data &&
        (data.kind === "keyword" ? (
          <BooksByKeyword data={data} />
        ) : (
          <BooksByTag data={data} />
        ))}
    </section>
  );
}
