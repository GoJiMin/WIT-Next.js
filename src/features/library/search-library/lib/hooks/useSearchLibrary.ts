import { useState } from "react";
import { RegionState } from "@/features/library/search-library/select-region";
import { fetchLibraryList, LibrarySearchResult } from "@/entities/libraries";
import { useToast } from "@/shared/lib/hooks";

export function useSearchLibrary() {
  const [libraryList, setLibraryList] = useState<LibrarySearchResult | null>(
    null
  );

  const { toastError } = useToast();

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
      .then(setLibraryList)
      .catch((error) => toastError(error.message));
  };

  return { libraryList, setLibraryList, onSubmit };
}
