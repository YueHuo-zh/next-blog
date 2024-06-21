import React from 'react';
import styles from './about-me.module.css';

export default function AboutMePage() {
  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <h1 className={styles.title}>关于我</h1>
        <p className={styles.paragraph}>大家好！我是[月火]，一名专注于前端开发的软件工程师。自从我第一次接触编程以来，我就对解决复杂问题和创造美丽、用户友好的网站充满热情。在我的职业生涯中，我有幸与一些非常才华横溢的团队一起工作，学习和成长。</p>
      </section>

      <section className={styles.skills}>
        <h2 className={styles.subtitle}>我的技能</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>熟练掌握 HTML/CSS/JavaScript</li>
          <li className={styles.listItem}>深入理解 React 框架及其生态系统</li>
          <li className={styles.listItem}>熟悉 Node.js 和 Express，能够开发简单的后端服务</li>
          <li className={styles.listItem}>了解基本的数据库操作，熟悉 MongoDB 和 MySQL</li>
          <li className={styles.listItem}>熟练使用版本控制工具 Git/GitHub</li>
          <li className={styles.listItem}>基本了解云服务（如 AWS、Firebase）的使用</li>
        </ul>
      </section>

      <section className={styles.achievements}>
        <h2 className={styles.subtitle}>我的成就</h2>
        <p className={styles.paragraph}>在过去的几年中，我参与了多个项目，其中包括：</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>为一家知名公司开发的电子商务平台，实现了月访问量百万级的稳定运行。</li>
          <li className={styles.listItem}>与团队合作开发的移动应用，获得了优秀应用奖项。</li>
          <li className={styles.listItem}>为非营利组织自愿开发的网站，帮助他们提高了在线捐赠的数量。</li>
        </ul>
      </section>

      <section className={styles.interests}>
        <h2 className={styles.subtitle}>我的兴趣</h2>
        <p className={styles.paragraph}>除了编程，我还有许多其他兴趣爱好，包括：</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>旅行 — 探索新的地方和文化总能给我带来新的灵感。</li>
          <li className={styles.listItem}>摄影 — 我喜欢记录生活中的美好瞬间。</li>
          <li className={styles.listItem}>阅读 — 尤其是历史和科技方面的书籍。</li>
        </ul>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.subtitle}>联系我</h2>
        <p className={styles.paragraph}>如果你对我的背景或项目有兴趣，或者只是想聊聊，请随时通过以下方式联系我：</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>邮箱：[你的邮箱地址]</li>
          <li className={styles.listItem}>LinkedIn：[你的LinkedIn链接]</li>
          <li className={styles.listItem}>GitHub：[你的GitHub链接]</li>
        </ul>
      </section>
    </div>
  );
}