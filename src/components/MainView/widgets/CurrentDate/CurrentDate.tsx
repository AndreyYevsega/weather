import React from 'react';
import moment from 'moment';

import * as selector from '../selectors';

import './CurrentDate.scss';
import { useSelector } from 'react-redux';

export const CurrentDate = () => {
  const weather = useSelector(selector.getSelectedWeather);

  const day: string = weather?.date.format('ddd D') ?? moment().format('ddd D');
  const month: string = weather?.date.format('MMMM') ?? moment().format('MMMM');

  return (
    <div className="current-date">
      <span className="current-date__title">{day}</span>
      <span className="current-date__title">{month}</span>
    </div>
  );
};
