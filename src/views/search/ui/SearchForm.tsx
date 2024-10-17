"use client";

import { FormEvent, useState } from "react";
import TagList from "./TagList";
import { Category } from "../model/category";

export default function SearchForm() {
  const [category, setCategory] = useState<Category>({
    categoryId: null,
    text: "",
  });

  const [searchByInput, setSearchByInput] = useState(false);

  const handleSetCategory = ({ categoryId, text }: Category) => {
    setCategory({
      categoryId,
      text,
    });
  };

  const handleChangeSearchType = () => {
    setSearchByInput((prev) => !prev);
    handleSetCategory({
      categoryId: null,
      text: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchByInput) {
      setCategory((prev) => ({ ...prev, text: e.target.value }));
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
    } else {
      if (category.categoryId) {
        console.log(category.categoryId);
        return;
      }

      console.log("태그를 선택해주세요.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={category.text} onChange={handleInputChange} />
      {searchByInput || <TagList setCategory={handleSetCategory} />}
      <div>
        <input
          type="checkbox"
          id="check"
          checked={searchByInput}
          onChange={handleChangeSearchType}
        />
        <label htmlFor="check">키워드 검색</label>
      </div>
      <button>검색</button>
    </form>
  );
}
