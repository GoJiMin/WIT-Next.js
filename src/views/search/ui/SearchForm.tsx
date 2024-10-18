"use client";

import { FormEvent, useState, useRef, useEffect } from "react";
import { Category } from "../model/category";
import styles from "../styles.module.css";
import { SearchIcon } from "@/shared/ui/icons";
import TagList from "./TagList";
import DetailList from "./DetailList";

export default function SearchForm() {
  const [category, setCategory] = useState<Category>({
    categoryId: null,
    text: "",
  });

  const [searchByInput, setSearchByInput] = useState(false);

  // Ref to access input element
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSetCategory = ({ categoryId, text }: Category) => {
    setCategory({
      categoryId,
      text,
    });
  };

  const handleChangeSearchType = () => {
    setSearchByInput((prev) => !prev);
    setTag(null);
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
    }

    if (!searchByInput) {
      if (category.categoryId) {
        console.log(category.categoryId);
        return;
      }

      console.log("태그를 선택해주세요.");
    }
  };

  const [tag, setTag] = useState<number | null>(null);

  const handleSetTag = (id: number) => {
    setTag(id);
    setCategory({ categoryId: null, text: "" });
  };

  // Focus input when searchByInput is true
  useEffect(() => {
    if (searchByInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchByInput]);

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <header className={styles.header}>
        <section className={styles.searchBox}>
          <input
            ref={inputRef} // Attach the ref to the input element
            className={styles.input}
            type="text"
            value={category.text}
            disabled={!searchByInput}
            onChange={handleInputChange}
          />
          <button className={styles.button}>
            <SearchIcon />
          </button>
        </section>
        {searchByInput || <TagList tag={tag} setCategory={handleSetTag} />}
      </header>
      <section className={styles.detailContainer}>
        {!searchByInput && tag && (
          <DetailList
            tag={tag}
            selectedId={category.categoryId}
            setCategory={handleSetCategory}
          />
        )}
        {searchByInput && (
          <p className={styles.searchGuide}>
            제목 또는 저자를 입력해 검색할 수 있어요!
          </p>
        )}
      </section>
      <div className={styles.toggleContainer}>
        <label className={styles.toggle}>
          <input
            id="toggleButton"
            type="checkbox"
            className={styles.toggleInput}
            checked={searchByInput}
            onChange={handleChangeSearchType}
          />
          <span className={styles.toggleSlider}></span>
        </label>
      </div>
    </form>
  );
}
