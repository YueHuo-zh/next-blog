import styles from './site-layout.module.css'
import Navigation from "@/compoments/Navigation/Navigation";
import Footer from "@/compoments/Footer/Footer";

const SiteLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <main className={styles['site-layout']}>
        <Navigation />
        {children}
      </main>
      <Footer />
    </>
  );
}
export default SiteLayout