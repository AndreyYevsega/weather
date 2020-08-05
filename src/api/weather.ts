import { formalizeReturn } from './utils';

export const getWeather = async <DataType>() => {
  const proxy: string = process.env.REACT_APP_PROXY_URL as string;
  const secret: string = process.env.REACT_APP_SECRET_KEY as string;

  const response = await fetch(
    `${proxy}/https://api.weatherbit.io/v2.0/forecast/daily?city=Dnipro&key=3883f69ab25f46dc92cdf2b5d66a1517`
  );

  return await formalizeReturn<DataType>(response);
};
