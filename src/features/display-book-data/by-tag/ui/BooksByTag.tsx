import { SearchResultByTag } from "@/entities/search";

type Props = {
  data: SearchResultByTag;
};

export default function BooksByTag({ data }: Props) {
  const { item } = data;

  console.log(item);

  return <section></section>;
}
