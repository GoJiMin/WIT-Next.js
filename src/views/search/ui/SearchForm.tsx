"use client";

import { useState } from "react";
import TagList from "./TagList";

type Category = {
  categoryId: number | null;
  tagName: string;
};

export default function SearchForm() {
  const [category, setCategory] = useState<Category>({
    categoryId: null,
    tagName: "",
  });

  const handleSetCategory = (id: number, tagName: string) => {
    setCategory({
      categoryId: id,
      tagName,
    });
  };

  return (
    <form>
      <input type="text" value={category.tagName} onChange={() => {}} />
      <TagList setCategory={handleSetCategory} />
    </form>
  );
}
