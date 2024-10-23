import { SideBar, useSideBar } from "@/shared/ui/side-bar";
import styles from "../styles.module.css";
import { Library, LibrarySearchResult } from "@/entities/libraries";
import { MenuOpenIcon } from "@/shared/ui/icons";
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
      <SideBar visibility={sideBarVisibility}>
        <ul ref={sideBarRef} className={styles.libList}>
          {libs.map(({ lib: { libCode, libName } }: Library) => (
            <li key={libCode} onClick={() => handleSelectLibCode(libCode)}>
              <p>{libName}</p>
            </li>
          ))}
        </ul>
      </SideBar>
      <header className={styles.header}>
        <button className={styles.sideBarBtn} onClick={toggleVisibility}>
          <MenuOpenIcon />
        </button>
        <p>{resultNum}곳의 도서관이 소장 중이에요!</p>
        <p>메뉴 버튼을 클릭해 검색 목록을 확인해보세요!</p>
      </header>
      <section className={styles.content}>
        <LibraryDetails library={selectedLibrary} />
      </section>
    </section>
  );
}
