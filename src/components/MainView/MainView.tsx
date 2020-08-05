import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { Spinner } from '../Spinner';
import { CurrentDate } from './widgets/CurrentDate';
import { CurrentTemperature } from './widgets/CurrentTemperature';
import { WeekWeather } from './widgets/WeekWeather';
import { WeatherInfo, Weather } from 'models/WeatherInfo';

import * as api from 'api/weather';
import * as action from 'store/weather/actions';

import './MainView.scss';

export const MainView = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState<Weather[]>([]);

  const loadingModifier = loading ? 'main-view__widgets_loading' : '';

  useEffect(() => {
    (async () => {
      const response = await api.getWeather<WeatherInfo>();
      const { data } = response.data;
      const _forecast: Weather[] = data
        .map((weather, idx) => ({ date: moment().add(idx, 'd'), ...weather }))
        .slice(0, 7);

      setForecast(_forecast);
      dispatch(action.setSelectedWeather(_forecast[0]));

      setLoading(false);
    })();
  }, [dispatch, setForecast]);

  return (
    <div className="main-view">
      <div className={`main-view__widgets ${loadingModifier}`}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <CurrentDate />
            <CurrentTemperature />
            <WeekWeather forecast={forecast} />
          </>
        )}
      </div>
    </div>
  );
};
