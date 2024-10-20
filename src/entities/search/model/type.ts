type Book = {
  title: string;
  author: string;
  description: string;
  cover: string;
  isbn13: string;
  priceStandard: number;
};

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
