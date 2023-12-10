import baseImg from "../img/base.png";
const Layout1 = () => {
    const layoutData = window.data.LAYOUT1;
    document.getElementById('root').style.backgroundColor = layoutData.bgColor;

    return (
        <div id="Editor1" className="container">
            <h1 id="T_1" className="title" type="text">{layoutData['T_1'].text}</h1>
            <div className="scrollArea">
                {
                    Object.entries(layoutData.SET_1).map((element, idx) => {
                        const [id, box] = element;
                        return (
                            <div className="box" key={id} id={id}>
                                <img className="thumbnail" src={box.img ? box.img : baseImg} alt="썸네일" />
                                <span className="thumbTitle">{box.text}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="textWrap">
                <textarea id="T_2" className="textarea" defaultValue={layoutData['T_2'].text} disabled />
                <textarea id="T_3" className="textarea" defaultValue={layoutData['T_3'].text} disabled />
                {/* <p className="textarea" id="T_2">{layoutData['T_2'].text}</p>
                <p className="textarea" id="T_3">{layoutData['T_3'].text}</p> */}
            </div>
        </div>
    )
}

export default Layout1;