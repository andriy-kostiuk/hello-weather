import axios from 'axios';
import { API_WEATHER_KEY } from '../../const';
import { AxiosResponse } from 'axios';
import { Weather } from '../../interfaces/weather';

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=${API_WEATHER_KEY}`);
  }
}
