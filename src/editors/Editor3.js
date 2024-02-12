import { useEffect, useRef, useState } from "react";
import Modal from "../component/Modal";
import baseImg from "../img/base.png";
import Gnb from "../component/Gnb";
import CONSTANTS from "../constants";
// import { useNavigate } from "react-router-dom";

const Editor3 = ({ saveCurrentData, currentEditorData, onRunPreview }) => {
    const bgRef = useRef(null);
    const [layoutData, setLayoutData] = useState(
        currentEditorData || JSON.parse(JSON.stringify(CONSTANTS.LAYOUT3))
    );
    const [isModal, setIsModal] = useState({
        visibile: false,
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

    const onChangeImg = (id, result) => {
        setLayoutData((prev) => {
            prev[id].img = result;
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
        // window.data.LAYOUT3 = layoutData; // 임시 테스트용
        saveCurrentData(layoutData);
    };

    const onPreview = () => {
        saveEditorData();
        // navigate('/layout3', { replace: false });
        onRunPreview();
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
        <div id="Editor3" ref={bgRef}>
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
            <div className="container">
                <div className="center">
                    <input
                        onClick={(e) => onClickCurrentObj(e.target.id)}
                        id="T_1"
                        className="title"
                        placeholder="타이틀"
                        type="text"
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
                    <img
                        id="I_2"
                        className="thumbnail"
                        src={
                            layoutData["I_2"].img
                                ? layoutData["I_2"].img
                                : baseImg
                        }
                        alt="썸네일"
                        onClick={(e) => onModal("I_2")}
                    />
                    <div className="boxWrap">
                        <input
                            onClick={(e) => onClickCurrentObj(e.target.id)}
                            id="T_3"
                            className="box"
                            placeholder="내용"
                            type="text"
                            defaultValue={
                                layoutData["T_3"].text
                                    ? layoutData["T_3"].text
                                    : ""
                            }
                            onChange={onChangeText}
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
                        <input
                            onClick={(e) => onClickCurrentObj(e.target.id)}
                            id="T_4"
                            className="box"
                            placeholder="내용"
                            type="text"
                            defaultValue={
                                layoutData["T_4"].text
                                    ? layoutData["T_4"].text
                                    : ""
                            }
                            onChange={onChangeText}
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
                        />
                        <input
                            onClick={(e) => onClickCurrentObj(e.target.id)}
                            id="T_5"
                            className="box"
                            placeholder="내용"
                            type="text"
                            defaultValue={
                                layoutData["T_5"].text
                                    ? layoutData["T_5"].text
                                    : ""
                            }
                            onChange={onChangeText}
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
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editor3;
