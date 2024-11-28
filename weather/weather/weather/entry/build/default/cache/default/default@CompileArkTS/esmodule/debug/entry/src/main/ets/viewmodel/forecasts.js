import { casts } from '@bundle:com.itbaizhan.myapplication/entry/ets/viewmodel/casts';
export class forecasts {
    constructor(forecasts) {
        this.city = forecasts.city;
        this.adcode = forecasts.adcode;
        for (let i = 0; i < forecasts.casts.length; i++) {
            this.casts.push(new casts(forecasts.casts[i]));
        }
    }
    init(forecasts) {
        this.city = forecasts.city;
        this.adcode = forecasts.adcode;
        for (let i = 0; i < forecasts.casts.length; i++) {
            this.casts.push(new casts(forecasts.casts[i]));
        }
    }
}
//# sourceMappingURL=forecasts.js.map