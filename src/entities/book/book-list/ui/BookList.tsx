import { BookDetails } from "@/entities/book/book-details";
import { Book } from "@/entities/book";
import styles from "../styles.module.css";

type Props = {
  bookList: Book[];
};

export default function BookList({ bookList }: Props) {
  return (
    <section className={styles.bookList}>
      {bookList.map((book) => (
        <li key={book.isbn13}>
          <BookDetails book={book} />
        </li>
      ))}
    </section>
  );
}
