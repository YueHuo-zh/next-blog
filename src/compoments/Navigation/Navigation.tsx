import styles from "./navigation.module.css"

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
    ]
    return (
        <div className={ styles.nav }>
            <div className={ styles['nav-bar'] }>
                <div className={ styles.logo } >
                    <img className={styles['logo-img']} />
                    <span className={ styles['logo-text'] }>月火</span>
                </div>
                <div className={ styles['nav-link'] }></div>
                <div className={ styles['nav-login'] } ></div>
            </div>
        </div>
    );
}