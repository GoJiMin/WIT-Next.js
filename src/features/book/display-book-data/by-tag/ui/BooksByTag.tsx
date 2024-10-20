import { BookList } from "@/entities/book/book-list";
import { SearchResultByTag } from "@/entities/search";

type Props = {
  data: SearchResultByTag;
};

export default function BooksByTag({ data }: Props) {
  const { item } = data;

  return (
    <section>
      <BookList bookList={item} />
    </section>
  );
}
