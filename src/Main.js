import { useEffect, useState } from "react";
import Layout1 from './layouts/Layout1';
import Layout2 from './layouts/Layout2';
import Layout3 from './layouts/Layout3';
import Layout4 from './layouts/Layout4';
import Layout5 from './layouts/Layout5';
import Layout6 from './layouts/Layout6';

import Editor1 from './editors/Editor1';
import Editor2 from './editors/Editor2';
import Editor3 from './editors/Editor3';
import Editor4 from './editors/Editor4';
import Editor5 from './editors/Editor5';
import Editor6 from './editors/Editor6';

// const testData = [
//     {
//         layout : 1,
//         id: 1,
//         title: '메인화면',
//         data: {
//             bgColor: '#fff',
//             T_1: {
//                 bgColor: null,
//                 text: '',
//             },
//             T_2: {
//                 bgColor: null,
//                 text: '',
//             },
//             T_3: {
//                 bgColor: null,
//                 text: '',
//             },
//             SET_1: {
//                 TI_1: {
//                     bgColor: null,
//                     img: null,
//                     text: '',
//                 },
//                 TI_2: {
//                     bgColor: null,
//                     img: null,
//                     text: '',
//                 },
//                 TI_3: {
//                     bgColor: null,
//                     img: null,
//                     text: '',
//                 },
//                 TI_4: {
//                     bgColor: null,
//                     img: null,
//                     text: '',
//                 },
//                 TI_5: {
//                     bgColor: null,
//                     img: null,
//                     text: '',
//                 },
//             }
//         },
//         children: [
//             {
//                 layout: 1,
//                 id:2,
//                 title: '1뎁스01페이지',
//                 data: {
//                     bgColor: '#fff',
//                     T_1: {
//                         bgColor: null,
//                         text: '',
//                     },
//                     T_2: {
//                         bgColor: null,
//                         text: '',
//                     },
//                     T_3: {
//                         bgColor: null,
//                         text: '',
//                     },
//                     SET_1: {
//                         TI_1: {
//                             bgColor: null,
//                             img: null,
//                             text: '',
//                         },
//                         TI_2: {
//                             bgColor: null,
//                             img: null,
//                             text: '',
//                         },
//                         TI_3: {
//                             bgColor: null,
//                             img: null,
//                             text: '',
//                         },
//                         TI_4: {
//                             bgColor: null,
//                             img: null,
//                             text: '',
//                         },
//                         TI_5: {
//                             bgColor: null,
//                             img: null,
//                             text: '',
//                         },
//                     }
//                 },
//             },
//             {
//                 layout: 1,
//                 id:3,
//                 title: '1뎁스02페이지',
//                 data: {
//                     bgColor: '#fff',
//                     T_1: {
//                         bgColor: null,
//                         text: '',
//                     },
//                     T_2: {
//                         bgColor: null,
//                         text: '',
//                     },
//                     T_3: {
//                         bgColor: null,
//                         text: '',
//                     },
//                     SET_1: {
//                         TI_1: {
//                             bgColor: null,
//                             img: null,
//                             text: '',
//                         },
//                         TI_2: {
//                             bgColor: null,
//                             img: null,
//                             text: '',
//                         },
//                         TI_3: {
//                             bgColor: null,
//                             img: null,
//                             text: '',
//                         },
//                         TI_4: {
//                             bgColor: null,
//                             img: null,
//                             text: '',
//                         },
//                         TI_5: {
//                             bgColor: null,
//                             img: null,
//                             text: '',
//                         },
//                     }
//                 },
//                 children: [
//                     {
//                         layout: 1,
//                         id:4,
//                         title: '2뎁스01페이지',
//                         data: {
//                             bgColor: '#fff',
//                             T_1: {
//                                 bgColor: null,
//                                 text: '',
//                             },
//                             T_2: {
//                                 bgColor: null,
//                                 text: '',
//                             },
//                             T_3: {
//                                 bgColor: null,
//                                 text: '',
//                             },
//                             SET_1: {
//                                 TI_1: {
//                                     bgColor: null,
//                                     img: null,
//                                     text: '',
//                                 },
//                                 TI_2: {
//                                     bgColor: null,
//                                     img: null,
//                                     text: '',
//                                 },
//                                 TI_3: {
//                                     bgColor: null,
//                                     img: null,
//                                     text: '',
//                                 },
//                                 TI_4: {
//                                     bgColor: null,
//                                     img: null,
//                                     text: '',
//                                 },
//                                 TI_5: {
//                                     bgColor: null,
//                                     img: null,
//                                     text: '',
//                                 },
//                             }
//                         },
//                     },   
//                 ]
//             }
//         ]
//     }
// ]
// import Editor1 from './editors/Editor1'
const Main = () => {
    const [obj, setObj] = useState([]);
    const [currentObj, setCurrentObj] = useState(null);
    const [isSelectLayoutsVisible, setIsSelectLayoutsVisible] = useState(false);
    const [isEditorVisible, setIsEditorVisible] = useState(false);
    const [isPreviewVisible, setIsPreviewVisible] = useState(false);

    useEffect(() => {
        if(currentObj && currentObj.data){
            if(!isEditorVisible && !isPreviewVisible) {
                setIsSelectLayoutsVisible(false);
                setIsEditorVisible(true);
            }
        }
    }, [isEditorVisible, isPreviewVisible, currentObj]);

    const getCreateID = () => new Date().getTime();

    const onClickList = (pickObj) => {
        setIsPreviewVisible(false);
        if(isEditorVisible){
            setIsEditorVisible(false);
        } else {
            setIsSelectLayoutsVisible(false);
            setIsEditorVisible(true);
        }
        setCurrentObj(pickObj)

        if(!pickObj.data){
            setIsSelectLayoutsVisible(true);
        }
    }

    const onAdd = () => {
        const newId = getCreateID();
        const addChild = () => {
            if(!currentObj.children){
                currentObj.children = [];
            }

            currentObj.children.push({
                title: '',
                id: newId
            });
            setObj([...obj]);
            document.getElementById(newId)
        }

        const newObj = [...obj];
        if(!newObj[0]){
            newObj[0] = {
                title: '',
                id: newId
            }
            setObj(newObj)
            document.getElementById(newId)
        } else if(currentObj) {
            addChild();
        }
    }

    const onDelete = () => {
        const newObj = [...obj];

        const onDeleteChild = (item) => {
            for(let i=0; i<item.length; i++) {
                if(currentObj.id === item[i].id){
                    item.splice(i, 1);
                    setObj(newObj);
                    return;
                } else {
                    if(item[i].children){
                        onDeleteChild(item[i].children);
                    }
                }
            }
        }
        if(newObj[0].children){
            onDeleteChild(newObj[0].children);
        }
    }

    const onEnter = (ev, isObj) => {
        if(ev.code === "Enter" || ev.code === "NumpadEnter"){
            const val = ev.target.value;
            isObj.title = val;
            setObj([...obj]);

            onClickList(isObj)
        }
    }

    const setList = () => {
        const setChild = (lists) => {
            return (
                <ul>
                    {
                        lists.map(item => {
                            return (
                                <li key={item.id}>
                                    {
                                        item.title.length > 0 ? (
                                            <button onClick={() => onClickList(item)}>{item.title}</button>
                                        ) : (
                                            <input onKeyDown={e => onEnter(e, item)} type="text"></input>
                                        )
                                    }
                                    {
                                        item.children && setChild(item.children)
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            )
        }
        let res = (
            <ul>
                <li>
                    {
                        obj[0].title.length > 0 ? (
                            <button onClick={() => onClickList(obj[0])}>{obj[0].title}</button>
                        ) : (
                            <input onKeyDown={e => onEnter(e, obj[0])} type="text"></input>
                        )
                        
                    }
                    {
                        obj[0].children && setChild(obj[0].children)
                    }
                </li>
            </ul>
        )
        return res
    }

    const onClickLayout = (layoutNumber) => {
        currentObj.layout = layoutNumber;
        setObj([...obj]);
        setIsSelectLayoutsVisible(false);
        setIsEditorVisible(true);
    };

    const saveCurrentData = (editorData) => {
        const newObj = [...obj]

        const onSaveChild = (item) => {
            for(let i=0; i<item.length; i++) {
                if(currentObj.id === item[i].id){
                    item[i].data = editorData;
                    setObj(newObj);
                    return;
                } else {
                    if(item[i].children){
                        onSaveChild(item[i].children);
                    }
                }
            }
        }

        if(newObj[0].id === currentObj.id){
            newObj[0].data = editorData;
            setObj(newObj);
        } else if(newObj[0].children) {
            onSaveChild(newObj[0].children)
        }

        // TODO : 서버에 obj 저장
    }

    const editorView = () => {
        switch(currentObj.layout){
            case 1 :
                return <Editor1 saveCurrentData={saveCurrentData} currentEditorData={currentObj.data} onRunPreview={onRunPreview} />
            case 2 :
                return <Editor2 saveCurrentData={saveCurrentData} currentEditorData={currentObj.data} onRunPreview={onRunPreview} />
            case 3 :
                return <Editor3 saveCurrentData={saveCurrentData} currentEditorData={currentObj.data} onRunPreview={onRunPreview} />
            case 4 :
                return <Editor4 saveCurrentData={saveCurrentData} currentEditorData={currentObj.data} onRunPreview={onRunPreview} />
            case 5 :
                return <Editor5 saveCurrentData={saveCurrentData} currentEditorData={currentObj.data} onRunPreview={onRunPreview} />
            case 6 :
                return <Editor6 saveCurrentData={saveCurrentData} currentEditorData={currentObj.data} onRunPreview={onRunPreview} />
            default :
                return
        }
    }

    const preView = () => {
        switch(currentObj.layout){
            case 1 :
                return <Layout1 layoutData={currentObj.data} />
            case 2 :
                return <Layout2 layoutData={currentObj.data} />
            case 3 :
                return <Layout3 layoutData={currentObj.data} />
            case 4 :
                return <Layout4 layoutData={currentObj.data} />
            case 5 :
                return <Layout5 layoutData={currentObj.data} />
            case 6 :
                return <Layout6 layoutData={currentObj.data} />
            default :
                return
        }
    }

    const onRunPreview = () => {
        setIsPreviewVisible(true);
        setIsEditorVisible(false);
    };

    return (
        <div className="wrap">
            <div className="lnb">
                <div className="header">
                    <button onClick={onAdd}>+</button>
                    <button onClick={onDelete}>-</button>
                </div>
                {obj[0] && setList()}
            </div>
            {
                isSelectLayoutsVisible && (
                    <div className="select-layouts">
                        <button onClick={() => onClickLayout(1)}>LAYOUT1</button>
                        <button onClick={() => onClickLayout(2)}>LAYOUT2</button>
                        <button onClick={() => onClickLayout(3)}>LAYOUT3</button>
                        <button onClick={() => onClickLayout(4)}>LAYOUT4</button>
                        <button onClick={() => onClickLayout(5)}>LAYOUT5</button>
                        <button onClick={() => onClickLayout(6)}>LAYOUT6</button>
                    </div>
                )
            }
            {
                isEditorVisible && editorView()
            }
            {
                isPreviewVisible && preView()
            }
        </div>
    )
}

export default Main;