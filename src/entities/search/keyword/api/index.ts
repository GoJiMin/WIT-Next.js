import { aladinClient } from "@/shared/api/axios-client";

export async function searchToKeyword(Query: string) {
  return aladinClient
    .get("/ItemSearch.aspx", {
      params: {
        Query,
        QueryType: "Keyword",
        MaxResults: 15,
        start: 1,
      },
    })
    .then((res) => {
      const { data } = res;

      if (data.errorCode) {
        return Promise.reject(
          new Error(data.errorMessage || "올바르지 않은 응답 형식입니다.")
        );
      }

      return res;
    })
    .catch((error) => {
      console.error("알라딘 API 요청 중 오류 발생:", error);
      throw error;
    });
}
