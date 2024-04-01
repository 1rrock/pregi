import { useEffect, useRef, useState } from "react";
import Modal from "../component/Modal";
import baseImg from "../img/base.png";
import Gnb from "../component/Gnb";
import CONSTANTS from "../constants";

const Editor1 = ({ saveCurrentData, currentEditorData, onRunPreview }) => {
    const bgRef = useRef(null);
    const [layoutData, setLayoutData] = useState(
        currentEditorData || JSON.parse(JSON.stringify(CONSTANTS.LAYOUT1))
    );
    const [isModal, setIsModal] = useState({
        visibile: false,
        idx: null,
        set: null,
    });
    const [curObj, setCurObj] = useState({
        set: null,
        id: null,
    });

    useEffect(() => {
        bgRef.current.style.backgroundColor = layoutData.bgColor;
    }, [layoutData]);

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
            set ? (prev[set][id].img = result) : (prev[id].img = result);
            return prev;
        });
    };

    const onChangeText = (e, set) => {
        const id = e.target.id;
        setLayoutData((prev) => {
            set
                ? (prev[set][id].text = e.target.value)
                : (prev[id].text = e.target.value);
            return prev;
        });
    };

    // 해당 레이아웃 데이터 저장
    const saveEditorData = () => {
        saveCurrentData(layoutData);
    };

    const onPreview = () => {
        saveEditorData();
        onRunPreview();
    };

    const onBgColor = (curBgColor) => {
        const layout = JSON.parse(JSON.stringify(layoutData));
        layout.bgColor = curBgColor;
        setLayoutData(layout);
    };

    const onFontFamilly = (curFontFailly) => {
        const layout = JSON.parse(JSON.stringify(layoutData));
        if(!curObj.id) return;

        if (curObj.set) {
            layout[curObj.set][curObj.id].font = curFontFailly;
        } else {
            layout[curObj.id].font = curFontFailly;
        }
        setLayoutData(layout);
    };

    const onFontSize = (curFontSize) => {
        const layout = JSON.parse(JSON.stringify(layoutData));
        if(!curObj.id) return;

        if (curObj.set) {
            layout[curObj.set][curObj.id].fontSize = `${curFontSize}px`;
        } else {
            layout[curObj.id].fontSize = `${curFontSize}px`;
        }
        setLayoutData(layout);
    };

    const onFontColor = (curFontColor) => {
        const layout = JSON.parse(JSON.stringify(layoutData));
        if(!curObj.id) return;

        if (curObj.set) {
            layout[curObj.set][curObj.id].fontColor = curFontColor;
        } else {
            layout[curObj.id].fontColor = curFontColor;
        }
        setLayoutData(layout);
    };

    const onFontBold = () => {
        const layout = JSON.parse(JSON.stringify(layoutData));
        if(!curObj.id) return;

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
        if(!curObj.id) return;

        if (curObj.set) {
            layout[curObj.set][curObj.id].align = align;
        } else {
            layout[curObj.id].align = align;
        }
        setLayoutData(layout);
    }

    const onBoxColor = (curBoxColor) => {
        const layout = JSON.parse(JSON.stringify(layoutData));
        if(!curObj.id) return;
        if (curObj.set) {
            layout[curObj.set][curObj.id].bgColor = curBoxColor;
        } else {
            layout[curObj.id].bgColor = curBoxColor;
        }
        setLayoutData(layout);
    }

    const onClickCurrentObj = (id, set) => {
        setCurObj({
            set,
            id,
        });
    };

    return (
        <div id="Editor1" ref={bgRef}>
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
                        fontWeight: layoutData["T_1"].bold ? "bold" : "normal",
                        textAlign: layoutData["T_1"].align,
                        backgroundColor: layoutData["T_1"].bgColor
                    }}
                />
                <div className="scrollArea">
                    {Object.entries(layoutData.SET_1).map((element, idx) => {
                        const [id, box] = element;
                        return (
                            <div className="box" key={id}>
                                <img
                                    id={id}
                                    className="thumbnail"
                                    src={box.img ? box.img : baseImg}
                                    alt="썸네일"
                                    onClick={(e) => onModal(id, "SET_1")}
                                />
                                <input
                                    onClick={(e) =>
                                        onClickCurrentObj(e.target.id, "SET_1")
                                    }
                                    id={id}
                                    className="thumbTitle"
                                    placeholder={"제목"}
                                    defaultValue={box.text ? box.text : ""}
                                    type="text"
                                    onChange={(e) => onChangeText(e, "SET_1")}
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
                                        textAlign: layoutData["SET_1"][id].align,
                                        backgroundColor: layoutData["SET_1"][id].bgColor
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="textWrap">
                    <textarea
                        onClick={(e) => onClickCurrentObj(e.target.id)}
                        className="textarea"
                        id="T_2"
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
                            backgroundColor: layoutData["T_2"].bgColor
                        }}
                    />
                    <textarea
                        onClick={(e) => onClickCurrentObj(e.target.id)}
                        className="textarea"
                        id="T_3"
                        placeholder="내용"
                        defaultValue={
                            layoutData["T_3"].text ? layoutData["T_3"].text : ""
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
                            backgroundColor: layoutData["T_3"].bgColor
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Editor1;
