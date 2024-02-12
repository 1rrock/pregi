import { useEffect, useRef, useState } from "react";
import Modal from "../component/Modal";
import baseImg from "../img/base.png";
import Gnb from "../component/Gnb";
import CONSTANTS from '../constants'
// import { useNavigate } from "react-router-dom";

const Editor1 = ({saveCurrentData, currentEditorData, onRunPreview}) => {
    const bgRef = useRef(null);
    // const [layoutData, setLayoutData] = useState(window?.data?.LAYOUT1 || CONSTANTS.LAYOUT1);
    const [layoutData, setLayoutData] = useState(currentEditorData || JSON.parse(JSON.stringify(CONSTANTS.LAYOUT1)));
    const [isModal, setIsModal] = useState({
        visibile: false,
        idx: null,
        set: null
    });
    // const navigate = useNavigate();

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

    const onChangeText = (e, set) => {
        const id = e.target.id;
        setLayoutData(prev => {
            set ? prev[set][id].text = e.target.value : prev[id].text = e.target.value;
            return prev;
        })
    };

    // 해당 레이아웃 데이터 저장
    const saveEditorData = () => {
        saveCurrentData(layoutData);
    };

    const onPreview = () => {
        saveEditorData();
        // navigate('/layout1', { replace: false });
        onRunPreview();
    };

    return (
        <div id="Editor1" ref={bgRef}>
            <Gnb saveEditorData={saveEditorData} onPreview={onPreview} onBgColor={onBgColor} />
            {isModal.visible && <Modal isModal={isModal} setIsModal={setIsModal} boxChange={onChangeImg} />}
            <div className="container">
                <input id="T_1" className="title" placeholder="타이틀" type="text" defaultValue={layoutData['T_1'].text ? layoutData['T_1'].text : ''} onChange={onChangeText} />
                <div className="scrollArea">
                    {
                        Object.entries(layoutData.SET_1).map((element, idx) => {
                            const [id, box] = element;
                            return (
                                <div className="box" key={id}>
                                    <img className="thumbnail" src={box.img ? box.img : baseImg} alt="썸네일" onClick={(e) => onModal(id, 'SET_1')} />
                                    <input id={id} className="thumbTitle" placeholder={"제목"} defaultValue={box.text ? box.text : ''} type="text" onChange={(e) => onChangeText(e, 'SET_1')} />
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
    )
};

export default Editor1;