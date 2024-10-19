import { FormEvent, useEffect, useRef } from "react";
import { useSearchState, useSearchStateActions } from "../../model/store";
import { useToast } from "@/shared/lib/hooks";
import { useRouter } from "next/navigation";

export function useSearchForm() {
  const { searchByInput, category } = useSearchState();
  const { setSearchByInput, resetSearchState, setCategory } =
    useSearchStateActions();
  const { toastError } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const validateCategoryText = (text: string): boolean => {
    const specialCharPattern = /^[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s]/;

    if (specialCharPattern.test(text)) {
      toastError("첫 글자에 특수문자를 사용할 수 없습니다.");
      return false;
    }
    if (text.length < 2) {
      toastError("검색어는 최소 2자 이상이어야 합니다.");
      return false;
    }
    return true;
  };

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
      if (validateCategoryText(category.text)) {
        router.push(`/search/keyword/${encodeURIComponent(category.text)}`);
        return;
      }
    }

    if (!searchByInput) {
      if (category.categoryId) {
        router.push(`/search/tag/${category.categoryId}`);
        return;
      }

      toastError("태그를 선택해주세요.");
    }
  };

  useEffect(() => {
    if (searchByInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchByInput]);

  return { handleChangeSearchType, handleInputChange, handleSubmit, inputRef };
}
