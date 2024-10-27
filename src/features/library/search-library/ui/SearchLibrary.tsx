import styles from "../styles.module.css";
import { SelectRegion } from "../select-region";
import { LibraryList } from "@/features/library/display-library-list";
import { useSearchLibrary } from "../lib/hooks/useSearchLibrary";
import { useSelectRegion } from "../lib/hooks/useSelectRegion";
import { Modal } from "@/shared/ui/modal";
import { useModal } from "@/shared/lib/hooks";

type Props = {
  isbn: string;
};

export default function SearchLibrary({ isbn }: Props) {
  const { libraryList, setLibraryList, onSubmit } = useSearchLibrary();
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

  return (
    <>
      <button onClick={handleModalOpen} className={styles.findLibraryBtn}>
        소장 도서관
      </button>
      {openModal && (
        <Modal onClose={handleModalClose}>
          {libraryList ? (
            <LibraryList libraryList={libraryList} />
          ) : (
            <section className={styles.selectContainer}>
              <SelectRegion
                regionState={regionState}
                handleSelectRegion={handleSelectRegion}
              />
              <button disabled={!regionState.region} onClick={handleSubmit}>
                검색하기
              </button>
            </section>
          )}
        </Modal>
      )}
    </>
  );
}
