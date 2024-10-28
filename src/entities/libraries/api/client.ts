import axios from "axios";
import { LibrarySearchParams } from "../model/type";

export async function fetchLibraryList({
  isbn,
  region,
  dtl_region,
}: LibrarySearchParams) {
  const url = `/api/libraries/${isbn}/${region}/${dtl_region || ""}`;

  return axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      const { data } = error.response;

      throw new Error(data.error || "API 요청 중 오류가 발생했습니다.");
    });
}
