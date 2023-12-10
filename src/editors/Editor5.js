import { useEffect, useRef, useState } from "react";
import Modal from "../component/Modal";
import baseImg from "../img/base.png";
import Gnb from "../component/Gnb";
import CONSTANTS from '../constants'
import { useNavigate } from "react-router-dom";

const Editor5 = () => {
    const bgRef = useRef(null);
    const [layoutData, setLayoutData] = useState(window?.data?.LAYOUT5 || CONSTANTS.LAYOUT5);
    const [isModal, setIsModal] = useState({ visibile: false, idx: null });
    const navigate = useNavigate();

    useEffect(() => {
        bgRef.current.style.backgroundColor = layoutData.bgColor
    }, [layoutData]);
    
    const onBgColor = (curBgColor) => {
        const layout = JSON.parse(JSON.stringify(layoutData));
        layout.bgColor = curBgColor;
        setLayoutData(layout);
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
            set ? prev[set][id].img = result : prev[id].img = result;
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
        if(!window.data){
            window.data = {}
        }
        window.data.LAYOUT5 = layoutData; // 임시 테스트용
    };

    const onPreview = () => {
        saveEditorData();
        navigate('/layout5', { replace: false });
    };

    return (
        <div id="Editor5" ref={bgRef}>
            <Gnb saveEditorData={saveEditorData} onPreview={onPreview} onBgColor={onBgColor} />
            {isModal.visible && <Modal isModal={isModal} setIsModal={setIsModal} boxChange={onChangeImg} />}
            <div className="container">
                <div className="left">
                    <textarea id="T_1" className="textarea" placeholder='내용' defaultValue={layoutData['T_1'].text ? layoutData['T_1'].text : ''} onChange={onChangeText} />
                </div>
                <div className="right">
                    <div className="imgWrap">
                        {
                            Object.entries(layoutData.SET_1).map((element, idx) => {
                                const [id, box] = element;
                                return (
                                    <div className="box" key={idx}>
                                        <img id={id} className="img" src={box.img ? box.img : baseImg} alt="썸네일" onClick={(e) => onModal(id, 'SET_1')} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Editor5;