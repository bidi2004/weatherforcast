import getWeatherUtil from '@bundle:com.itbaizhan.myapplication/entry/ets/viewmodel/WeatherGetNumber';
import { WeatherState } from '@bundle:com.itbaizhan.myapplication/entry/ets/viewmodel/WeatherState';
import { cityView } from '@bundle:com.itbaizhan.myapplication/entry/ets/viewmodel/homepage';
import router from '@ohos:router';
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__cityWeatherList = new ObservedPropertyObjectPU([]
        //城市的名字集合
        , this, "cityWeatherList");
        this.__cityNameList = new ObservedPropertyObjectPU([]
        //当前获得的城市代码列表
        , this, "cityNameList");
        this.__cityCodeList = new ObservedPropertyObjectPU([110000, 120000]
        //当前使用的tab组件索引
        , this, "cityCodeList");
        this.__cityIndex = new ObservedPropertySimplePU(0
        //tab控制器
        , this, "cityIndex");
        this.tabcontroller = new TabsController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.cityWeatherList !== undefined) {
            this.cityWeatherList = params.cityWeatherList;
        }
        if (params.cityNameList !== undefined) {
            this.cityNameList = params.cityNameList;
        }
        if (params.cityCodeList !== undefined) {
            this.cityCodeList = params.cityCodeList;
        }
        if (params.cityIndex !== undefined) {
            this.cityIndex = params.cityIndex;
        }
        if (params.tabcontroller !== undefined) {
            this.tabcontroller = params.tabcontroller;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__cityWeatherList.purgeDependencyOnElmtId(rmElmtId);
        this.__cityNameList.purgeDependencyOnElmtId(rmElmtId);
        this.__cityCodeList.purgeDependencyOnElmtId(rmElmtId);
        this.__cityIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__cityWeatherList.aboutToBeDeleted();
        this.__cityNameList.aboutToBeDeleted();
        this.__cityCodeList.aboutToBeDeleted();
        this.__cityIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get cityWeatherList() {
        return this.__cityWeatherList.get();
    }
    set cityWeatherList(newValue) {
        this.__cityWeatherList.set(newValue);
    }
    get cityNameList() {
        return this.__cityNameList.get();
    }
    set cityNameList(newValue) {
        this.__cityNameList.set(newValue);
    }
    get cityCodeList() {
        return this.__cityCodeList.get();
    }
    set cityCodeList(newValue) {
        this.__cityCodeList.set(newValue);
    }
    get cityIndex() {
        return this.__cityIndex.get();
    }
    set cityIndex(newValue) {
        this.__cityIndex.set(newValue);
    }
    onPageShow() {
        let params = router.getParams();
        if (params) {
            this.cityCodeList = params["Codes"];
            this.cityWeatherList = [];
            this.cityNameList = [];
            this.initData();
        }
    }
    //tarBar 自定义函数
    tabBuild(index, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Circle.create({ width: 10, height: 10 });
            Circle.fill(this.cityIndex === index ? Color.White : Color.Gray);
            Circle.opacity(0.3);
            if (!isInitialRender) {
                Circle.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
    }
    aboutToAppear() {
        this.initData();
    }
    async initData() {
        //所有数据的集合
        let result = await getWeatherUtil.getWeathers(this.cityCodeList);
        for (let i = 0; i < result.length; i++) {
            let ACityWeather = new WeatherState();
            ACityWeather = result[i];
            this.cityWeatherList.push(ACityWeather);
            let cityName = this.cityWeatherList[i].forecasts[0].city;
            this.cityNameList.push(cityName);
        }
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.backgroundColor("#FFFFFF");
            Column.width("100%");
            Column.height("100%");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //列出城市选择和城市标题
            Row.create();
            //列出城市选择和城市标题
            Row.height("10%");
            //列出城市选择和城市标题
            Row.width("100%");
            //列出城市选择和城市标题
            Row.justifyContent(FlexAlign.SpaceBetween);
            if (!isInitialRender) {
                //列出城市选择和城市标题
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel("+");
            Button.fontSize(25);
            Button.fontColor(Color.Gray);
            Button.opacity(0.7);
            Button.backgroundColor("#87CEEB");
            Button.margin({ bottom: 15 });
            Button.onClick(() => {
                router.pushUrl({
                    url: "pages/AddCity",
                    params: {
                        Codes: this.cityCodeList,
                        Names: this.cityNameList
                    }
                });
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.cityNameList[this.cityIndex]);
            Text.fontSize(30);
            Text.fontColor(Color.Black);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel("更多");
            Button.fontSize(25);
            Button.fontColor(Color.Gray);
            Button.opacity(0.7);
            Button.backgroundColor("#87CEEB");
            Button.margin({ bottom: 15 });
            Button.onClick(() => {
                AlertDialog.show({ title: "删除",
                    message: `要删除${this.cityNameList[this.cityIndex]}吗？`,
                    confirm: {
                        value: "确定",
                        action: () => {
                            this.cityNameList = this.cityNameList.filter(item => item !== this.cityNameList[this.cityIndex]);
                            this.cityCodeList = this.cityCodeList.filter(item => item !== this.cityCodeList[this.cityIndex]);
                            this.cityWeatherList = this.cityWeatherList.filter(item => item !== this.cityWeatherList[this.cityIndex]);
                        }
                    }
                });
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        //列出城市选择和城市标题
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //城市选择转换
            Tabs.create({ barPosition: BarPosition.Start, controller: this.tabcontroller });
            //城市选择转换
            Tabs.barHeight(20);
            //城市选择转换
            Tabs.barWidth(40);
            //城市选择转换
            Tabs.onChange((index) => {
                this.cityIndex = index;
            });
            if (!isInitialRender) {
                //城市选择转换
                Tabs.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const cityWeatherList = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    TabContent.create(() => {
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new cityView(this, { casts: cityWeatherList.forecasts[0].casts }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                    });
                    TabContent.tabBar({ builder: () => {
                            this.tabBuild.call(this, this.cityWeatherList.findIndex(obj => obj === cityWeatherList));
                        } });
                    if (!isInitialRender) {
                        TabContent.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                TabContent.pop();
            };
            this.forEachUpdateFunction(elmtId, this.cityWeatherList, forEachItemGenFunction);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        //城市选择转换
        Tabs.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Index(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Index.js.map