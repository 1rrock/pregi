import { useEffect, useRef } from "react";
import baseImg from "../img/base.png";
const Layout1 = ({ layoutData }) => {
    const bgRef = useRef(null);

    useEffect(() => {
        bgRef.current.style.backgroundColor = layoutData?.bgColor;
    }, [layoutData]);

    return (
        <div id="Editor1" ref={bgRef}>
            {layoutData && (
                <div className="container">
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
                    <div className="scrollArea">
                        {Object.entries(layoutData.SET_1).map(
                            (element, idx) => {
                                const [id, box] = element;
                                return (
                                    <div className="box" key={id} id={id}>
                                        <img
                                            className="thumbnail"
                                            src={box.img ? box.img : baseImg}
                                            alt="썸네일"
                                        />
                                        <span
                                            className="thumbTitle"
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
                                        >
                                            {box.text}
                                        </span>
                                    </div>
                                );
                            }
                        )}
                    </div>
                    <div className="textWrap">
                        <textarea
                            id="T_2"
                            className="textarea"
                            defaultValue={layoutData["T_2"].text}
                            disabled
                            style={{
                                fontFamily: layoutData["T_2"].font,
                                fontSize: layoutData["T_2"].fontSize,
                                color: layoutData["T_2"].fontColor,
                                fontWeight: layoutData["T_2"].bold
                                    ? "bold"
                                    : "normal",
                                textAlign: layoutData["T_2"].align,
                                backgroundColor: layoutData["T_2"].bgColor,
                            }}
                        />
                        <textarea
                            id="T_3"
                            className="textarea"
                            defaultValue={layoutData["T_3"].text}
                            disabled
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
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Layout1;
