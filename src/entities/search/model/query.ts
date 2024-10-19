import { useToast } from "@/shared/lib/hooks";
import { fetchBookList } from "../api";
import { useQuery } from "react-query";

type Props = {
  type: string;
  query: string;
};

export function useSearchResult({ type, query }: Props) {
  const { toastError } = useToast();

  const { data, isLoading, isError, error } = useQuery(
    ["bookList", query],
    () => fetchBookList(type, query)
  );

  if (isError) {
    toastError((error as Error).message);
  }

  return { data, isLoading, isError };
}
