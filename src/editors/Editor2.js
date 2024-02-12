import { useEffect, useRef, useState } from "react";
import Modal from "../component/Modal";
import baseImg from "../img/base.png";
import Gnb from "../component/Gnb";
import CONSTANTS from "../constants";
// import { useNavigate } from "react-router-dom";

const Editor2 = ({ saveCurrentData, currentEditorData, onRunPreview }) => {
    const bgRef = useRef(null);
    const [layoutData, setLayoutData] = useState(
        currentEditorData || JSON.parse(JSON.stringify(CONSTANTS.LAYOUT2))
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

    // useEffect(() => {
    //     console.log(curObj)
    // }, [curObj]);

    const onBgColor = (curBgColor) => {
        const layout = JSON.parse(JSON.stringify(layoutData));
        layout.bgColor = curBgColor;
        setLayoutData(layout);
    };

    const onModal = (idx, set) => {
        onClickCurrentObj(idx, set);
        setIsModal({
            visible: true,
            idx,
            set,
        });
    };

    const onChangeImg = (id, result, set) => {
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
        // window.data.LAYOUT2 = layoutData; // 임시 테스트용
        // console.log(window.data)
        saveCurrentData(layoutData);
    };

    const onPreview = () => {
        saveEditorData();
        // navigate('/layout2', { replace: false });
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
        <div id="Editor2" ref={bgRef}>
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
                <div className="left">
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
                    <textarea
                        onClick={(e) => onClickCurrentObj(e.target.id)}
                        id="T_3"
                        className="textarea"
                        placeholder="내용"
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
                </div>
                <div className="right">
                    {Object.entries(layoutData.SET_1).map((element, idx) => {
                        const [id, box] = element;
                        return (
                            <div className="box" key={idx}>
                                <textarea
                                    rows={1}
                                    id={id}
                                    className="thumbTitle"
                                    placeholder={"제목"}
                                    defaultValue={box.text ? box.text : ""}
                                    type="text"
                                    onChange={(e) =>
                                        onChangeText(e, true, "SET_1")
                                    }
                                    onClick={(e) =>
                                        onClickCurrentObj(e.target.id, "SET_1")
                                    }
                                    style={{
                                        fontFamily:
                                            layoutData["SET_1"][id].font,
                                        fontSize:
                                            layoutData["SET_1"][id].fontSize,
                                        color: layoutData["SET_1"][id]
                                            .fontColor,
                                        fontWeight: layoutData["SET_1"][id].bold
                                            ? "bold"
                                            : "normal",
                                        textAlign:
                                            layoutData["SET_1"][id].align,
                                        backgroundColor:
                                            layoutData["SET_1"][id].bgColor,
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Editor2;
