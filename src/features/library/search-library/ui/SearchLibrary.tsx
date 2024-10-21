import { useModal } from "@/shared/lib/hooks";
import { Modal } from "@/shared/ui/modal";
import styles from "../styles.module.css";

type Props = {
  isbn: string;
};

export default function SearchLibrary({ isbn }: Props) {
  const { openModal, handleModalOpen, handleModalClose } = useModal();

  return (
    <>
      <button onClick={handleModalOpen} className={styles.findLibraryBtn}>
        소장 도서관
      </button>
      {openModal && (
        <Modal onClose={handleModalClose}>
          <p>소장 도서관 찾기!</p>
        </Modal>
      )}
    </>
  );
}
