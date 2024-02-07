const Main = () => {
    const data = [
        {
            layout : 1,
            id: 1,
            title: '메인화면',
            data: {
                bgColor: '#fff',
                T_1: {
                    bgColor: null,
                    text: '',
                },
                T_2: {
                    bgColor: null,
                    text: '',
                },
                T_3: {
                    bgColor: null,
                    text: '',
                },
                SET_1: {
                    TI_1: {
                        bgColor: null,
                        img: null,
                        text: '',
                    },
                    TI_2: {
                        bgColor: null,
                        img: null,
                        text: '',
                    },
                    TI_3: {
                        bgColor: null,
                        img: null,
                        text: '',
                    },
                    TI_4: {
                        bgColor: null,
                        img: null,
                        text: '',
                    },
                    TI_5: {
                        bgColor: null,
                        img: null,
                        text: '',
                    },
                }
            },
            childs: [
                {
                    layout: 1,
                    id:2,
                    title: '1뎁스01페이지',
                    data: {
                        bgColor: '#fff',
                        T_1: {
                            bgColor: null,
                            text: '',
                        },
                        T_2: {
                            bgColor: null,
                            text: '',
                        },
                        T_3: {
                            bgColor: null,
                            text: '',
                        },
                        SET_1: {
                            TI_1: {
                                bgColor: null,
                                img: null,
                                text: '',
                            },
                            TI_2: {
                                bgColor: null,
                                img: null,
                                text: '',
                            },
                            TI_3: {
                                bgColor: null,
                                img: null,
                                text: '',
                            },
                            TI_4: {
                                bgColor: null,
                                img: null,
                                text: '',
                            },
                            TI_5: {
                                bgColor: null,
                                img: null,
                                text: '',
                            },
                        }
                    },
                },
                {
                    layout: 1,
                    id:3,
                    title: '1뎁스02페이지',
                    data: {
                        bgColor: '#fff',
                        T_1: {
                            bgColor: null,
                            text: '',
                        },
                        T_2: {
                            bgColor: null,
                            text: '',
                        },
                        T_3: {
                            bgColor: null,
                            text: '',
                        },
                        SET_1: {
                            TI_1: {
                                bgColor: null,
                                img: null,
                                text: '',
                            },
                            TI_2: {
                                bgColor: null,
                                img: null,
                                text: '',
                            },
                            TI_3: {
                                bgColor: null,
                                img: null,
                                text: '',
                            },
                            TI_4: {
                                bgColor: null,
                                img: null,
                                text: '',
                            },
                            TI_5: {
                                bgColor: null,
                                img: null,
                                text: '',
                            },
                        }
                    },
                    childs: [
                        {
                            layout: 1,
                            id:4,
                            title: '2뎁스01페이지',
                            data: {
                                bgColor: '#fff',
                                T_1: {
                                    bgColor: null,
                                    text: '',
                                },
                                T_2: {
                                    bgColor: null,
                                    text: '',
                                },
                                T_3: {
                                    bgColor: null,
                                    text: '',
                                },
                                SET_1: {
                                    TI_1: {
                                        bgColor: null,
                                        img: null,
                                        text: '',
                                    },
                                    TI_2: {
                                        bgColor: null,
                                        img: null,
                                        text: '',
                                    },
                                    TI_3: {
                                        bgColor: null,
                                        img: null,
                                        text: '',
                                    },
                                    TI_4: {
                                        bgColor: null,
                                        img: null,
                                        text: '',
                                    },
                                    TI_5: {
                                        bgColor: null,
                                        img: null,
                                        text: '',
                                    },
                                }
                            },
                        },   
                    ]
                }
            ]
        }
    ];

    const onClickList = (data) => {
        // console.log(data)
    }

    const setList = () => {
        const setChild = (lists) => {
            return (
                <ul>
                    {
                        lists.map(e => {
                            return (
                                <li key={e.id}>
                                    <button onClick={() => onClickList(e.data)}>{e.title}</button>
                                    {
                                        e.childs && setChild(e.childs)
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
                    <button onClick={() => onClickList(data[0].data)}>{data[0].title}</button>
                    {
                        data[0].childs && setChild(data[0].childs)
                    }
                </li>
            </ul>
        )
        return res
    }
    return (
        <div className="lnb">
            <div className="header">
                <button>+</button>
                <button>-</button>
            </div>
            {setList()}
        </div>
    )
}

export default Main;