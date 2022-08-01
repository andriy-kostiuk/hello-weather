import { AxiosResponse } from 'axios';
import { ForecastWeatherResponse, Weather } from '../interfaces/weather';
import apiWeather from '../axios/weather';

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return apiWeather.get<Weather>(`/weather?q=${city}`);
  }

  static getForecastWeather(city: string): Promise<AxiosResponse<ForecastWeatherResponse>> {
    return apiWeather.get<ForecastWeatherResponse>(`/forecast?q=${city}`);
  }
}
