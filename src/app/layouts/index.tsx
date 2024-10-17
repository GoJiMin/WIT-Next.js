import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "What Should I Read! 오늘 뭐 읽지?",
    template: "What Should I Read! 오늘 뭐 읽지? | %s",
  },
  description: "도서를 추천 받아 가까운 도서관을 검색해보세요!",
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.className}>
      <body>{children}</body>
    </html>
  );
}
