import http from '@ohos:net.http';
export class WeatherUtilModel {
    //获取数据
    getWeather(cityCode) {
        return new Promise((resolve, reject) => {
            //创建
            let request = http.createHttp();
            let url = `https://restapi.amap.com/v3/weather/weatherInfo?key=a8e665a4907d417eff4cc99e0a1899f4&city=${cityCode}&extensions=all`;
            let options = {
                method: http.RequestMethod.GET,
                header: { 'Content-Type': 'application/json' },
            };
            let result = request.request(url, options);
            result.then((res) => {
                if (res.responseCode === 200) {
                    // console.log(res.result.toString())
                    resolve(JSON.parse(res.result.toString()));
                }
            }).catch((err) => {
                console.log(err);
            });
        });
    }
    //直接获取所有数据
    async getWeathers(cityCodeList) {
        let WeathersDate = [];
        let promises = [];
        for (let i = 0; i < cityCodeList.length; i++) {
            promises.push(this.getWeather(cityCodeList[i]));
        }
        await Promise.all(promises).then(result => {
            for (const element of result) {
                console.log(element.forecasts[0].city);
            }
            WeathersDate = result;
        });
        return WeathersDate;
    }
}
let getWeatherUtil = new WeatherUtilModel();
export default getWeatherUtil;
//# sourceMappingURL=WeatherUtilModel.js.map