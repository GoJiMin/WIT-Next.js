import styles from "../styles.module.css";
import SearchForm from "./SearchForm";

export default function SearchPage() {
  return (
    <section className={styles.searchPage}>
      <SearchForm />
    </section>
  );
}
