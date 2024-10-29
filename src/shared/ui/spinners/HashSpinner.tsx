import { HashLoader } from "react-spinners";
import styles from "./styles.module.css";

export default function HashSpinner() {
  return (
    <section className={styles.spinnerContainer}>
      <div className={styles.backDrop} />
      <HashLoader color="#0079ff" />
    </section>
  );
}
