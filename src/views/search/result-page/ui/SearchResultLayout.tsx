import { Suspense } from "react";
import SearchResultLoading from "./SearchResultLoading";

export default function SearchResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<SearchResultLoading />}>{children}</Suspense>;
}
