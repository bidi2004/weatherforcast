import http from '@ohos:net.http';
export class WeatherViewModel {
    //获取数据
    getWeather() {
        return new Promise((resolve, reject) => {
            //创建
            let request = http.createHttp();
            let url = "https://restapi.amap.com/v3/weather/weatherInfo?key=a8e665a4907d417eff4cc99e0a1899f4&city=110000&extensions=all";
            let options = {
                method: http.RequestMethod.GET,
                header: { 'Content-Type': 'application/json' },
            };
            let result = request.request(url, options);
            result.then((res) => {
                if (res.responseCode === 200) {
                    console.log(res.result.toString());
                    resolve(JSON.parse(res.result.toString()));
                }
            }).catch(() => {
            });
        });
    }
}
export default new WeatherViewModel();
//# sourceMappingURL=WeatherViewModel.js.map