import { fetchBookList } from "../api";
import { useQuery } from "react-query";
import { SearchResultByKeyword, SearchResultByTag } from "./type";

type Props = {
  type: string;
  query: string;
};

export function useSearchResult({ type, query }: Props) {
  const { data } = useQuery<SearchResultByKeyword | SearchResultByTag>(
    ["bookList", query],
    () => fetchBookList(type, query),
    {
      suspense: true,
    }
  );

  return { data };
}
