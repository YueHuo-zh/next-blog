import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "31号避难所",
  description: "记录一下逃难生活",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        { children }
      </body>
    </html>
  );
}