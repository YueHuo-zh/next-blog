'use client'

import NButton from "@/compoments/Button/NButton/NButton";
import RecentBlog from "@/compoments/HomePage/RecentBlog/RecentBlog";
import TextBox from "@/compoments/HomePage/TextBox/TextBox";
import styles from "./page.module.css";
import { Github, Tv } from "@icon-park/react";
import IconBox from "@/compoments/HomePage/IconBox/IconBox";

export default function Home() {

  console.log(typeof Github)
  const IconArray:Array<React.ReactNode> = [<Github key={0} size={ 25 } />, <Tv key={1} size={ 25 } />]

  return (
    <main className={styles.main}>
      <TextBox />
      {/* <div className={styles['icon-box']}>
        <div className={styles['icon-box-item']}>
          <NButton border={true} text={true} width="40px" height="40px">
            <Github color="#fff" size={25} />
          </NButton>
        </div>
        <div className={styles['icon-box-item']}>
          <NButton border={true} text={true} width="40px" height="40px">
            <Tv color="#fff" size={25} />
          </NButton>
        </div>
      </div> */}
      <IconBox icons={IconArray} />
      <RecentBlog />
    </main>
  );
}
