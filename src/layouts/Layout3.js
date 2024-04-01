import { useEffect, useRef } from "react";
import baseImg from "../img/base.png";
const Layout3 = ({ layoutData }) => {
    const bgRef = useRef(null);

    useEffect(() => {
        bgRef.current.style.backgroundColor = layoutData?.bgColor;
    }, [layoutData]);
    return (
        <div id="Editor3" ref={bgRef}>
            {layoutData && (
                <div className="container">
                    <div className="center">
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
                        <div className="boxWrap">
                            <span
                                id="T_3"
                                className="box"
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
                            </span>
                            <span
                                id="T_4"
                                className="box"
                                style={{
                                    fontFamily: layoutData["T_4"].font,
                                    fontSize: layoutData["T_4"].fontSize,
                                    color: layoutData["T_4"].fontColor,
                                    fontWeight: layoutData["T_4"].bold
                                        ? "bold"
                                        : "normal",
                                    textAlign: layoutData["T_4"].align,
                                    backgroundColor: layoutData["T_4"].bgColor,
                                }}
                            >
                                {layoutData["T_4"].text}
                            </span>
                            <span
                                id="T_5"
                                className="box"
                                style={{
                                    fontFamily: layoutData["T_5"].font,
                                    fontSize: layoutData["T_5"].fontSize,
                                    color: layoutData["T_5"].fontColor,
                                    fontWeight: layoutData["T_5"].bold
                                        ? "bold"
                                        : "normal",
                                    textAlign: layoutData["T_5"].align,
                                    backgroundColor: layoutData["T_5"].bgColor,
                                }}
                            >
                                {layoutData["T_5"].text}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Layout3;
