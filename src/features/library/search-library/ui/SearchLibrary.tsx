import styles from "../styles.module.css";
import { SelectRegion } from "../select-region";
import { LibraryList } from "@/features/library/display-library-list";
import { useSearchLibrary } from "../lib/hooks/useSearchLibrary";
import { useSelectRegion } from "../lib/hooks/useSelectRegion";
import { Modal } from "@/shared/ui/modal";
import { useModal } from "@/shared/lib/hooks";
import { useMemo } from "react";

type Props = {
  isbn: string;
};

export default function SearchLibrary({ isbn }: Props) {
  const { libraryList, setLibraryList, onSubmit, loading } = useSearchLibrary();
  const { regionState, setRegionState, handleSelectRegion } = useSelectRegion();

  const onModalClose = () => {
    setLibraryList(null);
    setRegionState({
      region: null,
      dtlRegion: null,
    });
  };

  const { openModal, handleModalOpen, handleModalClose } =
    useModal(onModalClose);

  const handleSubmit = () => {
    onSubmit(isbn, regionState);
  };

  const handleGoBack = () => {
    setLibraryList(null);
  };

  return (
    <>
      <button onClick={handleModalOpen} className={styles.findLibraryBtn}>
        소장 도서관
      </button>
      {openModal && (
        <Modal onClose={handleModalClose}>
          {libraryList ? (
            <LibraryList
              libraryList={libraryList}
              handleGoBack={handleGoBack}
            />
          ) : (
            <section className={styles.container}>
              <p>지역을 선택해주세요.</p>
              <SelectRegion
                regionState={regionState}
                handleSelectRegion={handleSelectRegion}
              />
              <button
                className={styles.searchBtn}
                disabled={!regionState.region}
                onClick={handleSubmit}
              >
                검색
              </button>
            </section>
          )}
        </Modal>
      )}
    </>
  );
}
