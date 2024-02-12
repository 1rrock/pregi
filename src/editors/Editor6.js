import { useEffect, useRef, useState } from "react";
import Gnb from "../component/Gnb";
import VideoModal from "../component/VideoModal";
import CONSTANTS from "../constants";
// import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";

const Editor1 = ({ saveCurrentData, currentEditorData, onRunPreview }) => {
    const bgRef = useRef(null);
    const [layoutData, setLayoutData] = useState(
        currentEditorData || JSON.parse(JSON.stringify(CONSTANTS.LAYOUT6))
    );
    const [isVideoModal, setIsVideoModal] = useState({
        visible: false,
        idx: null,
    });
    const [curObj, setCurObj] = useState({
        set: null,
        id: null,
    });
    // const navigate = useNavigate();

    useEffect(() => {
        bgRef.current.style.backgroundColor = layoutData.bgColor;
    }, [layoutData]);

    const onBgColor = (curBgColor) => {
        const layout = JSON.parse(JSON.stringify(layoutData));
        layout.bgColor = curBgColor;
        setLayoutData(layout);
    };

    const onChangeText = (e, isTextArea, set) => {
        const id = e.target.id;
        setLayoutData((prev) => {
            set
                ? (prev[set][id].text = e.target.value)
                : (prev[id].text = e.target.value);
            return prev;
        });

        if (isTextArea) {
            e.target.style.height = `${e.target.scrollHeight}px`;
        }
    };

    // 해당 레이아웃 데이터 저장
    const saveEditorData = () => {
        // if(!window.data){
        //     window.data = {}
        // }
        // window.data.LAYOUT6 = layoutData; // 임시 테스트용
        saveCurrentData(layoutData);
    };

    const onPreview = () => {
        saveEditorData();
        // navigate('/layout6', { replace: false });
        onRunPreview();
    };

    const onVideoModal = (idx, set) => {
        setIsVideoModal({
            visible: true,
            idx,
            set,
        });
    };

    const onChangeVideo = (id, url, set) => {
        setLayoutData((prev) => {
            set ? (prev[set][id].url = url) : (prev[id].url = url);
            return prev;
        });
    };

    const getBoxId = (url) => url.split("v=").pop();

    const onFontFamilly = (curFontFailly) => {
        const layout = JSON.parse(JSON.stringify(layoutData));
        if (curObj.set) {
            layout[curObj.set][curObj.id].font = curFontFailly;
        } else {
            layout[curObj.id].font = curFontFailly;
        }
        setLayoutData(layout);
    };

    const onFontSize = (curFontSize) => {
        const layout = JSON.parse(JSON.stringify(layoutData));
        if (!curObj.id) return;

        if (curObj.set) {
            layout[curObj.set][curObj.id].fontSize = `${curFontSize}px`;
        } else {
            layout[curObj.id].fontSize = `${curFontSize}px`;
        }
        setLayoutData(layout);
    };

    const onFontColor = (curFontColor) => {
        const layout = JSON.parse(JSON.stringify(layoutData));
        if (!curObj.id) return;

        if (curObj.set) {
            layout[curObj.set][curObj.id].fontColor = curFontColor;
        } else {
            layout[curObj.id].fontColor = curFontColor;
        }
        setLayoutData(layout);
    };

    const onFontBold = () => {
        const layout = JSON.parse(JSON.stringify(layoutData));
        if (!curObj.id) return;

        if (curObj.set) {
            layout[curObj.set][curObj.id].bold =
                !layout[curObj.set][curObj.id].bold;
        } else {
            layout[curObj.id].bold = !layout[curObj.id].bold;
        }
        setLayoutData(layout);
    };

    const onAlign = (align) => {
        const layout = JSON.parse(JSON.stringify(layoutData));
        if (!curObj.id) return;

        if (curObj.set) {
            layout[curObj.set][curObj.id].align = align;
        } else {
            layout[curObj.id].align = align;
        }
        setLayoutData(layout);
    };

    const onBoxColor = (curBoxColor) => {
        const layout = JSON.parse(JSON.stringify(layoutData));
        if (!curObj.id) return;
        if (curObj.set) {
            layout[curObj.set][curObj.id].bgColor = curBoxColor;
        } else {
            layout[curObj.id].bgColor = curBoxColor;
        }
        setLayoutData(layout);
    };

    const onClickCurrentObj = (id, set) => {
        setCurObj({
            set,
            id,
        });
    };

    return (
        <div id="Editor6" ref={bgRef}>
            <Gnb
                saveEditorData={saveEditorData}
                onPreview={onPreview}
                onBgColor={onBgColor}
                onFontFamilly={onFontFamilly}
                onFontSize={onFontSize}
                onFontColor={onFontColor}
                onFontBold={onFontBold}
                onAlign={onAlign}
                onBoxColor={onBoxColor}
            />
            {isVideoModal.visible && (
                <VideoModal
                    isVideoModal={isVideoModal}
                    setIsVideoModal={setIsVideoModal}
                    boxChange={onChangeVideo}
                />
            )}
            <div className="container">
                <div className="left">
                    {layoutData["V_1"].url ? (
                        <YouTube
                            id="V_1"
                            videoId={getBoxId(layoutData["V_1"].url)}
                        />
                    ) : (
                        <div
                            className="videoBtn"
                            onClick={(e) => onVideoModal("V_1")}
                        >
                            동영상
                        </div>
                    )}
                </div>
                <div className="right">
                    <textarea
                        onClick={(e) => onClickCurrentObj(e.target.id)}
                        id="T_2"
                        className="textarea"
                        placeholder="내용"
                        defaultValue={
                            layoutData["T_2"].text ? layoutData["T_2"].text : ""
                        }
                        onChange={onChangeText}
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
        </div>
    );
};

export default Editor1;
