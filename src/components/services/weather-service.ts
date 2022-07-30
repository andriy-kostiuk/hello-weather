import { AxiosResponse } from 'axios';
import { ForecastWeatherResponse, Weather } from '../../interfaces/weather';
import api from '../../axios';

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`);
  }

  static getForecastWeather(city: string): Promise<AxiosResponse<ForecastWeatherResponse>> {
    return api.get<ForecastWeatherResponse>(`/forecast?q=${city}`);
  }
}
