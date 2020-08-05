import { Weather } from 'models/WeatherInfo';
import { WeatherType } from './actions';
import * as type from './types';

interface IWeatherState {
  selectedWeather?: Weather;
}

const initialState: IWeatherState = {};

export const weather = (state: IWeatherState = initialState, action: WeatherType): IWeatherState => {
  switch (action.type) {
    case type.SET_SELECTED_WEATHER:
      return {
        ...state,
        selectedWeather: action.payload,
      };

    default:
      return state;
  }
};
