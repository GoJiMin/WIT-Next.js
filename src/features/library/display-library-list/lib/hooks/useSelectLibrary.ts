import { Library, SimpleLibrary } from "@/entities/libraries";
import { useMemo, useState } from "react";

export function useSelectLibrary({ libs }: { libs: Library[] }) {
  const [selectedLibrary, setSelectedLibrary] = useState<SimpleLibrary>(
    libs[0].lib
  );

  const libraryMap = useMemo(() => {
    return new Map(libs.map(({ lib }) => [lib.libCode, lib]));
  }, [libs]);

  const onSelectLibCode = (libCode: string) => {
    const library = libraryMap.get(libCode)!;

    setSelectedLibrary(library);
  };

  return { selectedLibrary, onSelectLibCode };
}
