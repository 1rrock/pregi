import { useEffect, useRef } from "react";
import baseImg from "../img/base.png";
const Layout3 = ({layoutData}) => {
    const bgRef = useRef(null);
    // const [layoutData, setLayOutData] = useState(null);
    // useEffect(() => {
    //     setLayOutData(window.data?.LAYOUT3 || null);
    // }, []);

    useEffect(() => {
        bgRef.current.style.backgroundColor = layoutData?.bgColor;
    }, [layoutData])
    return (
        <div id="Editor3" ref={bgRef}>
            {layoutData && (
                <div className="container">
                    <div className="center">
                        <h1 id="T_1" className="title" type="text">{layoutData['T_1'].text}</h1>
                        <img className="thumbnail" src={layoutData['I_2'].img ? layoutData['I_2'].img : baseImg} alt="썸네일" />
                        <div className="boxWrap">
                            <span id="T_3" className="box">{layoutData['T_3'].text}</span>
                            <span id="T_4" className="box">{layoutData['T_4'].text}</span>
                            <span id="T_5" className="box">{layoutData['T_5'].text}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Layout3;