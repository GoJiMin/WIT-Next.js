import { searchToKeyword } from "@/entities/search/keyword/api";
import { searchToTag } from "@/entities/search/tag/api";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const { type, query } = data;

  if (type === "keyword") {
    return searchToKeyword(query)
      .then((res) => NextResponse.json(res.data))
      .catch(
        (error) =>
          new Response(JSON.stringify({ error: error.message }), {
            status: 500,
          })
      );
  }

  if (type === "tag") {
    return searchToTag(query)
      .then((res) => NextResponse.json(res.data))
      .catch(
        (error) =>
          new Response(JSON.stringify({ error: error.message }), {
            status: 500,
          })
      );
  }

  return new Response(
    JSON.stringify({ error: "존재하지 않는 검색 타입입니다." }),
    { status: 500 }
  );
}
