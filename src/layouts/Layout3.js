import baseImg from "../img/base.png";
const Layout3 = () => {
    const layoutData = window.data.LAYOUT3;
    return (
        <div id="Editor3">
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
        </div>
    )
}

export default Layout3;