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
        "好想睡觉啊！！",
        "今天一定要早点睡T_T",
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
          <span>我是<span className={ styles['color-517FE8'] }> 全沾工程师 </span>😭。</span>
        </div>
        <div className={ `${styles.hobby} ${styles['text-box-item']}` }>
          <span>喜欢 <span className={ styles['color-57C3DC'] }>React</span>、<span className={ styles['color-3177C5'] }>TypeScript</span>、<span className={ styles['color-C85008'] }>Rust</span> ...</span>
        </div>
        <div className={ `${styles.maxim} ${styles['text-box-item']}` }>
          <span>喜欢吃嘉心糖😋</span>
        </div>
      </div>
      <div className={ styles['icon-box'] }>
        <NButton>GitHub</NButton>
      </div>
    </main>
  );
}
