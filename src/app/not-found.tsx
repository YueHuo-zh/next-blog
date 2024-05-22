
export default function NotFound() {

    const style : React.CSSProperties = {
        width: "100%",
        height: "100%",
        display : "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    }

    const h2Style : React.CSSProperties = {
        fontSize: "3rem", // 大号字体
        fontWeight: "bold",
        marginBottom: "1.5rem", // 与下方文字的间距
        animation: "fadeIn 2s ease-in-out" // 文本动画
    }
    
    const pStyle : React.CSSProperties = {
        fontSize: "1.5rem", // 中号字体
        animation: "fadeIn 2s ease-in-out" // 淡入动画
    }


    return (
        <div style={ style }>
            <h2 style={ h2Style }>404</h2>
            <p style={ pStyle }>Not Found</p>
            <style>{
                `
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                `
            }
            </style>
        </div>
    );
}