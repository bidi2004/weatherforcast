import getWeatherUtil from "../viewmodel/WeatherGetNumber"
import { WeatherState} from "../viewmodel/WeatherState"
import { cityView } from '../viewmodel/homepage'
import router from '@ohos.router'


@Entry
@Component
struct Index {

  //城市的信息集合
  @State cityWeatherList: Array<WeatherState> = []
  //城市的名字集合
  @State cityNameList: Array<string> = []
  //当前获得的城市代码列表
  @State cityCodeList: Array<number> = [110000,120000]
  //当前使用的tab组件索引
  @State cityIndex: number = 0
  //tab控制器
  tabcontroller: TabsController = new TabsController()


  onPageShow() {
    let params = router.getParams()
    if (params) {
      this.cityCodeList = params["Codes"]
      this.cityWeatherList = []
      this.cityNameList = []
      this.initData()
    }
  }


  //tarBar 自定义函数
  @Builder tabBuild(index: number) {
    Circle({ width: 10, height: 10 }).fill(this.cityIndex === index ? Color.White : Color.Gray).opacity(0.3)
  }

  aboutToAppear() {
    this.initData()
  }

  async  initData() {
    //所有数据的集合
   let result :Array<WeatherState> = await getWeatherUtil.getWeathers(this.cityCodeList)

    for (let i = 0; i < result.length; i++) {
        let ACityWeather = new WeatherState();
        ACityWeather = result[i]
        this.cityWeatherList.push(ACityWeather)
        let  cityName = this.cityWeatherList[i].forecasts[0].city
        this.cityNameList.push(cityName)
    }
  }


  build() {
    Column() {
      //列出城市选择和城市标题
      Row() {
        Button("+").fontSize(25).fontColor(Color.Gray).opacity(0.7).backgroundColor("#87CEEB").margin({ bottom: 15 }).onClick(() => {
            router.pushUrl({
              url: "pages/AddCity",
              params: {
                Codes: this.cityCodeList,
                Names: this.cityNameList
              }
            })
          })
        Text(this.cityNameList[this.cityIndex]).fontSize(30).fontColor(Color.Black)
        Button("更多").fontSize(25).fontColor(Color.Gray).opacity(0.7).backgroundColor("#87CEEB").margin({ bottom: 15 })
          .onClick(() => {
            AlertDialog.show({ title: "删除",
              message: `要删除${this.cityNameList[this.cityIndex]}吗？`,
              confirm: {
                value: "确定",
                action: () => {
                  this.cityNameList = this.cityNameList.filter(item => item !== this.cityNameList[this.cityIndex])
                  this.cityCodeList = this.cityCodeList.filter(item => item !== this.cityCodeList[this.cityIndex])
                  this.cityWeatherList = this.cityWeatherList.filter(item => item !== this.cityWeatherList[this.cityIndex])

                }
              }
            })
          })
      }.height("10%").width("100%").justifyContent(FlexAlign.SpaceBetween)


      //城市选择转换
      Tabs({ barPosition: BarPosition.Start, controller: this.tabcontroller }) {
        ForEach(this.cityWeatherList, (cityWeatherList: WeatherState) => {
          TabContent() {
            cityView({ casts: cityWeatherList.forecasts[0].casts })
          }.tabBar(this.tabBuild(this.cityWeatherList.findIndex(obj => obj === cityWeatherList)))
        })

      }
      .barHeight(20).barWidth(40)
      .onChange((index: number) => {
        this.cityIndex = index
      })

    }.backgroundColor("#FFFFFF")
    .width("100%").height("100%")

  }
}