import { readFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const { type } = data;

  if (type === "keyword" || type === "tag") {
    const filepath = path.join(process.cwd(), "data/mock", `${type}.json`);

    const data = readFileSync(filepath, "utf-8");

    return NextResponse.json(JSON.parse(data));
  }

  return new Response(
    JSON.stringify({ error: "존재하지 않는 검색 타입입니다." }),
    { status: 500 }
  );
}
