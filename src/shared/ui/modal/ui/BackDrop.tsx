import styles from "../style.module.css";

type Props = {
  onClose: () => void;
};

export default function BackDrop({ onClose }: Props) {
  return <div className={styles.backDrop} onClick={onClose} />;
}
