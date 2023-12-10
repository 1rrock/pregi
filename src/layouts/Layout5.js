import baseImg from "../img/base.png";
const Layout5 = () => {
    const layoutData = window.data.LAYOUT5;
    return (
        <div id="Editor5">
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
                </div>
            </div>
        </div>
    )
}

export default Layout5;