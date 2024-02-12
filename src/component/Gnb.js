import { useState } from "react";

const Gnb = ({ saveEditorData, onPreview, onBgColor }) => {
    const [isFontSelectVisible, setIsFontSelectVisible] = useState(false)
    const onChangeBgColor = (e) => {
        onBgColor(e.target.value)
    }

    const onSelectFontFamilly = () => {
        setIsFontSelectVisible(prev => !prev);
    }
    const onChangeFontFamilly = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="gnb">
            <div className="left-btn-wrap">
                <div className="select">
                    <button onClick={onSelectFontFamilly} type="button" className="ctrl-btn font-familly" />
                    {
                        isFontSelectVisible && (
                            <ul>
                                <li onClick={onChangeFontFamilly} style={{fontFamily:'NanumGothic'}} value='NanumGothic'>NanumGothic</li>
                                <li onClick={onChangeFontFamilly} style={{fontFamily:'BlackHanSans'}} value='BlackHanSans'>BlackHanSans</li>
                            </ul>
                        )
                    }
                </div>
                <button type="button" className="ctrl-btn font-size" />
                <button type="button" className="ctrl-btn font-color" />
                <button type="button" className="ctrl-btn font-weight" />
                <button type="button" className="ctrl-btn text-align" />
                <button type="button" className="ctrl-btn box-color" />
                <button type="button" className="ctrl-btn link" />
            </div>
            <div className="right-btn-wrap">
                <div className="color">
                    <input id="color" type="color" onChange={onChangeBgColor}></input>
                    <label htmlFor="color" type="button" className="btn">bgcolor</label>
                </div>
                <button type="button" className="btn preview" onClick={onPreview}>preview</button>
                <button type="button" className="btn save" onClick={saveEditorData}>save</button>
            </div>
        </div>
    )
};

export default Gnb;