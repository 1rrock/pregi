import { useEffect, useRef, useState } from "react";
import Modal from "../component/Modal";
import VideoModal from "../component/VideoModal";
import baseImg from "../img/base.png";
import Gnb from "../component/Gnb";
import CONSTANTS from "../constants";
// import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";

const Editor4 = ({ saveCurrentData, currentEditorData, onRunPreview }) => {
    const bgRef = useRef(null);
    const [layoutData, setLayoutData] = useState(
        currentEditorData || JSON.parse(JSON.stringify(CONSTANTS.LAYOUT4))
    );
    const [isModal, setIsModal] = useState({ visibile: false, idx: null });
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

    const onModal = (idx, set) => {
        setIsModal({
            visible: true,
            idx,
            set,
        });
    };

    const onChangeImg = (id, result, set) => {
        setLayoutData((prev) => {
            set ? (prev[set][id].img = result) : (prev[id].img = result);
            return prev;
        });
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
        // window.data.LAYOUT4 = layoutData; // 임시 테스트용
        saveCurrentData(layoutData);
    };

    const onPreview = () => {
        saveEditorData();
        // navigate('/layout4', { replace: false });
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
        <div id="Editor4" ref={bgRef}>
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
            {isModal.visible && (
                <Modal
                    isModal={isModal}
                    setIsModal={setIsModal}
                    boxChange={onChangeImg}
                />
            )}
            {isVideoModal.visible && (
                <VideoModal
                    isVideoModal={isVideoModal}
                    setIsVideoModal={setIsVideoModal}
                    boxChange={onChangeVideo}
                />
            )}
            <div className="container">
                <div className="left">
                    <textarea
                        onClick={(e) => onClickCurrentObj(e.target.id)}
                        id="T_1"
                        className="textarea"
                        placeholder="내용"
                        defaultValue={
                            layoutData["T_1"].text ? layoutData["T_1"].text : ""
                        }
                        onChange={onChangeText}
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
                                            src={box.img ? box.img : baseImg}
                                            alt="썸네일"
                                            onClick={(e) =>
                                                onModal(id, "SET_1")
                                            }
                                        />
                                    </div>
                                );
                            }
                        )}
                    </div>
                    <div className="videoWrap">
                        {Object.entries(layoutData.SET_2).map(
                            (element, idx) => {
                                const [id, box] = element;
                                const getBoxId = (url) => url.split("v=").pop();
                                return (
                                    <div className="box" key={idx}>
                                        {box.url ? (
                                            <YouTube
                                                id={id}
                                                videoId={getBoxId(box.url)}
                                            />
                                        ) : (
                                            <div
                                                className="btn"
                                                onClick={(e) =>
                                                    onVideoModal(id, "SET_2")
                                                }
                                            >
                                                동영상
                                            </div>
                                        )}
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editor4;
