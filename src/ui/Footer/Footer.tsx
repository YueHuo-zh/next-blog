import Link from "next/link";
import Button from "../../compoments/Button/Button";
import styles from "./footer.module.css"
import links from "./links.json";

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  const year = new Date().getFullYear(); // 动态获取当前年份

  const Navlink = links?.map((link, index) => {
    return (
      <li key={link.key} >
        <Button size="small" text>
          <Link href={link.path} className={styles['footer-links-item']}>{link.label}</Link>
        </Button>
        {index < links.length - 1 && <span>|</span>}
      </li>
    )
  });

  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <div className={styles['footer-info']}>
          <p>© {year} 月火的避难所. All rights reserved.</p>
          {/* <p className={styles['footer-email']}>Email: <Link href="mailto:yuehuo@foxmail.com" className={styles['footer-email-link']}>yuehuo@foxmail.com</Link></p> */}
          <ul className={styles['footer-links']}>
            {Navlink}
          </ul>
          <div className={styles['social-media']}>
            <Link href="https://x.com/NewPlayer9481" className={styles['social-link']}>Twitter</Link>
            <Link href="https://space.bilibili.com/47583781" className={styles['social-link']}>bilibili</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;