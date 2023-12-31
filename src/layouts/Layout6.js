import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
const Layout6 = () => {
    const bgRef = useRef(null);
    const [layoutData, setLayOutData] = useState(null);
    const getBoxId = url => url.split('v=').pop();
    useEffect(() => {
        setLayOutData(window.data?.LAYOUT6 || null);
    }, []);

    useEffect(() => {
        bgRef.current.style.backgroundColor = layoutData?.bgColor;
    }, [layoutData])

    return (
        <div id="Editor6" ref={bgRef}>
            {layoutData && (
                <div className="container">
                    <div className="left">
                        {
                            layoutData['V_1'].url ?
                                <YouTube id='V_1' videoId={getBoxId(layoutData['V_1'].url)} />
                                : <div className="videoBtn">동영상</div>
                        }
                    </div>
                    <div className="right">
                        <textarea id="T_2" className="textarea" placeholder='내용' defaultValue={layoutData['T_2'].text ? layoutData['T_2'].text : ''} disabled />
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Layout6;