import Link from "next/link";
import styles from "../styles.module.css";
import { SearchIcon } from "@/shared/ui/icons";

export default function HomePage() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>오늘 뭐 읽지?</h2>
      <section className={styles.searchBox}>
        <Link href="/select" className={styles.inputBox} />
        <Link href="/select">
          <SearchIcon />
        </Link>
      </section>
      <section className={styles.textBox}>
        <p>태그를 선택해 오늘 읽을 책을 추천 받아보세요.</p>
        <p>검색 버튼을 눌러 시작해보세요!</p>
      </section>
    </section>
  );
}
