import Card from "@/compoments/Card/Card";
import styles from "./blogcard.module.css"

interface BlogCardProps {
    children ?: React.ReactNode
}

const BlogCard : React.FC<BlogCardProps> = ({ ...props }) => {
    return (
        <Card title="标题A" border className={ styles['blog-card'] }>
            内容不详细写
            <div>{ props.children }</div>
        </Card>
    );
}

export default BlogCard;