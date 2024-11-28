import {variables} from "../viewmodel/variables"

@Component
export struct cityView {

  //当前城市天气
  casts: variables[] = []

  @Builder weatherImage(dayweather: string) {   //判断天气情况
    if (dayweather === "晴") {
      Image($r('app.media.sunny')).width(30)
    }
    if (dayweather === "多云") {
      Image($r("app.media.cloudy")).width(30)
    }
    if (dayweather === "阴") {
      Image($r("app.media.cloudy")).width(30)
    }
    if (dayweather.includes("雨")) {
      Image($r("app.media.rainy")).width(30)
    }
  }

  build() {
    //单个tabcontent 展示的所有内容
    Column() {
      ForEach(this.casts, (cast: variables) => {
        if (cast === this.casts[0]) {
          //展示上半部分 图片和当天天气和相关提醒
          Row() {
            if (cast.dayweather === "晴") {
              Image($r('app.media.sunny')).width(240)
            }
            if (cast.dayweather === "多云") {
              Image($r("app.media.cloudy")).width(240)
            }
            if (cast.dayweather === "阴") {
              Image($r("app.media.cloudy")).width(240)
            }
            if (cast.dayweather.includes("雨")) {
              Image($r("app.media.rainy")).width(240)
            }
          }.height("30%")
          Column() {
            //展示天气 温度
            Row() {
              Text(cast.dayweather).fontSize(25).fontColor(Color.Blue).fontWeight(FontWeight.Bold)
              Text("  " + cast.daytemp + "°~" + cast.nighttemp + "° ").fontSize(30).fontColor(Color.Blue).fontWeight(FontWeight.Bold)
              //展示风力 等级
              Text(cast.daywind + "风  ").fontSize(25).fontColor(Color.Blue).fontWeight(FontWeight.Bold)
              Text(cast.daypower + "级").fontSize(25).fontColor(Color.Blue).fontWeight(FontWeight.Bold)
            }
            Row(){if(cast.daytemp <= 0 ||cast.nighttemp <= 0) {Text('适合厚衣物 ').fontSize(25).fontColor(Color.Blue).fontWeight(FontWeight.Bold)}
              if(cast.daytemp >= 30 ||cast.nighttemp >= 30) {Text('适合薄外套 ').fontSize(25).fontColor(Color.Blue).fontWeight(FontWeight.Bold)}
              if(cast.daytemp > 0 && cast.daytemp < 30 && cast.nighttemp > 0 && cast.nighttemp < 30) {Text('适合薄外套 ').fontSize(25).fontColor(Color.Blue).fontWeight(FontWeight.Bold)}
              if(cast.dayweather === '晴' || cast.dayweather === '多云') {Text('无需带伞 ').fontSize(25).fontColor(Color.Blue).fontWeight(FontWeight.Bold)}
              if(cast.dayweather === '雨' || cast.dayweather === '阴') {Text('宜带伞 ').fontSize(25).fontColor(Color.Blue).fontWeight(FontWeight.Bold)
            }}
          }.margin({ top: 10 })
        }
      })
      //竖列展示近期天气列表
      Column() {
        //天气列表
        Row() {
          ForEach(this.casts, (cast: variables) => {
            Column() {
              Text(cast.date.substring(5))
              this.weatherImage(cast.dayweather)
              Blank()
              Text(cast.daytemp.toString())
              Text(cast.nighttemp.toString())
              Blank()
              this.weatherImage(cast.dayweather)
            }.height("90%").width("20%")
          })
        }.width("80%").height("60%").backgroundColor("#54545435").opacity(0.5).justifyContent(FlexAlign.SpaceAround)
        Text("查看近期天气").fontColor(Color.Black).fontSize(26).margin({ top: 30 })
        //展示底部数据源
        Row(){
          Text("部分气象数据来自 高德地图").fontColor(Color.Black).fontSize(20).margin({ top: 30 })
        }
      }.height("45%").width("130%")
    }.width("100%").height("100%")
  }
}
