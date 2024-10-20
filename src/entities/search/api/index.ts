import axios from "axios";

export async function fetchBookList(type: string, query: string) {
  return axios
    .post("/api/mock/search", { type, query })
    .then((res) => res.data)
    .catch((error) => {
      const { data } = error.response;

      throw new Error(data.error || "API 요청 중 오류가 발생했습니다.");
    });
}
