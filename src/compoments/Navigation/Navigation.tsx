import styles from "./navigation.module.css"
import NButton from "../NButton/NButton";
import Link from "next/link";

export default function Navigation() {
    const navLinks = [
        {
            path: '/',
            name: 'home',
            label: '首页',
        },
        
        {
            path: '/blog',
            name: 'blog',
            label: 'Blog',
        },
        {
            path: '/about',
            name: 'about',
            label: '关于',
        },
        {
            path: '/sign-in',
            name: 'sign-in',
            label: '登录'
        },
    ];

    const links = navLinks.map((item) => {
        return (
            <li key={item.name}>
                <NButton border={true} text={true}>
                    <Link href={item.path}>{item.label}</Link>
                </NButton>
            </li>
        );
    });

    return (
        <div className={ styles.nav }>
            <div className={ styles['nav-bar'] }>
                <div className={ styles.logo } >
                    <img className={styles['logo-img']} />
                    <span className={ styles['logo-text'] }>月火</span>
                </div>
                <div className={ styles['nav-link'] }>
                    <ul className={ styles['link-list'] }>
                        { links }
                    </ul>
                </div>
                <div className={ styles['nav-login'] } ></div>
            </div>
        </div>
    );
}