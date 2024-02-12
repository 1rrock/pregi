import { useState, useRef } from "react";

const Gnb = ({ 
    saveEditorData, 
    onPreview, 
    onBgColor, 
    onFontFamilly,
    onFontSize,
    onFontColor,
    onFontBold,
    onAlign,
    onBoxColor
 }) => {
    const boxColorRef = useRef(null);
    const fontColorRef = useRef(null);
    const [isFontSelectVisible, setIsFontSelectVisible] = useState(false)
    const [isFontSizeSelectVisible, setIsFontSizeSelectVisible] = useState(false)
    const [isAlignVisible, setIsAlignVisible] = useState(false)
    const onChangeBgColor = (e) => {
        onBgColor(e.target.value)
    }

    const onSelectFontFamilly = () => {
        setIsFontSelectVisible(prev => !prev);
        setIsFontSizeSelectVisible(false);
        setIsAlignVisible(false);
    }

    const onChangeFontFamilly = (e) => {
        onFontFamilly(e.target.innerText);
        setIsFontSelectVisible(false);
        setIsAlignVisible(false);
    }

    const onSelectFontSize = () => {
        setIsFontSizeSelectVisible(prev => !prev);
        setIsFontSelectVisible(false);
        setIsAlignVisible(false);
    }

    const onChangeFontSize = (e) => {
        onFontSize(e.target.innerText);
        setIsFontSizeSelectVisible(false);
        setIsAlignVisible(false);
    }

    const onChangeFontColor = (e) => {
        onFontColor(e.target.value);
        fontColorRef.current.style.backgroundColor = e.target.value
    }

    const onClickBold = () => {
        onFontBold();
    };

    const onClickAlign = () => {
        setIsAlignVisible(prev => !prev);
    }

    const onChangeAlign = (align) => {
        onAlign(align);
        setIsAlignVisible(false);
    }

    const onChangeBoxColor = (e) => {
        onBoxColor(e.target.value);
        boxColorRef.current.style.backgroundColor = e.target.value
    }

    return (
        <div className="gnb">
            <div className="left-btn-wrap">
                <div className="select">
                    <button onClick={onSelectFontFamilly} type="button" className="ctrl-btn font-familly" />
                    {
                        isFontSelectVisible && (
                            <ul>
                                <li onClick={onChangeFontFamilly} style={{fontFamily:'NanumGothic'}}>NanumGothic</li>
                                <li onClick={onChangeFontFamilly} style={{fontFamily:'BlackHanSans'}}>BlackHanSans</li>
                            </ul>
                        )
                    }
                </div>
                <div className="select">
                    <button onClick={onSelectFontSize} type="button" className="ctrl-btn font-size" />
                    {
                        isFontSizeSelectVisible && (
                            <ul>
                                <li onClick={onChangeFontSize}>22</li>
                                <li onClick={onChangeFontSize}>28</li>
                                <li onClick={onChangeFontSize}>32</li>
                                <li onClick={onChangeFontSize}>36</li>
                                <li onClick={onChangeFontSize}>42</li>
                                <li onClick={onChangeFontSize}>48</li>
                                <li onClick={onChangeFontSize}>52</li>
                            </ul>
                        )
                    }
                </div>
                <div>
                    <label htmlFor="fontColor" className="ctrl-btn font-color">
                        <span ref={fontColorRef} />
                    </label>
                    <input id="fontColor" type="color" style={{position:'absolute',width:0,height:0,visibility: 'hidden'}} onChange={onChangeFontColor}></input>
                </div>
                <button onClick={onClickBold} type="button" className="ctrl-btn font-weight" />
                <div className="select-align">
                    <button onClick={onClickAlign} type="button" className="ctrl-btn text-align" />
                    {
                        isAlignVisible && (
                            <ul>
                                <li className="left" onClick={() => onChangeAlign('left')}></li>
                                <li className="center" onClick={() => onChangeAlign('center')}></li>
                                <li className="right" onClick={() => onChangeAlign('right')}></li>
                            </ul>
                        )
                    }
                </div>
                <div>
                    <label ref={boxColorRef} htmlFor="boxColor" className="ctrl-btn box-color" />
                    <input id="boxColor" type="color" style={{position:'absolute',width:0,height:0,visibility: 'hidden'}} onChange={onChangeBoxColor}></input>
                </div>
                {/* <button type="button" className="ctrl-btn box-color" /> */}
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