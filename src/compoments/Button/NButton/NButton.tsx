'use client'

import React, { useState } from "react"
import styles from './nbutton.module.css'

type NButtonProps = {
    children?: React.ReactNode,
    onClick?: () => void,
    width?: string,
    height?: string,
    border?: boolean,
    text? : boolean,
}

const NButton:React.FC<NButtonProps> = ({ children, onClick, width = '100px', height = '40px', border = false, text = false }) => {
    const [normalStyle, setNormalStyle] = useState({
        width: width,
        height: height,
        border: border ? '1px solid #444444' : 'none',
        borderRadius : '7px',
        backgroundColor: 'RGBA(0,0,0,0.1)',
    })

    const [textStyle, setTextStyle] = useState({
        width: width,
        height: height,
        border: border ? '1px solid #444444' : 'none',
        borderRadius : '7px',
        backgroundColor: 'RGBA(0,0,0,0)',
    });

    const style = text ? textStyle : normalStyle;
    return (
        <button style={style} className={ `${text ? `text-button` : `normal-button`} ${styles['n-button']}` } onClick={onClick}>{children}</button>
    );
}

export default NButton;