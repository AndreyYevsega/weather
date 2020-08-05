import React from 'react';

import { Weather } from 'models/WeatherInfo';
import * as selector from '../selectors';

import './CurrentTemperature.scss';
import { useSelector } from 'react-redux';

export const CurrentTemperature = () => {
  const weather: Weather | undefined = useSelector(selector.getSelectedWeather);

  return (
    <div className="current-temperature">
      <div className="current-temperature__value">
        <span>{Math.trunc(weather?.temp ?? 0)}</span>
      </div>
    </div>
  );
};
