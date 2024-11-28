import router from '@ohos.router'
import {variables} from "../viewmodel/variables"

@Entry
@Component
struct AddCity {

  //存储当前城市天气
  casts: variables[] = []

  @State AllCityCodeList :Array<number> = [110000,120000,130000,140000,210000,220000,310000]
  @State AllCityNameList :Array<string> = ["北京","天津","河北","山西","辽宁","吉林","上海"]

  //设置当前城市代码列表 用来接收传入数据的载体
  @State cityCodeList :Array<number> = []
  @State cityNameList :Array<string> = []


  onPageShow(){
    let params = router.getParams()
    this.cityCodeList = params["Codes"]
    this.cityNameList = params["Names"]
  }

  build() {
    //加入
    Column(){
      Row(){
        Text("城市管理").fontSize(26).fontColor(Color.Black)
        Blank()
        Button("完成").backgroundColor("").fontSize(26) .fontColor(Color.Black)
          .onClick(()=>{
            router.back({
              url:"pages/Index",
              params:{
                Codes:this.cityCodeList
              }
            })
          })
      }.height("10%").width("95%")
      //城市列表
      Column() {
        List() {
          ForEach(this.AllCityNameList, (name: string) => {

              ListItem() {

                if (this.cityNameList.includes(name)) {
                  Column() {
                    Row() {

                      Text(name).fontSize(35).fontColor(Color.Black).width("60%")

                        .margin({ top: 20, left: 30 })
                      Blank()
                      Text("已添加").backgroundColor("").fontSize(18)
                        .margin({ right: 5 })
                        .opacity(0.8)
                    }.width("100%")
                    Blank()
                    Divider().strokeWidth(5)
                  }.height(90).width("100%").margin({ top: 20 })
                  .backgroundColor("#4682B4")
                } else {
                  Column() {
                    Row() {
                      Text(name).fontSize(35).fontColor(Color.White).width("60%")
                        .margin({ top: 20, left: 30 })
                      Blank()
                      Button("添加").backgroundColor("").fontSize(18)
                        .margin({ right: 5 })
                        .onClick(() => {
                          //根据name 获取所在索引
                          let index = this.AllCityNameList.findIndex(obj => obj === name)
                          console.log("index:" + index)
                          //根据索引获得 城市对应的编码
                          let cityCode: number = this.AllCityCodeList[index]
                          console.log("cityCode= " + cityCode)
                          //将编码加入列表
                          this.cityCodeList.push(cityCode)
                          this.cityNameList.push(name)
                          console.log(this.cityCodeList.toString())
                        })
                    }.width("100%")

                    Blank()
                    Divider().strokeWidth(5)
                  }.height(90).width("100%").margin({ top: 20 })
                  .backgroundColor("#87CEEB")
                }
              }
            })
      }.width("100%").height("90%")
    }.width("100%").height("100%").backgroundColor("#646464")
  }
}
}