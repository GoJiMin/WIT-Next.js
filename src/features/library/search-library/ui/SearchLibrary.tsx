import { useModal, useToast } from "@/shared/lib/hooks";
import { Modal } from "@/shared/ui/modal";
import styles from "../styles.module.css";
import { RegionState } from "../../select-region/model/type";
import { useState } from "react";
import { fetchLibraryList } from "@/entities/libraries/api/client";
import { SelectRegion } from "../../select-region";
import { LibrarySearchResult } from "@/entities/libraries";

type Props = {
  isbn: string;
};

export default function SearchLibrary({ isbn }: Props) {
  const [regionState, setRegionState] = useState<RegionState>({
    region: null,
    dtlRegion: null,
  });

  const [libraryList, setLibraryList] = useState<LibrarySearchResult>();

  const { openModal, handleModalOpen, handleModalClose } = useModal();
  const { toastError } = useToast();

  const disabled = regionState.region === null;

  const handleSubmit = async () => {
    if (disabled) {
      toastError("지역을 선택해주세요.");

      return;
    }

    fetchLibraryList({
      isbn,
      region: regionState.region!.value,
      dtl_region: regionState.dtlRegion?.value,
    })
      .then(setLibraryList)
      .catch((error) => toastError(error.message));
  };

  console.log(libraryList);

  return (
    <>
      <button onClick={handleModalOpen} className={styles.findLibraryBtn}>
        소장 도서관
      </button>
      {openModal && (
        <Modal onClose={handleModalClose}>
          <section className={styles.selectContainer}>
            <SelectRegion
              regionState={regionState}
              setRegionState={setRegionState}
            />
            <button disabled={disabled} onClick={handleSubmit}>
              검색하기
            </button>
          </section>
        </Modal>
      )}
    </>
  );
}
