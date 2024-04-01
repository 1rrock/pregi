import { useEffect, useRef } from "react";
import baseImg from "../img/base.png";
const Layout2 = ({ layoutData }) => {
    const bgRef = useRef(null);

    useEffect(() => {
        bgRef.current.style.backgroundColor = layoutData?.bgColor;
    }, [layoutData]);
    return (
        <div id="Editor2" ref={bgRef}>
            {layoutData && (
                <div className="container">
                    <div className="left">
                        <h1
                            id="T_1"
                            className="title"
                            type="text"
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
                        >
                            {layoutData["T_1"].text}
                        </h1>
                        <img
                            className="thumbnail"
                            src={
                                layoutData["I_2"].img
                                    ? layoutData["I_2"].img
                                    : baseImg
                            }
                            alt="썸네일"
                        />
                        <p
                            className="textarea"
                            id="T_3"
                            style={{
                                fontFamily: layoutData["T_3"].font,
                                fontSize: layoutData["T_3"].fontSize,
                                color: layoutData["T_3"].fontColor,
                                fontWeight: layoutData["T_3"].bold
                                    ? "bold"
                                    : "normal",
                                textAlign: layoutData["T_3"].align,
                                backgroundColor: layoutData["T_3"].bgColor,
                            }}
                        >
                            {layoutData["T_3"].text}
                        </p>
                    </div>
                    <div className="right">
                        {Object.entries(layoutData.SET_1).map(
                            (element, idx) => {
                                const [id, box] = element;
                                return (
                                    <div className="box" key={idx}>
                                        <textarea
                                            id={id}
                                            className="thumbTitle"
                                            defaultValue={box.text}
                                            disabled
                                            style={{
                                                fontFamily: box.font,
                                                fontSize: box.fontSize,
                                                color: box.fontColor,
                                                fontWeight: box.bold
                                                    ? "bold"
                                                    : "normal",
                                                textAlign: box.align,
                                                backgroundColor: box.bgColor,
                                            }}
                                        />
                                        {/* <p className="thumbTitle" id={id}>{box.text}</p> */}
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Layout2;
