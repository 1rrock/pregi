import { useState } from "react";
import Gnb from "../component/Gnb";
import VideoModal from "../component/VideoModal";
import CONSTANTS from '../constants'
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";

const Editor1 = () => {
    const [layoutData, setLayoutData] = useState(CONSTANTS.LAYOUT6);
    const [isVideoModal, setIsVideoModal] = useState({ visible: false, idx: null });
    const navigate = useNavigate();

    const onBgColor = (curBgColor) => {
        setLayoutData(prev => {
            prev.bgColor = curBgColor;
            return prev;
        });

        document.getElementById('root').style.backgroundColor = curBgColor
    }


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
        window.data.LAYOUT6 = layoutData; // 임시 테스트용
    };

    const onPreview = () => {
        saveEditorData();
        navigate('/layout6', { replace: false });
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

    const getBoxId = url => url.split('v=').pop();

    return (
        <div id="Editor6">
            <Gnb saveEditorData={saveEditorData} onPreview={onPreview} onBgColor={onBgColor} />
            {isVideoModal.visible && <VideoModal isVideoModal={isVideoModal} setIsVideoModal={setIsVideoModal} boxChange={onChangeVideo} />}
            <div className="container">
                <div className="left">
                    {
                        layoutData['V_1'].url ?
                            <YouTube id='V_1' videoId={getBoxId(layoutData['V_1'].url)} />
                            : <div className="videoBtn" onClick={(e) => onVideoModal('V_1')}>동영상</div>
                    }
                </div>
                <div className="right">
                    <textarea id="T_2" className="textarea" placeholder='내용' defaultValue={layoutData['T_2'].text ? layoutData['T_2'].text : ''} onChange={onChangeText} />
                </div>
            </div>
        </div>
    )
};

export default Editor1;