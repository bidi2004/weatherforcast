import {forecasts} from "./forecasts"

export class WeatherState{
  status:number
  count:number
  infocode:number
  forecasts:Array<forecasts> = []
}
