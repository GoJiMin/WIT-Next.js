export type LibrarySearchParams = {
  isbn: string;
  region: string;
  dtl_region?: string | null;
};

export type Library = {
  lib: {
    address: string;
    closed: string;
    homepage: string;
    libCode: string;
    libName: string;
    latitude: string;
    longitude: string;
    tel: string;
  };
};

export interface LibrarySearchResult {
  libs: Library[];
  resultNum: number;
}

export type SimpleLibrary = Library["lib"];
