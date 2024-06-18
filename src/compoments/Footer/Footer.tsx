import Link from "next/link";
import Button from "../Button/Button";
import styles from "./footer.module.css"
import links from "./links.json";

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {

  const Navlink = links?.map((link, index) => {
    return (
      <li key={link.key} className={styles['footer-links-item']}>
        <Button size="small" text>
          <Link href={link.path}>{link.label}</Link>
        </Button>
      </li>
    )
  })


  return (
    <footer className={styles.footer}>
      <div>
        <p>© 2024 月火的避难所. All rights reserved.</p>
      </div>
      <div>
        <a href="mailto:contact@example.com">contact@example.com</a>
      </div>
      <div className={styles.socialLinks}>
        <a href="https://twitter.com/yourprofile">Twitter</a> |
        <a href="https://facebook.com/yourprofile">Facebook</a>
      </div>
      <div className={styles.navLinks}>
        <a href="/about">关于我们</a> |
        <a href="/services">服务</a> |
        <a href="/blog">博客</a>
      </div>
      <div>
        <a href="/privacy-policy">隐私政策</a> |
        <a href="/terms-and-conditions">条款及条件</a>
      </div>
    </footer>
  );
}

export default Footer;