import styles from "../styles.module.css";
import { Library, LibrarySearchResult } from "@/entities/libraries";

type Props = {
  libraryList: LibrarySearchResult;
};

export default function LibraryList({ libraryList }: Props) {
  const { resultNum, libs } = libraryList;

  return (
    <section className={styles.viewer}>
      <header>
        <p>총 {resultNum}곳의 도서관이 소장 중이에요!</p>
        <ul>
          {libs.map(({ lib: { libCode, libName } }: Library) => (
            <li key={libCode}>
              <p>{libName}</p>
            </li>
          ))}
        </ul>
      </header>
    </section>
  );
}
