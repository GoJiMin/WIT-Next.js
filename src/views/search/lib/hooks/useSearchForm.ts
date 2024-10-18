import { FormEvent, useEffect, useRef } from "react";
import { useSearchState, useSearchStateActions } from "../../model/store";

export function useSearchForm() {
  const { searchByInput, category } = useSearchState();
  const { setSearchByInput, resetSearchState, setCategory } =
    useSearchStateActions();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeSearchType = () => {
    setSearchByInput(!searchByInput);
    resetSearchState();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchByInput) {
      setCategory({ categoryId: null, text: e.target.value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (searchByInput) {
      if (category.text) {
        console.log(category.text);
        return;
      }

      console.log("검색어를 입력해주세요.");
    }

    if (!searchByInput) {
      if (category.categoryId) {
        console.log(category.categoryId);
        return;
      }

      console.log("태그를 선택해주세요.");
    }
  };

  useEffect(() => {
    if (searchByInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchByInput]);

  return { handleChangeSearchType, handleInputChange, handleSubmit, inputRef };
}
