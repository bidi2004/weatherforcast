import {WeatherState} from "./WeatherState"
import http from '@ohos.net.http';

export  class WeatherGetNumber{

  //云端获取数据
  getWeather(cityCode:number){
    return new Promise<WeatherState>((resolve,reject)=>{
      //创建
      let request = http.createHttp()
      let url= `https://restapi.amap.com/v3/weather/weatherInfo?city=${cityCode}&key=60ed3ca1656432913032e8109db2aecd&extensions=all`

      let options = {
        method:http.RequestMethod.GET,
        header:{'Content-Type':'application/json'},
      } as http.HttpRequestOptions
      let result = request.request(url,options)

      result.then((res)=>{
        if (res.responseCode === 200) {
          resolve( JSON.parse(res.result.toString()))
        }
      }).catch((err)=>{
        console.log(err)
      })
    })
  }
  //创建函数直接获取所有数据
  async  getWeathers (cityCodeList:Array<number>){
    let WeathersDate: Array<WeatherState> = []
    let promises :Array<Promise<WeatherState>> = []
    for (let i = 0; i < cityCodeList.length; i++) {
      promises.push(this.getWeather(cityCodeList[i]))
    }
    await Promise.all(promises).then(result =>{
      for (const element of result) {
        console.log(element.forecasts[0].city);
      }
      WeathersDate = result
    })
    return WeathersDate
  }
}

let getWeatherUtil = new WeatherGetNumber()
export default getWeatherUtil as WeatherGetNumber
