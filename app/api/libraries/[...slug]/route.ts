import { NextRequest, NextResponse } from "next/server";
import { GetLibraries } from "@/entities/libraries";

type Context = {
  params: {
    slug: string[];
  };
};

export async function GET(_: NextRequest, { params }: Context) {
  const [isbn, region, dtl_region] = params.slug;

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

  return GetLibraries({ isbn, region, dtl_region: dtl_region || null })
    .then((res) => NextResponse.json(res.response))
    .catch((error) => {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    });
}
