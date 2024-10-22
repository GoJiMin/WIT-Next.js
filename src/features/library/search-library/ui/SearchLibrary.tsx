import { useModal } from "@/shared/lib/hooks";
import { Modal } from "@/shared/ui/modal";
import styles from "../styles.module.css";
import { SelectRegion } from "../../select-region";
import { RegionState } from "../../select-region/model/type";
import { useState } from "react";

type Props = {
  isbn: string;
};

export default function SearchLibrary({ isbn }: Props) {
  const [regionState, setRegionState] = useState<RegionState>({
    region: null,
    dtlRegion: null,
  });

  const { openModal, handleModalOpen, handleModalClose } = useModal();

  return (
    <>
      <button onClick={handleModalOpen} className={styles.findLibraryBtn}>
        소장 도서관
      </button>
      {openModal && (
        <Modal onClose={handleModalClose}>
          <SelectRegion
            regionState={regionState}
            setRegionState={setRegionState}
          />
        </Modal>
      )}
    </>
  );
}
