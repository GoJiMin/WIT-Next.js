import { fetchBookList } from "../api";
import { useQuery } from "react-query";

type Props = {
  type: string;
  query: string;
};

export function useSearchResult({ type, query }: Props) {
  const { data } = useQuery(
    ["bookList", query],
    () => fetchBookList(type, query),
    {
      suspense: true,
    }
  );

  return { data };
}
