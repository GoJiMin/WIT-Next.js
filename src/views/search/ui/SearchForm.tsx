"use client";

import styles from "../styles.module.css";
import { SearchIcon } from "@/shared/ui/icons";
import TagList from "./TagList";
import DetailList from "./DetailList";
import { useSearchState } from "../model/store";
import { useSearchForm } from "../lib/hooks/useSearchForm";

export default function SearchForm() {
  const { searchByInput, category, tag } = useSearchState();

  const { handleChangeSearchType, handleInputChange, handleSubmit, inputRef } =
    useSearchForm();

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <header className={styles.header}>
        <section className={styles.searchBox}>
          <input
            ref={inputRef}
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
        {searchByInput || <TagList />}
      </header>
      <section className={styles.detailContainer}>
        {!searchByInput && tag && <DetailList />}
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
