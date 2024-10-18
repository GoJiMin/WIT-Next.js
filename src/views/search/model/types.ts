export type Category = {
  categoryId: number | null;
  text: string;
};

export type Tag = {
  id: number;
  tagName: string;
};

export interface SearchState {
  searchByInput: boolean;
  tag: number | null;
  category: Category;
  actions: {
    setSearchByInput: (value: boolean) => void;
    setTag: (id: number | null) => void;
    setCategory: (value: Category) => void;
    resetSearchState: () => void;
  };
}
