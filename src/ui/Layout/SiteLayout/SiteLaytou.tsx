'use client';

import styles from "./sitelayout.module.css";
import Navigation from "@/ui/Navigation/Navigation";
import Footer from "@/ui/Footer/Footer";

export default function SiteLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className={styles.main}>
        { children }
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}