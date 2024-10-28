import { data4LibraryClient } from "@/shared/api/axios-client";
import { LibrarySearchParams } from "../model/type";

export async function GetLibraries({
  isbn,
  region,
  dtl_region = null,
}: LibrarySearchParams) {
  return data4LibraryClient
    .get("/libSrchByBook", {
      params: {
        isbn,
        region,
        dtl_region,
      },
    })
    .then((res) => {
      const { response } = res.data;

      if (response.error) {
        return Promise.reject(
          new Error(response.error || "올바르지 않은 응답 형식입니다.")
        );
      }

      return res.data;
    })
    .catch((error) => {
      console.error("도서 검색 요청 중 오류 발생:", error);
      throw error;
    });
}
