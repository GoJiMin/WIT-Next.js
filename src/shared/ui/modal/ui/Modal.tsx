import { createPortal } from "react-dom";
import styles from "../style.module.css";
import BackDrop from "./BackDrop";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: Props) {
  if (typeof window === "undefined") {
    return null;
  }

  const element = document.getElementById("modal") as HTMLElement;

  return (
    <>
      {createPortal(
        <section className={styles.modalContainer}>
          <BackDrop onClose={onClose} />
          {children}
        </section>,
        element
      )}
    </>
  );
}
