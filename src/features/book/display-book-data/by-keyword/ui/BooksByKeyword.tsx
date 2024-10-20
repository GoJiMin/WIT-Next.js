import { BookList } from "@/entities/book/book-list";
import { SearchResultByKeyword } from "@/entities/search";

type Props = {
  data: SearchResultByKeyword;
};

export default function BooksByKeyword({ data }: Props) {
  const { item } = data;

  return (
    <section>
      <BookList bookList={item} />
    </section>
  );
}
