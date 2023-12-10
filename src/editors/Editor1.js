import { useState } from "react";
import Modal from "../component/Modal";
import baseImg from "../img/base.png";
import Gnb from "../component/Gnb";
import CONSTANTS from '../constants'
import { useNavigate } from "react-router-dom";

const Editor1 = () => {
    const [layoutData, setLayoutData] = useState(CONSTANTS.LAYOUT1);
    const [isModal, setIsModal] = useState({
        visibile: false,
        idx: null,
        set: null
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
            set ? prev[set][id].img = result : prev[id].img = result;
            return prev;
        })
    };

    const onChangeText = (e) => {
        const id = e.target.id;
        setLayoutData(prev => {
            prev[id].text = e.target.value;
            return prev;
        })
    };

    // 해당 레이아웃 데이터 저장
    const saveEditorData = () => {
        window.data = {}
        window.data.LAYOUT1 = layoutData; // 임시 테스트용
    };

    const onPreview = () => {
        saveEditorData();
        navigate('/layout1', { replace: false });
    };

    return (
        <div className="scrollArea">
            <div id="Editor1">
                {isModal.visible && <Modal isModal={isModal} setIsModal={setIsModal} boxChange={onChangeImg} />}
                <div className="container">
                    <Gnb saveEditorData={saveEditorData} onPreview={onPreview} onBgColor={onBgColor} />
                    <input id="T_1" className="title" placeholder="타이틀" type="text" defaultValue={layoutData['T_1'].text ? layoutData['T_1'].text : ''} onChange={onChangeText} />
                    <div className="scrollArea">
                        {
                            Object.entries(layoutData.SET_1).map((element, idx) => {
                                const [id, box] = element;
                                return (
                                    <div className="box" key={id}>
                                        <img className="thumbnail" src={box.img ? box.img : baseImg} alt="썸네일" onClick={(e) => onModal(id, 'SET_1')} />
                                        <input id={id} className="thumbTitle" placeholder={"제목"} defaultValue={box.text ? box.text : ''} type="text" onChange={onChangeText} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="textWrap">
                        <textarea className="textarea" id="T_2" placeholder='내용' defaultValue={layoutData['T_2'].text ? layoutData['T_2'].text : ''} onChange={onChangeText} />
                        <textarea className="textarea" id="T_3" placeholder="내용" defaultValue={layoutData['T_3'].text ? layoutData['T_3'].text : ''} onChange={onChangeText} />
                    </div>
                </div>
            </div >
        </div>
    )
};

export default Editor1;