import { create } from "zustand";
import { useShallow } from "zustand/shallow";
import { SearchState } from "./types";

const useSearchStore = create<SearchState>((set) => ({
  searchByInput: false,
  tag: null,
  category: { categoryId: null, text: "" },

  actions: {
    setSearchByInput: (value) => set({ searchByInput: value }),

    setTag: (id) => set({ tag: id }),

    setCategory: ({ categoryId, text }) =>
      set({ category: { categoryId, text } }),

    resetSearchState: () =>
      set({ tag: null, category: { categoryId: null, text: "" } }),
  },
}));

export const useSearchState = () =>
  useSearchStore(
    useShallow(({ searchByInput, tag, category }) => ({
      searchByInput,
      tag,
      category,
    }))
  );

export const useSearchStateActions = () =>
  useSearchStore(
    useShallow(
      ({
        actions: { resetSearchState, setCategory, setSearchByInput, setTag },
      }) => ({
        resetSearchState,
        setCategory,
        setSearchByInput,
        setTag,
      })
    )
  );
