import styles from './about-site.module.css';

export default function AboutSitePage() {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.h1}>关于本站</h1>
        <p className={styles.p}>这个网站是我的个人项目，我在这里分享我的想法、经历以及对新网络技术的实验。</p>
      </header>
      
      <section className={styles.section}>
        <h2 className={styles.h2}>技术栈</h2>
        <p className={styles.p}>本站采用 <strong>React</strong> 构建，由 <strong>Next.js</strong> 助力，并部署在 <strong>Vercel</strong> 上。我选择这套技术栈是因为其性能、可扩展性以及开发体验都很优秀。</p>
      </section>
      
      <section className={`${styles.section} ${styles.technologyUse}`}>
        <h2 className={styles.h2}>开发历程</h2>
        <p className={styles.p}>这个网站最初是作为一个小项目开始的，目的是提升我的编程技能，后来逐步发展成为包含博客、作品集和一些实验性网络应用的平台。</p>
      </section>
      
      <section className={styles.section}>
        <h2 className={styles.h2}>更新记录</h2>
        <ul className={styles.ul}>
          {/* 在这里添加你的更新记录条目 */}
          <li className={styles.li}>版本 1.0 - 网站上线</li>
          <li className={styles.li}>版本 1.1 - 添加博客功能</li>
          <li className={styles.li}>版本 2.0 - 全面改版，启用新设计</li>
        </ul>
      </section>
      
      <section className={styles.section}>
        <h2 className={styles.h2}>访问统计</h2>
        <p className={styles.p}>截至目前，网站已经接收到来自 <strong>[国家数量]</strong> 个不同国家的 <strong>[访问量]</strong> 次访问。</p>
      </section>
      
      <section className={styles.section}>
        <h2 className={styles.h2}>如何贡献</h2>
        <p className={styles.p}>如果你对本站的技术感兴趣，欢迎访问我的 <a href="[GitHub链接]" className={styles.a}>GitHub</a> 页面，了解更多信息并参与贡献。</p>
      </section>
      
      <section className={styles.section}>
        <h2 className={styles.h2}>未来计划</h2>
        <p className={styles.p}>我计划探索 <strong>[新技术或特性]</strong>，并将更多互动元素集成到网站中。</p>
      </section>
      
      <footer className={styles.footer}>
        <h2 className={styles.h2}>联系方式</h2>
        <p className={styles.p}>有反馈或问题？欢迎通过 <a href="mailto:yuehuo@foxmail.com" className={styles.a}>[我的邮箱地址]</a> 联系我。</p>
      </footer>
    </article>
  );
}