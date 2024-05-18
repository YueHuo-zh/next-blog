import Link from 'next/link';
import styles from './footer.module.css'

export default function Footer() {
    const links = [
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
    ];

    const linkList = links.map((item) => {
        return (
            <li key={item.name} className={ styles['link-item'] }>
                <Link className={ styles.link } href={item.path}>{item.label}</Link>
            </li>
        );
    });
    return (
        <div className={styles.footer}>
            <ul className={styles['link-list']}>
                {linkList}
            </ul>
        </div >
    );
}