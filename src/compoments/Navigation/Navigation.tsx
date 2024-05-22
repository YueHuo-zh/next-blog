import styles from "./navigation.module.css"
import NButton from "../Button/NButton/NButton";
import Link from "next/link";
import Image from "next/image";

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
                <NButton text={true}>
                    <Link href={item.path}>{item.label}</Link>
                </NButton>
            </li>
        );
    });

    return (
        <div className={ styles.nav }>
            <div className={ styles['nav-bar'] }>
                <div className={ styles.logo } >
                    <Image className={styles['logo-img']} src={"https://vip.helloimg.com/i/2024/05/18/66485adccd6ca.png"} alt="Logo" width={40} height={40} />
                    <span className={ styles['logo-text'] }>
                        <Link href={'/'}>31号避难所</Link>
                    </span>
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