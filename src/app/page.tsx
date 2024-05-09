'use client'

import NButton from "@/compoments/NButton/NButton";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
  const pathname = usePathname();
  const hello = useRef(null);
  useEffect(() => {
    const typed = new Typed(hello.current, {
      strings: [
        "vivo mian[] {",
        "printf(hello world)；",
        "return 0；",
        "}",
      ],
      typeSpeed: 100,
      backSpeed: 150,
      smartBackspace: false,
      backDelay: 50,
      loop: true,
      cursorChar: '|',
    });
    return () => {
      typed.destroy();
    }
  });

  return (
    <main className={styles.main}>
      <div className={ styles['text-box'] }>
        <div className={ `${styles.hello} ${styles['text-box-item']}` }>
          <span ref={ hello }></span>
        </div>
        <div className={ `${styles.name} ${styles['text-box-item']}` }>
          <span>Hello, 这里是<span className={ styles['color-517FE8'] }>月火</span></span>
        </div>
        <div className={ `${styles.question} ${styles['text-box-item']}` }>
          <span>我是<span className={ styles['color-517FE8'] }>软件工程师</span>吗?</span>
        </div>
        <div className={ `${styles.answer} ${styles['text-box-item']}` }>
          <span className={ styles['color-c0c0c0'] }>我觉得我是↗</span>
        </div>
        <div className={ `${styles.hobby} ${styles['text-box-item']}` }>
          <span>喜欢 <span className={ styles['color-57C3DC'] }>React</span>、<span className={ styles['color-3177C5'] }>TypeScript</span>、<span className={ styles['color-C85008'] }>Rust</span> ...</span>
        </div>
        <div className={ `${styles.maxim} ${styles['text-box-item']}` }>
          <span className={ styles['color-c0c0c0'] }>吃饱睡足才有精力好好吃饭睡觉🥰🥰🥰</span>
        </div>
      </div>
      <div className={ styles['icon-box'] }>
        <NButton>GitHub</NButton>
      </div>
    </main>
  );
}
