import { Book } from "../../model/type";

type Props = {
  book: Book;
};

export default function BookDetails({ book }: Props) {
  const { author, cover, description, isbn13, priceStandard, title } = book;
  return (
    <article>
      <p>{author}</p>
      <p>{cover}</p>
      <p>{description}</p>
      <p>{isbn13}</p>
      <p>{priceStandard}</p>
      <p>{title}</p>
    </article>
  );
}
