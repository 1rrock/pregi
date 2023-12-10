import { useState } from "react";

const Modal = ({ isVideoModal, setIsVideoModal, boxChange }) => {
    const [url, setUrl] = useState('');
    const onChangeVideo = () => {
        setIsVideoModal({
            visible: false
        })
        boxChange(isVideoModal.idx, url, isVideoModal.set);
    };

    const onChangeUrl = (e) => {
        setUrl(e.target.value);
    }

    const onClickCancel = () => setIsVideoModal({ visible: false })

    return (
        <div className="modalConatiner">
            <div className="videoModal">
                유튜브 URL
                <input onChange={onChangeUrl} id="url" type="text" />
                <div className="btnWrap">
                    <button onClick={onClickCancel}>취소</button>
                    <button onClick={onChangeVideo}>확인</button>
                </div>
            </div>
        </div>
    )
};

export default Modal;