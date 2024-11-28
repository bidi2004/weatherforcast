export class cityView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.casts = [];
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.casts !== undefined) {
            this.casts = params.casts;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    weatherImage(dayweather, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (dayweather === "晴") {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777225, "type": 20000, params: [], "bundleName": "com.itbaizhan.myapplication", "moduleName": "entry" });
                        Image.width(30);
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (dayweather === "多云") {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777223, "type": 20000, params: [], "bundleName": "com.itbaizhan.myapplication", "moduleName": "entry" });
                        Image.width(30);
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (dayweather === "阴") {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777223, "type": 20000, params: [], "bundleName": "com.itbaizhan.myapplication", "moduleName": "entry" });
                        Image.width(30);
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (dayweather.includes("雨")) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777224, "type": 20000, params: [], "bundleName": "com.itbaizhan.myapplication", "moduleName": "entry" });
                        Image.width(30);
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //单个tabcontent 展示的所有内容
            Column.create();
            //单个tabcontent 展示的所有内容
            Column.width("100%");
            //单个tabcontent 展示的所有内容
            Column.height("100%");
            if (!isInitialRender) {
                //单个tabcontent 展示的所有内容
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const cast = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    If.create();
                    if (cast === this.casts[0]) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                //上半部分 图片+当天天气
                                //图片
                                Row.create();
                                //上半部分 图片+当天天气
                                //图片
                                Row.height("30%");
                                if (!isInitialRender) {
                                    //上半部分 图片+当天天气
                                    //图片
                                    Row.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                If.create();
                                if (cast.dayweather === "晴") {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Image.create({ "id": 16777225, "type": 20000, params: [], "bundleName": "com.itbaizhan.myapplication", "moduleName": "entry" });
                                            Image.width(240);
                                            if (!isInitialRender) {
                                                Image.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                    });
                                }
                                else {
                                    If.branchId(1);
                                }
                                if (!isInitialRender) {
                                    If.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            If.pop();
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                If.create();
                                if (cast.dayweather === "多云") {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Image.create({ "id": 16777223, "type": 20000, params: [], "bundleName": "com.itbaizhan.myapplication", "moduleName": "entry" });
                                            Image.width(240);
                                            if (!isInitialRender) {
                                                Image.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                    });
                                }
                                else {
                                    If.branchId(1);
                                }
                                if (!isInitialRender) {
                                    If.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            If.pop();
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                If.create();
                                if (cast.dayweather === "阴") {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Image.create({ "id": 16777223, "type": 20000, params: [], "bundleName": "com.itbaizhan.myapplication", "moduleName": "entry" });
                                            Image.width(240);
                                            if (!isInitialRender) {
                                                Image.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                    });
                                }
                                else {
                                    If.branchId(1);
                                }
                                if (!isInitialRender) {
                                    If.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            If.pop();
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                If.create();
                                if (cast.dayweather.includes("雨")) {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Image.create({ "id": 16777224, "type": 20000, params: [], "bundleName": "com.itbaizhan.myapplication", "moduleName": "entry" });
                                            Image.width(240);
                                            if (!isInitialRender) {
                                                Image.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                    });
                                }
                                else {
                                    If.branchId(1);
                                }
                                if (!isInitialRender) {
                                    If.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            If.pop();
                            //上半部分 图片+当天天气
                            //图片
                            Row.pop();
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                Column.create();
                                Column.margin({ top: 10 });
                                if (!isInitialRender) {
                                    Column.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                //天气 温度
                                Row.create();
                                if (!isInitialRender) {
                                    //天气 温度
                                    Row.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                Text.create(cast.dayweather);
                                Text.fontSize(25);
                                Text.fontColor(Color.Blue);
                                Text.fontWeight(FontWeight.Bold);
                                if (!isInitialRender) {
                                    Text.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            Text.pop();
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                Text.create("  " + cast.daytemp + "°~" + cast.nighttemp + "° ");
                                Text.fontSize(30);
                                Text.fontColor(Color.Blue);
                                Text.fontWeight(FontWeight.Bold);
                                if (!isInitialRender) {
                                    Text.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            Text.pop();
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                //风力 等级
                                Text.create(cast.daywind + "风  ");
                                //风力 等级
                                Text.fontSize(25);
                                //风力 等级
                                Text.fontColor(Color.Blue);
                                //风力 等级
                                Text.fontWeight(FontWeight.Bold);
                                if (!isInitialRender) {
                                    //风力 等级
                                    Text.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            //风力 等级
                            Text.pop();
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                Text.create(cast.daypower + "级");
                                Text.fontSize(25);
                                Text.fontColor(Color.Blue);
                                Text.fontWeight(FontWeight.Bold);
                                if (!isInitialRender) {
                                    Text.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            Text.pop();
                            //天气 温度
                            Row.pop();
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                Row.create();
                                if (!isInitialRender) {
                                    Row.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                If.create();
                                if (cast.daytemp <= 0 || cast.nighttemp <= 0) {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create('适合厚衣物 ');
                                            Text.fontSize(25);
                                            Text.fontColor(Color.Blue);
                                            Text.fontWeight(FontWeight.Bold);
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
                                    });
                                }
                                else {
                                    If.branchId(1);
                                }
                                if (!isInitialRender) {
                                    If.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            If.pop();
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                If.create();
                                if (cast.daytemp >= 30 || cast.nighttemp >= 30) {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create('适合薄外套 ');
                                            Text.fontSize(25);
                                            Text.fontColor(Color.Blue);
                                            Text.fontWeight(FontWeight.Bold);
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
                                    });
                                }
                                else {
                                    If.branchId(1);
                                }
                                if (!isInitialRender) {
                                    If.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            If.pop();
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                If.create();
                                if (cast.daytemp > 0 && cast.daytemp < 30 && cast.nighttemp > 0 && cast.nighttemp < 30) {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create('适合薄外套 ');
                                            Text.fontSize(25);
                                            Text.fontColor(Color.Blue);
                                            Text.fontWeight(FontWeight.Bold);
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
                                    });
                                }
                                else {
                                    If.branchId(1);
                                }
                                if (!isInitialRender) {
                                    If.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            If.pop();
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                If.create();
                                if (cast.dayweather === '晴' || cast.dayweather === '多云') {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create('无需带伞 ');
                                            Text.fontSize(25);
                                            Text.fontColor(Color.Blue);
                                            Text.fontWeight(FontWeight.Bold);
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
                                    });
                                }
                                else {
                                    If.branchId(1);
                                }
                                if (!isInitialRender) {
                                    If.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            If.pop();
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                If.create();
                                if (cast.dayweather === '雨' || cast.dayweather === '阴') {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            Text.create('宜带伞 ');
                                            Text.fontSize(25);
                                            Text.fontColor(Color.Blue);
                                            Text.fontWeight(FontWeight.Bold);
                                            if (!isInitialRender) {
                                                Text.pop();
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                        Text.pop();
                                    });
                                }
                                else {
                                    If.branchId(1);
                                }
                                if (!isInitialRender) {
                                    If.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            If.pop();
                            Row.pop();
                            Column.pop();
                        });
                    }
                    else {
                        If.branchId(1);
                    }
                    if (!isInitialRender) {
                        If.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                If.pop();
            };
            this.forEachUpdateFunction(elmtId, this.casts, forEachItemGenFunction);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //近期天气列表
            Column.create();
            //近期天气列表
            Column.height("45%");
            //近期天气列表
            Column.width("130%");
            if (!isInitialRender) {
                //近期天气列表
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //天气列表
            Row.create();
            //天气列表
            Row.width("80%");
            //天气列表
            Row.height("60%");
            //天气列表
            Row.backgroundColor("#54545435");
            //天气列表
            Row.opacity(0.5);
            //天气列表
            Row.justifyContent(FlexAlign.SpaceAround);
            if (!isInitialRender) {
                //天气列表
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const cast = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.height("90%");
                    Column.width("20%");
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(cast.date.substring(5));
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.weatherImage.bind(this)(cast.dayweather);
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
                    Text.create(cast.daytemp.toString());
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(cast.nighttemp.toString());
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
                this.weatherImage.bind(this)(cast.dayweather);
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.casts, forEachItemGenFunction);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        //天气列表
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("查看近期天气");
            Text.fontColor(Color.Black);
            Text.fontSize(26);
            Text.margin({ top: 30 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("部分气象数据来自 高德地图");
            Text.fontColor(Color.Black);
            Text.fontSize(20);
            Text.margin({ top: 30 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        //近期天气列表
        Column.pop();
        //单个tabcontent 展示的所有内容
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=homepage.js.map