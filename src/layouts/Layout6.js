import { useEffect, useRef } from "react";
import YouTube from "react-youtube";
const Layout6 = ({ layoutData }) => {
    const bgRef = useRef(null);
    const getBoxId = (url) => url.split("v=").pop();

    useEffect(() => {
        bgRef.current.style.backgroundColor = layoutData?.bgColor;
    }, [layoutData]);

    return (
        <div id="Editor6" ref={bgRef}>
            {layoutData && (
                <div className="container">
                    <div className="left">
                        {layoutData["V_1"].url ? (
                            <YouTube
                                id="V_1"
                                videoId={getBoxId(layoutData["V_1"].url)}
                            />
                        ) : (
                            <div className="videoBtn">동영상</div>
                        )}
                    </div>
                    <div className="right">
                        <textarea
                            id="T_2"
                            className="textarea"
                            placeholder="내용"
                            defaultValue={
                                layoutData["T_2"].text
                                    ? layoutData["T_2"].text
                                    : ""
                            }
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
                    </div>
                </div>
            )}
        </div>
    );
};

export default Layout6;
