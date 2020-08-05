import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { DayWeather } from '../DayWeather';
import { Weather } from 'models/WeatherInfo';

import * as selector from '../selectors';
import * as action from 'store/weather/actions';

import './WeekWeather.scss';

type Props = {
  forecast?: Weather[];
};

export const WeekWeather: React.FC<Props> = ({ forecast }) => {
  const dispatch = useDispatch();
  const selectedWeather = useSelector(selector.getSelectedWeather);

  const selectHandler = (weather: Weather) => {
    dispatch(action.setSelectedWeather(weather));
  };

  return (
    <div className="week-weather">
      {forecast?.map((weather, idx) => (
        <DayWeather
          weather={weather}
          key={idx}
          selected={weather.date.isSame(selectedWeather?.date)}
          onSelect={() => selectHandler(weather)}
        />
      ))}
    </div>
  );
};
