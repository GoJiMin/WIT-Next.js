import { SideBar, useSideBar } from "@/shared/ui/side-bar";
import styles from "../styles.module.css";
import { Library, LibrarySearchResult } from "@/entities/libraries";
import { CloseIcon, MenuOpenIcon } from "@/shared/ui/icons";
import { useSelectLibrary } from "../lib/hooks/useSelectLibrary";
import LibraryDetails from "./LibraryDetails";

type Props = {
  libraryList: LibrarySearchResult;
};

export default function LibraryList({
  libraryList: { resultNum, libs },
}: Props) {
  const { sideBarRef, sideBarVisibility, toggleVisibility } =
    useSideBar<HTMLUListElement>();

  const { selectedLibrary, onSelectLibCode } = useSelectLibrary({ libs });

  const handleSelectLibCode = (libCode: string) => {
    onSelectLibCode(libCode);

    toggleVisibility();
  };

  return (
    <section className={styles.viewer}>
      <button className={styles.sideBarBtn} onClick={toggleVisibility}>
        <MenuOpenIcon />
      </button>
      <SideBar visibility={sideBarVisibility}>
        <article ref={sideBarRef} className={styles.sideBar}>
          <header className={styles.header__sideBar}>
            <p className={styles.title__sideBar}>검색 목록</p>
            <button className={styles.closeButton} onClick={toggleVisibility}>
              <CloseIcon />
            </button>
          </header>
          <ul className={styles.libList__sideBar}>
            {libs.map(({ lib: { libCode, libName } }: Library) => (
              <li key={libCode}>
                <button
                  className={`${
                    selectedLibrary.libCode === libCode && styles.active
                  }`}
                  onClick={() => handleSelectLibCode(libCode)}
                >
                  {libName}
                </button>
              </li>
            ))}
          </ul>
        </article>
      </SideBar>
      <header className={styles.header}>
        <p className={styles.info}>{resultNum}곳의 도서관이 소장 중이에요!</p>
        <p className={styles.guide}>
          메뉴 버튼을 클릭해 검색 목록을 확인해보세요!
        </p>
      </header>
      <section className={styles.content}>
        <LibraryDetails library={selectedLibrary} />
      </section>
    </section>
  );
}
