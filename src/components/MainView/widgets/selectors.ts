import { AppState } from 'store';

export const getSelectedWeather = ({ weather }: AppState) => weather.selectedWeather;
