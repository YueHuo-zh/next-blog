import React from "react"

type NButtonProps = {
    children: React.ReactNode,
    onClick: () => void,
    width?: string,
    height?: string,
    border?: boolean,
}

const NButton:React.FC<NButtonProps> = ({ children, onClick, width = '100px', height = '40px', border = false }) => {
    const style = {
        width: width,
        height: height,
        border: border ? '1px solid black' : 'none',
    }
    return (
        <button style={style} onClick={onClick}>{children}</button>
    );
}

export default NButton;