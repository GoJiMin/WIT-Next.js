import { useState } from "react";
import { RegionState } from "@/features/library/search-library/select-region";
import { fetchLibraryList, LibrarySearchResult } from "@/entities/libraries";
import { useToast } from "@/shared/lib/hooks";

export function useSearchLibrary() {
  const [libraryList, setLibraryList] = useState<LibrarySearchResult | null>(
    null
  );

  const { toastError, toastInfo } = useToast();

  const onSubmit = async (isbn: string, { region, dtlRegion }: RegionState) => {
    if (!region) {
      toastError("지역을 선택해주세요.");

      return;
    }

    fetchLibraryList({
      isbn,
      region: region!.value,
      dtl_region: dtlRegion?.value,
    })
      .then((res: LibrarySearchResult) => {
        if (Number(res.resultNum)) {
          setLibraryList(res);
          return;
        }

        toastInfo("해당 지역엔 소장 중인 도서관이 없어요.");
        return;
      })
      .catch((error) => toastError(error.message));
  };

  return { libraryList, setLibraryList, onSubmit };
}
