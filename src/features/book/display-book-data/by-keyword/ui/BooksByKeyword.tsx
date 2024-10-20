import { SearchResultByKeyword } from "@/entities/search";

type Props = {
  data: SearchResultByKeyword;
};

export default function BooksByKeyword({ data }: Props) {
  const { item } = data;

  console.log(item);

  return <section></section>;
}
