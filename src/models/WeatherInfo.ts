import { Moment } from 'moment';

export interface WeatherInfo {
  data: WeatherResponse[];
}

export interface WeatherResponse {
  temp: number;
  weather: { description: string; icon: string };
}

export interface Weather extends WeatherResponse {
  date: Moment;
}
