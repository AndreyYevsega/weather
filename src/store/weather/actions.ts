import * as type from './types';
import { Weather } from 'models/WeatherInfo';

type SetSelectedWeatherAction = {
  type: typeof type.SET_SELECTED_WEATHER;
  payload: Weather;
};

export const setSelectedWeather = (weather: Weather): SetSelectedWeatherAction => ({
  type: type.SET_SELECTED_WEATHER,
  payload: weather,
});

export type WeatherType = SetSelectedWeatherAction;
