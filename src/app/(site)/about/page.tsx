import styles from "./about.module.css"

export default function AboutPage() {

    return (
        <main className={styles.main}>
            <article className={styles.article}>
                <section>
                    <h1 className={styles.title}>关于我</h1>
                    <p className={styles.paragraph}>
                        一个人，正好对计算机感兴趣。
                    </p>
                    <p className={styles.paragraph}>
                        <span className={styles.function}>printf</span>(
                        <span className={styles.string}>{'"'}Hello World </span>
                        <span className={styles.emoji}>🖕🏼</span>
                        <span className={styles.string}>{'"'}</span>
                        );
                    </p>
                </section>
            </article>
        </main>
    );
}