import { SideBar, useSideBar } from "@/shared/ui/side-bar";
import styles from "../styles.module.css";
import { Library, LibrarySearchResult } from "@/entities/libraries";

type Props = {
  libraryList: LibrarySearchResult;
};

export default function LibraryList({ libraryList }: Props) {
  const { resultNum, libs } = libraryList;

  const { sideBarRef, sideBarVisibility, toggleVisibility } =
    useSideBar<HTMLUListElement>();

  return (
    <section className={styles.viewer}>
      <header>
        <p>총 {resultNum}곳의 도서관이 소장 중이에요!</p>
        <button onClick={toggleVisibility}>눌러서 열어보기</button>
        <SideBar visibility={sideBarVisibility}>
          <ul ref={sideBarRef} className={styles.libList}>
            {libs.map(({ lib: { libCode, libName } }: Library) => (
              <li key={libCode}>
                <p>{libName}</p>
              </li>
            ))}
          </ul>
        </SideBar>
      </header>
    </section>
  );
}
