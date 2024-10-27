import { useState } from "react";
import {
  RegionOption,
  RegionState,
} from "@/features/library/search-library/select-region";

export function useSelectRegion() {
  const [regionState, setRegionState] = useState<RegionState>({
    region: null,
    dtlRegion: null,
  });

  const handleSelectRegion = (
    key: "region" | "dtlRegion",
    option: RegionOption | null
  ) => {
    setRegionState((prev) => ({
      ...prev,
      [key]: option,
      ...(key === "region" && { dtlRegion: null }),
    }));
  };

  return { regionState, setRegionState, handleSelectRegion };
}
