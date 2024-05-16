import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/compoments/Navigation/Navigation";
import Footer from "@/compoments/Footer/Footer";

export const metadata: Metadata = {
  title: "月火的避难所",
  description: "记录生活的片段",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation></Navigation>
        <main className="container">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}