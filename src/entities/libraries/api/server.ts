import { data4LibraryClient } from "@/shared/api/axios-client";
import { LibrarySearchParams } from "../model/type";

export async function searchToKeyword({
  isbn,
  region,
  dtl_region,
}: LibrarySearchParams) {
  return data4LibraryClient
    .get("/libSrchByBook", {
      params: {
        isbn,
        region,
        dtl_region,
      },
    })
    .then((res) => res.data);
}
