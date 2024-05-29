'use client'

import TextBox from "@/compoments/HomePage/TextBox/TextBox";
import AnimationBox from "@/compoments/AnimationBox/AnimationBox"
import styles from "./page.module.css";
import { Github, Tv, Mail } from "@icon-park/react";
import IconBox from "@/compoments/HomePage/IconBox/IconBox";

type Icon = {
  icon: React.ReactNode;
  onClick: () => void;
};

export default function Home() {

  const IconArray: Array<Icon> = [
    {
      icon: <Github key={0} size={25} />,
      onClick: () => {
        window.open('https://github.com');
      }
    },
    {
      icon: <Tv key={1} size={25} />,
      onClick: () => {
        window.open('https://space.bilibili.com/47583781');
      }
    },
    {
      icon: <Mail key={2} size={25} />,
      onClick: () => {
        let copy = navigator.clipboard.writeText("yuehuo@foxmail.com");
        copy.then(() => {
          alert("复制成功")
        })
        copy.catch((err) => {
          alert("复制失败")
          console.log(err)
        })
      }
    },
  ];


  return (
    <main className={styles.main}>
      <TextBox />
      <IconBox icons={IconArray} />
      <AnimationBox />
    </main>
  );
}
