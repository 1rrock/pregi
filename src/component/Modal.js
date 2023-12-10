const Modal = ({ isModal, setIsModal, boxChange }) => {
    const onChangeImg = e => {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setIsModal({
                visible: false
            })
            boxChange(isModal.idx, reader.result, isModal.set);
        }
        reader.readAsDataURL(file);
    };
    const onClickCancel = () => setIsModal({ visible: false })

    return (
        <div className="modalConatiner">
            <div className="modal">
                <label className="fileBtn" htmlFor="img">
                    이미지를 선택해 주세요.
                    <input onChange={onChangeImg} id="img" type="file" accept="image/png" />
                </label>
                <button onClick={onClickCancel}>취소</button>
            </div>
        </div>
    )
};

export default Modal;