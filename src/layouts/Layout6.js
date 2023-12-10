import YouTube from "react-youtube";
const Layout6 = () => {
    const layoutData = window.data.LAYOUT6;
    const getBoxId = url => url.split('v=').pop();

    return (
        <div id="Editor6">
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
        </div>
    )
}

export default Layout6;