import { useEffect, useState } from "react";
import baseImg from "../img/base.png";
import YouTube from "react-youtube";

const Layout4 = () => {
    const [layoutData, setLayOutData] = useState(null);
    useEffect(() => {
        setLayOutData(window.data?.LAYOUT4 || null);
    }, []);
    return (
        <div id="Editor4">
            {layoutData && (
                <div className="container">
                    <div className="left">
                        <textarea id="T_1" className="textarea" defaultValue={layoutData['T_1'].text} disabled />
                        {/* <p id="T_1" className="textarea" placeholder='내용'>{layoutData['T_1'].text}</p> */}
                    </div>
                    <div className="right">
                        <div className="imgWrap">
                            {
                                Object.entries(layoutData.SET_1).map((element, idx) => {
                                    const [id, box] = element;
                                    return (
                                        <div className="box" key={idx}>
                                            <img id={id} className="img" src={box.img ? box.img : baseImg} alt="썸네일" />
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
                                                    : <div className="btn" >동영상</div>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Layout4;