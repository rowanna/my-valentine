import { NextRequest, NextResponse } from "next/server";

const urlArr = [
  "/selectType",
  "/selectShape",
  "/selectTexture",
  "/selectTopping",
  "/selectWrap",
  "/result",
];

export function middleware(req) {
  const url = req.nextUrl;

  // 사용자가 '/blocked' 경로로 직접 접근하려고 하면 '/'로 리다이렉트
  if (!req.headers.get("referer") && urlArr.includes(url.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next(); // 그대로 진행
}

// middleware가 적용될 경로 설정
export const config = {
  matcher: urlArr, // 특정 경로만 감시 (와일드카드 가능: '/blocked/:path*')
};
