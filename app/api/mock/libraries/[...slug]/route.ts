import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { readFileSync } from "fs";

type Context = {
  params: {
    slug: string[];
  };
};

export async function GET(_: NextRequest, { params }: Context) {
  const [isbn, region] = params.slug;

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

  const filepath = path.join(process.cwd(), "data/mock", "libraries.json");

  const data = readFileSync(filepath, "utf-8");

  return NextResponse.json(JSON.parse(data));
}
