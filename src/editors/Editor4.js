import { useState } from "react";
import Modal from "../component/Modal";
import VideoModal from "../component/VideoModal";
import baseImg from "../img/base.png";
import Gnb from "../component/Gnb";
import CONSTANTS from '../constants'
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";

const Editor4 = () => {
    const [layoutData, setLayoutData] = useState(CONSTANTS.LAYOUT4);
    const [isModal, setIsModal] = useState({ visibile: false, idx: null });
    const [isVideoModal, setIsVideoModal] = useState({ visible: false, idx: null });
    const navigate = useNavigate();

    const onBgColor = (curBgColor) => {
        setLayoutData(prev => {
            prev.bgColor = curBgColor;
            return prev;
        });

        document.body.style.backgroundColor = curBgColor;
    }

    const onModal = (idx, set) => {
        setIsModal({
            visible: true,
            idx,
            set
        });
    };

    const onChangeImg = (id, result, set) => {
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
        window.data = {};
        window.data.LAYOUT4 = layoutData; // 임시 테스트용
    };

    const onPreview = () => {
        saveEditorData();
        navigate('/layout4', { replace: false });
    };

    const onVideoModal = (idx, set) => {
        setIsVideoModal({
            visible: true,
            idx,
            set
        });
    }

    const onChangeVideo = (id, url, set) => {
        setLayoutData(prev => {
            set ? prev[set][id].url = url : prev[id].url = url;
            return prev;
        })
    }

    return (
        <div id="Editor4">
            <Gnb saveEditorData={saveEditorData} onPreview={onPreview} onBgColor={onBgColor} />
            {isModal.visible && <Modal isModal={isModal} setIsModal={setIsModal} boxChange={onChangeImg} />}
            {isVideoModal.visible && <VideoModal isVideoModal={isVideoModal} setIsVideoModal={setIsVideoModal} boxChange={onChangeVideo} />}
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
                    <div className="videoWrap">
                        {
                            Object.entries(layoutData.SET_2).map((element, idx) => {
                                const [id, box] = element;
                                const getBoxId = url => url.split('v=').pop();
                                return (
                                    <div className="box" key={idx}>
                                        {
                                            box.url ?
                                                <YouTube id={id} videoId={getBoxId(box.url)} />
                                                : <div className="btn" onClick={(e) => onVideoModal(id, 'SET_2')}>동영상</div>
                                        }
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

export default Editor4;