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

  const IconArray:Array<Icon> = [
    {
      icon: <Github key={0} size={ 25 } />,
      onClick: () => {
        window.open('https://github.com');
      }
    },
    {
      icon: <Tv key={1} size={ 25 } />,
      onClick: () => {
        window.open('https://youtube.com');
      }
    },
    {
      icon: <Mail key={2} size={ 25 } />,
      onClick: () => {
        window.open('https://youtube.com');
      }
    },
  ]

  return (
    <main className={styles.main}>
      <TextBox />
      <IconBox icons={IconArray} />
      <AnimationBox />
    </main>
  );
}
