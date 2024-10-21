import { NextRequest, NextResponse } from "next/server";
import { GetLibraries, LibrarySearchParams } from "@/entities/libraries";

type Context = {
  params: LibrarySearchParams;
};

export async function GET(_: NextRequest, context: Context) {
  const { isbn, region, dtl_region } = context.params;

  if (!isbn) {
    return new Response(
      JSON.stringify({ error: "도서 정보가 존재하지 않습니다." }),
      { status: 500 }
    );
  }

  if (!region) {
    return new Response(
      JSON.stringify({ error: "지역 정보가 존재하지 않습니다." }),
      { status: 500 }
    );
  }

  return GetLibraries({ isbn, region, dtl_region })
    .then((res) => NextResponse.json(res))
    .catch(
      (error) =>
        new Response(JSON.stringify({ error: error.message }), { status: 500 })
    );
}
