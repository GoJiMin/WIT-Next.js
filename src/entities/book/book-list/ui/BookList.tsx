import { Book } from "@/entities/book";
import { BookDetails } from "@/entities/book/book-details";

type Props = {
  bookList: Book[];
};

export default function BookList({ bookList }: Props) {
  return (
    <section>
      {bookList.map((book) => (
        <li key={book.isbn13}>
          <BookDetails book={book} />
        </li>
      ))}
    </section>
  );
}
