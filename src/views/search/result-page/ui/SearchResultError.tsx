"use client";

import { useRouter } from "next/navigation";

type Props = {
  error: Error;
};

export default function SearchResultError({ error }: Props) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <section>
      <h2>검색에 문제가 발생했어요!</h2>
      <p>{error.message}</p>
      <p>아래 버튼을 클릭해 검색 페이지로 이동할 수 있어요.</p>
      <button onClick={handleGoBack}>다시 검색하기</button>
    </section>
  );
}
