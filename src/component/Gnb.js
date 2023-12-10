const Gnb = ({ saveEditorData, onPreview, onBgColor }) => {
    const onChangeBgColor = (e) => {
        onBgColor(e.target.value)
    }
    return (
        <div className="gnb">
            <div className="color">
                <input id="color" type="color" onChange={onChangeBgColor}></input>
                <label htmlFor="color" type="button" className="btn">bgcolor</label>
            </div>
            <button type="button" className="btn preview" onClick={onPreview}>preview</button>
            <button type="button" className="btn save" onClick={saveEditorData}>save</button>
        </div>
    )
};

export default Gnb;