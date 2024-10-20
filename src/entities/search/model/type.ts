import { Book } from "@/entities/book";

export interface SearchResultByTag {
  kind: "tag";
  searchCategoryName: string;
  item: Book[];
}

export interface SearchResultByKeyword {
  kind: "keyword";
  query: string;
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
  item: Book[];
}
