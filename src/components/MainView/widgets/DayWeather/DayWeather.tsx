import React from 'react';
import { Weather } from 'models/WeatherInfo';

import './DayWeather.scss';

type Props = {
  weather: Weather;
  selected: boolean;
  onSelect: () => void;
};

export const DayWeather: React.FC<Props> = ({ weather, selected, onSelect }) => {
  const modifierSelected = selected ? 'day-weather_selected' : '';

  const day = weather.date.format('ddd');
  const daySmall = weather.date.format('dddd');
  const { icon } = weather.weather;

  return (
    <div onClick={onSelect} className={`day-weather ${modifierSelected}`}>
      <span className="day-weather__day">{day}</span>
      <span className="day-weather__day_small">{daySmall}</span>
      <img
        src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
        alt="day weather"
        className="day-weather__icon"
      />
      <span className="day-weather__temperature">{Math.trunc(weather.temp)}</span>
    </div>
  );
};
