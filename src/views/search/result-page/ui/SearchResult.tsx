type Props = {
  params: {
    slug: ["keyword" | "tag", string];
  };
};

export default function SearchResult({ params }: Props) {
  const [type, query] = params.slug;

  const decodedQuery = decodeURIComponent(query);

  console.log(type, decodedQuery);

  return <section></section>;
}
