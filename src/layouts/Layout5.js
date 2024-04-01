import { useEffect, useRef } from "react";
import baseImg from "../img/base.png";
const Layout5 = ({ layoutData }) => {
    const bgRef = useRef(null);

    useEffect(() => {
        bgRef.current.style.backgroundColor = layoutData?.bgColor;
    }, [layoutData]);
    return (
        <div id="Editor5" ref={bgRef}>
            {layoutData && (
                <div className="container">
                    <div className="left">
                        <textarea
                            id="T_1"
                            className="textarea"
                            defaultValue={layoutData["T_1"].text}
                            disabled
                            style={{
                                fontFamily: layoutData["T_1"].font,
                                fontSize: layoutData["T_1"].fontSize,
                                color: layoutData["T_1"].fontColor,
                                fontWeight: layoutData["T_1"].bold
                                    ? "bold"
                                    : "normal",
                                textAlign: layoutData["T_1"].align,
                                backgroundColor: layoutData["T_1"].bgColor,
                            }}
                        />
                    </div>
                    <div className="right">
                        <div className="imgWrap">
                            {Object.entries(layoutData.SET_1).map(
                                (element, idx) => {
                                    const [id, box] = element;
                                    return (
                                        <div className="box" key={idx}>
                                            <img
                                                id={id}
                                                className="img"
                                                src={
                                                    box.img ? box.img : baseImg
                                                }
                                                alt="썸네일"
                                            />
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Layout5;
