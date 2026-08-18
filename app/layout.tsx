import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minutes Lab · 회의 전사문 요약",
  description: "DOCX 회의 전사문을 실무 회의록으로 정리하는 브라우저 도구",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
