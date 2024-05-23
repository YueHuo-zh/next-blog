import React from "react"
import styles from "./card.module.css"
import NButton from "../Button/NButton/NButton"
import { CloseSmall } from "@icon-park/react"

interface CardProps {
    width?: string | number,
    height?: string | number,
    border?: boolean,
    backgroundColor?: string,
    className?: string | Array<string>,
    title?: string,
    children?: React.ReactNode | undefined,
}

const Card: React.FC<CardProps> = ({
    width,
    height,
    border = false,
    backgroundColor = "RGBA(0,0,0,0)",
    className,
    title,
    children,
}) => {

    const cardStyle: React.CSSProperties = {
        width: width,
        height: height,
        border: border ? '1px solid #444444' : 'none',
        backgroundColor: backgroundColor,
    }

    const classes = [
        styles['card'],
        ...Array.isArray(className) ? className : [className]
    ].join(' ');

    const header = () => {
        return (
            <div className={styles['card-header']}>
                <div className="card-title">
                    <h2>{title}</h2>
                </div>
            </div>
        );
    }

    return (
        <div className={classes} style={cardStyle}>
            {title !== null && title !== undefined ? header() : <div></div>}
            <div className={styles['card-body']}>
                {children}
            </div>
        </div>
    );
}

export default Card;