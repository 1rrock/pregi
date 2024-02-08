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

    // useEffect(() => {
    //     console.log(currentObj)
    // }, [currentObj])

    // useEffect(() => {
    //     console.error(obj)
    // }, [obj])

    const getCreateID = () => new Date().getTime();

    const onClickList = (pickObj) => {
        setCurrentObj(pickObj)

        if(!pickObj.data){
            setIsSelectLayoutsVisible(true);
        }
    }

    const onAdd = () => {
        const addChild = () => {
            if(!currentObj.children){
                currentObj.children = [];
            }

            currentObj.children.push({
                title: '',
                id: getCreateID()
            });
            setObj([...obj]);
        }

        const newObj = [...obj];
        if(!newObj[0]){
            newObj[0] = {
                title: '',
                id: getCreateID()
            }
            setObj(newObj)
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
        // console.log(currentObj.id)
        if(newObj[0].children){
            onDeleteChild(newObj[0].children);
        }
    }

    const onEnter = (ev, isObj) => {
        if(ev.code === "Enter" || ev.code === "NumpadEnter"){
            const val = ev.target.value;
            isObj.title = val;
            setObj([...obj]);
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
        // setIsEditorVisible(true);
        editorView(currentObj);
    };

    const editorView = (currentObj) => {
        // setIsEditorVisible()
        console.log(currentObj)
    }

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
            {/* {
                isEditorVisible && (
                    editorView()
                )
            } */}
        </div>
    )
}

export default Main;