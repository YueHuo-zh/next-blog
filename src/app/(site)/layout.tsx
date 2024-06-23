'use client';

import Footer from "@/ui/Footer/Footer";
import Navigation from "@/ui/Navigation/Navigation";
import styles from "./site-layout.module.css"

export default function Layout({
  children,
  signin,
}: Readonly<{
  children: React.ReactNode;
  signin?: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className={styles.main}>
        { children }
        { signin }
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}