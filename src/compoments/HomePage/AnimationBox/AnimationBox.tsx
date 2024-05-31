import "./animationbox.css"

const AnimationBox = () => {
    return (
        <div className="animation-box">
            <div className="wrapper">
                <div className="sofa">
                    <div className="sofa-cushion"></div>
                    <div className="sofa-bottom-l"></div>
                    <div className="sofa-bottom-r"></div>
                </div>
                <div className="cat">
                    <div className="cat-arm-shoulder"></div>
                    <div className="cat-head">
                        <div className="cat-ear-l"></div>
                        <div className="cat-ear-r"></div>
                        <div className="cat-eye-l"></div>
                        <div className="cat-eye-r"></div>
                    </div>
                    <div className="cat-arm-l"></div>
                    <div className="cat-arm-r"></div>
                    <div className="cat-tale"></div>
                </div>
                <div className="boy">
                    <div className="arm-l"></div>
                    <div className="foot-l"></div>
                    <div className="head">
                        <div className="face">
                            <div className="hair-1"></div>
                            <div className="hair-2"></div>
                            <div className="eye-l"></div>
                            <div className="eye-r"></div>
                        </div>
                        <div className="hair-3"></div>
                    </div>
                    <div className="foot-r"></div>
                    <div className="arm-r"></div>
                    <div className="laptop">
                        <div className="light"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimationBox;