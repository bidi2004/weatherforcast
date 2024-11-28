import router from '@ohos:router';
class AddCity extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.casts = [];
        this.__AllCityCodeList = new ObservedPropertyObjectPU([110000, 120000, 130000, 140000, 210000, 220000, 310000], this, "AllCityCodeList");
        this.__AllCityNameList = new ObservedPropertyObjectPU(["北京", "天津", "河北", "山西", "辽宁", "吉林", "上海"]
        //设置当前城市代码列表 用来接收传入数据的载体
        , this, "AllCityNameList");
        this.__cityCodeList = new ObservedPropertyObjectPU([], this, "cityCodeList");
        this.__cityNameList = new ObservedPropertyObjectPU([], this, "cityNameList");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.casts !== undefined) {
            this.casts = params.casts;
        }
        if (params.AllCityCodeList !== undefined) {
            this.AllCityCodeList = params.AllCityCodeList;
        }
        if (params.AllCityNameList !== undefined) {
            this.AllCityNameList = params.AllCityNameList;
        }
        if (params.cityCodeList !== undefined) {
            this.cityCodeList = params.cityCodeList;
        }
        if (params.cityNameList !== undefined) {
            this.cityNameList = params.cityNameList;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__AllCityCodeList.purgeDependencyOnElmtId(rmElmtId);
        this.__AllCityNameList.purgeDependencyOnElmtId(rmElmtId);
        this.__cityCodeList.purgeDependencyOnElmtId(rmElmtId);
        this.__cityNameList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__AllCityCodeList.aboutToBeDeleted();
        this.__AllCityNameList.aboutToBeDeleted();
        this.__cityCodeList.aboutToBeDeleted();
        this.__cityNameList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get AllCityCodeList() {
        return this.__AllCityCodeList.get();
    }
    set AllCityCodeList(newValue) {
        this.__AllCityCodeList.set(newValue);
    }
    get AllCityNameList() {
        return this.__AllCityNameList.get();
    }
    set AllCityNameList(newValue) {
        this.__AllCityNameList.set(newValue);
    }
    get cityCodeList() {
        return this.__cityCodeList.get();
    }
    set cityCodeList(newValue) {
        this.__cityCodeList.set(newValue);
    }
    get cityNameList() {
        return this.__cityNameList.get();
    }
    set cityNameList(newValue) {
        this.__cityNameList.set(newValue);
    }
    onPageShow() {
        let params = router.getParams();
        this.cityCodeList = params["Codes"];
        this.cityNameList = params["Names"];
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //加入
            Column.create();
            if (!isInitialRender) {
                //加入
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.height("10%");
            Row.width("95%");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("城市管理");
            Text.fontSize(26);
            Text.fontColor(Color.Black);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel("完成");
            Button.backgroundColor("");
            Button.fontSize(26);
            Button.fontColor(Color.Black);
            Button.onClick(() => {
                router.back({
                    url: "pages/Index",
                    params: {
                        Codes: this.cityCodeList
                    }
                });
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //城市列表
            Column.create();
            //城市列表
            Column.width("100%");
            //城市列表
            Column.height("100%");
            //城市列表
            Column.backgroundColor("#646464");
            if (!isInitialRender) {
                //城市列表
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create();
            List.width("100%");
            List.height("90%");
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const name = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        ListItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            If.create();
                            if (this.cityNameList.includes(name)) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Column.create();
                                        Column.height(90);
                                        Column.width("100%");
                                        Column.margin({ top: 20 });
                                        Column.backgroundColor("#4682B4");
                                        if (!isInitialRender) {
                                            Column.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Row.create();
                                        Row.width("100%");
                                        if (!isInitialRender) {
                                            Row.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Text.create(name);
                                        Text.fontSize(35);
                                        Text.fontColor(Color.Black);
                                        Text.width("60%");
                                        Text.margin({ top: 20, left: 30 });
                                        if (!isInitialRender) {
                                            Text.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Text.pop();
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Blank.create();
                                        if (!isInitialRender) {
                                            Blank.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Blank.pop();
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Text.create("已添加");
                                        Text.backgroundColor("");
                                        Text.fontSize(18);
                                        Text.margin({ right: 5 });
                                        Text.opacity(0.8);
                                        if (!isInitialRender) {
                                            Text.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Text.pop();
                                    Row.pop();
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Blank.create();
                                        if (!isInitialRender) {
                                            Blank.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Blank.pop();
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Divider.create();
                                        Divider.strokeWidth(5);
                                        if (!isInitialRender) {
                                            Divider.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Column.pop();
                                });
                            }
                            else {
                                this.ifElseBranchUpdateFunction(1, () => {
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Column.create();
                                        Column.height(90);
                                        Column.width("100%");
                                        Column.margin({ top: 20 });
                                        Column.backgroundColor("#87CEEB");
                                        if (!isInitialRender) {
                                            Column.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Row.create();
                                        Row.width("100%");
                                        if (!isInitialRender) {
                                            Row.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Text.create(name);
                                        Text.fontSize(35);
                                        Text.fontColor(Color.White);
                                        Text.width("60%");
                                        Text.margin({ top: 20, left: 30 });
                                        if (!isInitialRender) {
                                            Text.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Text.pop();
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Blank.create();
                                        if (!isInitialRender) {
                                            Blank.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Blank.pop();
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Button.createWithLabel("添加");
                                        Button.backgroundColor("");
                                        Button.fontSize(18);
                                        Button.margin({ right: 5 });
                                        Button.onClick(() => {
                                            //根据name 获取所在索引
                                            let index = this.AllCityNameList.findIndex(obj => obj === name);
                                            console.log("index:" + index);
                                            //根据索引获得 城市对应的编码
                                            let cityCode = this.AllCityCodeList[index];
                                            console.log("cityCode= " + cityCode);
                                            //将编码加入列表
                                            this.cityCodeList.push(cityCode);
                                            this.cityNameList.push(name);
                                            console.log(this.cityCodeList.toString());
                                        });
                                        if (!isInitialRender) {
                                            Button.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Button.pop();
                                    Row.pop();
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Blank.create();
                                        if (!isInitialRender) {
                                            Blank.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Blank.pop();
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Divider.create();
                                        Divider.strokeWidth(5);
                                        if (!isInitialRender) {
                                            Divider.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Column.pop();
                                });
                            }
                            if (!isInitialRender) {
                                If.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        If.pop();
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            If.create();
                            if (this.cityNameList.includes(name)) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Column.create();
                                        Column.height(90);
                                        Column.width("100%");
                                        Column.margin({ top: 20 });
                                        Column.backgroundColor("#4682B4");
                                        if (!isInitialRender) {
                                            Column.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Row.create();
                                        Row.width("100%");
                                        if (!isInitialRender) {
                                            Row.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Text.create(name);
                                        Text.fontSize(35);
                                        Text.fontColor(Color.Black);
                                        Text.width("60%");
                                        Text.margin({ top: 20, left: 30 });
                                        if (!isInitialRender) {
                                            Text.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Text.pop();
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Blank.create();
                                        if (!isInitialRender) {
                                            Blank.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Blank.pop();
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Text.create("已添加");
                                        Text.backgroundColor("");
                                        Text.fontSize(18);
                                        Text.margin({ right: 5 });
                                        Text.opacity(0.8);
                                        if (!isInitialRender) {
                                            Text.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Text.pop();
                                    Row.pop();
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Blank.create();
                                        if (!isInitialRender) {
                                            Blank.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Blank.pop();
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Divider.create();
                                        Divider.strokeWidth(5);
                                        if (!isInitialRender) {
                                            Divider.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Column.pop();
                                });
                            }
                            else {
                                this.ifElseBranchUpdateFunction(1, () => {
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Column.create();
                                        Column.height(90);
                                        Column.width("100%");
                                        Column.margin({ top: 20 });
                                        Column.backgroundColor("#87CEEB");
                                        if (!isInitialRender) {
                                            Column.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Row.create();
                                        Row.width("100%");
                                        if (!isInitialRender) {
                                            Row.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Text.create(name);
                                        Text.fontSize(35);
                                        Text.fontColor(Color.White);
                                        Text.width("60%");
                                        Text.margin({ top: 20, left: 30 });
                                        if (!isInitialRender) {
                                            Text.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Text.pop();
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Blank.create();
                                        if (!isInitialRender) {
                                            Blank.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Blank.pop();
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Button.createWithLabel("添加");
                                        Button.backgroundColor("");
                                        Button.fontSize(18);
                                        Button.margin({ right: 5 });
                                        Button.onClick(() => {
                                            //根据name 获取所在索引
                                            let index = this.AllCityNameList.findIndex(obj => obj === name);
                                            console.log("index:" + index);
                                            //根据索引获得 城市对应的编码
                                            let cityCode = this.AllCityCodeList[index];
                                            console.log("cityCode= " + cityCode);
                                            //将编码加入列表
                                            this.cityCodeList.push(cityCode);
                                            this.cityNameList.push(name);
                                            console.log(this.cityCodeList.toString());
                                        });
                                        if (!isInitialRender) {
                                            Button.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Button.pop();
                                    Row.pop();
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Blank.create();
                                        if (!isInitialRender) {
                                            Blank.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Blank.pop();
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Divider.create();
                                        Divider.strokeWidth(5);
                                        if (!isInitialRender) {
                                            Divider.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Column.pop();
                                });
                            }
                            if (!isInitialRender) {
                                If.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        If.pop();
                        ListItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, this.AllCityNameList, forEachItemGenFunction);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
        //城市列表
        Column.pop();
        //加入
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new AddCity(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=AddCity.js.map