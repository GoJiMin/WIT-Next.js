import { aladinClient } from "@/shared/api/axios-client";

const randomDate = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentWeek = Math.ceil(currentDate.getDate() / 7);

  const year = currentYear - Math.floor(Math.random() * 6);

  const month =
    year === currentYear
      ? Math.floor(Math.random() * currentMonth) + 1
      : Math.floor(Math.random() * 12) + 1;

  const week =
    year === currentYear && month === currentMonth
      ? Math.floor(Math.random() * currentWeek) + 1
      : Math.floor(Math.random() * 4) + 1;

  return [year, month, week];
};
export async function searchToTag(CategoryId: string) {
  const [year, month, week] = randomDate();

  return aladinClient
    .get("/ItemList.aspx", {
      params: {
        QueryType: "Bestseller",

        MaxResults: 15,
        year,
        month,
        week,
        CategoryId,
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
