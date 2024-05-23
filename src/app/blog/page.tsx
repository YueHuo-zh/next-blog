import styles from "./blog.module.css"
import BlogCard from "@/compoments/BlogPage/BlogCard/BlogCard";
import ProfileCard from "@/compoments/BlogPage/ProfileCard/ProfileCard";

export default function BlogPage() {
    return (
        <main className={styles['main']}>
            <div className={styles['profile']}>
                <ProfileCard avatar="https://q1.qlogo.cn/g?b=qq&nk=2637476783&s=640" name="月火💤" description="心里无法发出的声音就在这里喊出来吧." />
            </div>
            <div className={styles['blog-box']}>
                <h1 className={styles['blog-data']}>2024/05/23</h1>
                <p>{ 'Ciallo～(∠・ω< )⌒☆' }</p>
                <div className={styles['line']}></div>
                <div className={styles['blog-list']}>
                    <div className={styles['blog-list-item']}>
                        <BlogCard>
                            <>
                                <p>t1t2</p>
                                <p>s1s2</p>
                                <p>q1q2</p>
                            </>
                        </BlogCard>
                    </div>
                    <div className={styles['blog-list-item']}>
                        <BlogCard></BlogCard>
                    </div>
                    <div className={styles['blog-list-item']}>
                        <BlogCard></BlogCard>
                    </div>
                    <div className={styles['blog-list-item']}>
                        <BlogCard></BlogCard>
                    </div>
                    <div className={styles['blog-list-item']}>
                        <BlogCard></BlogCard>
                    </div>
                    <div className={styles['blog-list-item']}>
                        <BlogCard></BlogCard>
                    </div>
                </div>
            </div>
        </main>
    );
}