import { useState } from "react";
import Modal from "../component/Modal";
import baseImg from "../img/base.png";
import Gnb from "../component/Gnb";
import CONSTANTS from '../constants'
import { useNavigate } from "react-router-dom";

const Editor2 = () => {
    const [layoutData, setLayoutData] = useState(CONSTANTS.LAYOUT2);
    const [isModal, setIsModal] = useState({
        visibile: false,
        idx: null
    });
    const navigate = useNavigate();

    const onBgColor = (curBgColor) => {
        setLayoutData(prev => {
            prev.bgColor = curBgColor;
            return prev;
        });

        document.body.style.backgroundColor = curBgColor
    }


    const onModal = (idx, set) => {
        setIsModal({
            visible: true,
            idx,
            set
        });
    };

    const onChangeImg = (id,result,set) => {
        setLayoutData(prev => {
            prev[id].img = result;
            return prev;
        })
    };

    const onChangeText = (e, isTextArea, set) => {
        const id = e.target.id;
        setLayoutData(prev => {
            set ? prev[set][id].text = e.target.value : prev[id].text = e.target.value;
            return prev;
        });

        if (isTextArea) {
            e.target.style.height = `${e.target.scrollHeight}px`
        }
    };

    // 해당 레이아웃 데이터 저장
    const saveEditorData = () => {
        window.data = {};
        window.data.LAYOUT2 = layoutData; // 임시 테스트용
    };

    const onPreview = () => {
        saveEditorData();
        navigate('/layout2', { replace: false });
    };

    return (
        <div id="Editor2">
            <Gnb saveEditorData={saveEditorData} onPreview={onPreview} onBgColor={onBgColor} />
            {isModal.visible && <Modal isModal={isModal} setIsModal={setIsModal} boxChange={onChangeImg} />}
            <div className="container">
                <div className="left">
                    <input id="T_1" className="title" placeholder="타이틀" type="text" defaultValue={layoutData['T_1'].text ? layoutData['T_1'].text : ''} onChange={onChangeText} />
                    <img id="I_2" className="thumbnail" src={layoutData['I_2'].img ? layoutData['I_2'].img : baseImg} alt="썸네일" onClick={(e) => onModal('I_2')} />
                    <textarea id="T_3" className="textarea" placeholder='내용' onChange={onChangeText} />
                </div>
                <div className="right">
                    {
                        Object.entries(layoutData.SET_1).map((element, idx) => {
                            const [id, box] = element;
                            return (
                                <div className="box" key={idx}>
                                    <textarea rows={1} id={`${id}`} className="thumbTitle" placeholder={"제목"} defaultValue={box.text ? box.text : ''} type="text" onChange={(e) => onChangeText(e, true, 'SET_1')} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Editor2;