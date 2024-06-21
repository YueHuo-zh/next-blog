import styles from "./navigation.module.css";
import Navlinks from "./NavigationLink/Navlinks";
import initLinks from "./links.json";
import Link from "next/link";
import { useEffect, useState } from "react";


interface NavigationProps { }

const Navigation: React.FC<NavigationProps> = () => {

  const [links, setLinks] = useState(initLinks);

  const [logined, setLogined] = useState(false);

  useEffect(() => {
    const newLinks = links.map((link) => {
      if (link.key === 'sign-in') {
        link.enabled = !logined
      }
      return link
    })
  }, [links, logined])

  return (
    <div className={styles['navigation']}>
      <div className={styles['navigation-content']}>
        <div className={styles['navigation-logo']}>
          <Link href="/">
            <h2 className={styles['logo-text']}>31号避难所</h2>
          </Link>
        </div>
        <Navlinks links={links} />
      </div>
    </div>
  );
}

export default Navigation;