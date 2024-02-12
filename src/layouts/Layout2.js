import { useEffect, useRef } from "react";
import baseImg from "../img/base.png";
const Layout2 = ({layoutData}) => {
    const bgRef = useRef(null);
    // const [layoutData, setLayOutData] = useState(null);
    // useEffect(() => {
    //     setLayOutData(window.data?.LAYOUT2 || null);
    // }, []);

    useEffect(() => {
        bgRef.current.style.backgroundColor = layoutData?.bgColor;
    }, [layoutData])
    return (
        <div id="Editor2" ref={bgRef}>
            {layoutData && (
                <div className="container">
                    <div className="left">
                        <h1 id="T_1" className="title" type="text">{layoutData['T_1'].text}</h1>
                        <img className="thumbnail" src={layoutData['I_2'].img ? layoutData['I_2'].img : baseImg} alt="썸네일" />
                        {/* <textarea id="T_3" className="textarea" placeholder='내용' onChange={onChangeText} /> */}
                        <p className="textarea" id="T_3">{layoutData['T_3'].text}</p>
                    </div>
                    <div className="right">
                        {
                            Object.entries(layoutData.SET_1).map((element, idx) => {
                                const [id, box] = element;
                                return (
                                    <div className="box" key={idx}>
                                        <textarea id={id} className="thumbTitle" defaultValue={box.text} disabled />
                                        {/* <p className="thumbTitle" id={id}>{box.text}</p> */}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default Layout2;