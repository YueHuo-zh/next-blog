import { useEffect, useRef } from "react";
import styles from "./textbox.module.css"
import Typed from "typed.js";

interface TextBoxProps {

}

const TextBox: React.FC<TextBoxProps> = ({ }) => {

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
            loop: false,
            cursorChar: '|',
        });
        return () => {
            typed.destroy();
        }
    });

    return (
        <div className={styles['text-box']}>
            <div className={`${styles.hello} ${styles['text-box-item']}`}>
                <span ref={hello}></span>
            </div>
            <div className={`${styles.name} ${styles['text-box-item']}`}>
                <span>{ 'Ciallo～(∠・ω< )⌒☆' }, 这里是<span className={styles['color-517FE8']}>月火</span>的避难所</span>
            </div>
            <div className={`${styles.question} ${styles['text-box-item']}`}>
                每天都在想着如何<span className={styles['color-517FE8']}>跑路</span>😎。
            </div>
            <div className={`${styles.hobby} ${styles['text-box-item']}`}>
                <span>喜欢 <span className={styles['color-57C3DC']}>React</span>、<span className={styles['color-3177C5']}>TypeScript</span>、<span className={styles['color-C85008']}>Rust</span> ...</span>
            </div>
            <div className={`${styles.maxim} ${styles['text-box-item']}`}>
                <span>{ '🖕🏼🥰 Hello World.' }</span>
            </div>
        </div>
    );
}

export default TextBox;