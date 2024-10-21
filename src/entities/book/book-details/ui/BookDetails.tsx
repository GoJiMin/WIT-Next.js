import Image from "next/image";
import { Book } from "../../model/type";
import styles from "../styles.module.css";
import { decode } from "html-entities";
import { SearchLibrary } from "@/features/library/search-library";

type Props = {
  book: Book;
};

export default function BookDetails({ book }: Props) {
  const { author, cover, description, isbn13, title } = book;
  const decodedDescription = decode(description);

  return (
    <article className={styles.book_detail}>
      <section className={styles.img_container}>
        <Image
          src={cover}
          alt={`${title} Cover Image`}
          fill
          sizes="(max-width: 768px) 100vw, 200px"
        />
      </section>
      <section className={styles.text_container}>
        <section className={styles.textBox}>
          <header className={styles.header}>
            <p className={styles.title}>{title}</p>
            <p className={styles.author}>{author}</p>
          </header>
          <article>
            <p className={styles.description}>{decodedDescription}</p>
            <p className={styles.more_description}>더보기</p>
          </article>
        </section>
        <SearchLibrary isbn={isbn13} />
      </section>
    </article>
  );
}
