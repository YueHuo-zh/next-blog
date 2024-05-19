import NButton from "@/compoments/Button/NButton/NButton";
import styles from "./iconbox.module.css"

interface IconBoxProps {
    icons: Array<React.ReactNode>
    size ?: number | string
    onClick ?: () => void | Function
}

const IconBox: React.FC<IconBoxProps> = ({ size = "40px", ...props }) => {
    const icon = props.icons.map((item, index) => {
        if (size !== null && size !== undefined) {
            console.log(typeof size);
            if (typeof size === 'number') {
                size = size + 'px';
            }
        }
        return (
            <div className={styles['icon-box-item']} key={ index }>
                <NButton border={true} text={true} width={ size } height={ size } onClick={ props.onClick } >
                    { item }
                </NButton>
            </div>
        );
    })

    return (
        <div className={styles['icon-box']}>
            { icon }
        </div>
    );
}

export default IconBox