import { AppDispatch } from '../index';
import { WeatherService } from '../../components/services/weather-service';
import {
  fetchCurrentWeatherError,
  fetchCurrentWeatherSuccess,
  startFetchCurrentWeather,
} from '../current-weather-slice/current-weather-slice';

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(startFetchCurrentWeather());
    const res = await WeatherService.getCurrentWeather(payload);
    if (res.status === 200) {
      dispatch(fetchCurrentWeatherSuccess(res));
    } else {
      fetchCurrentWeatherError(res);
    }
  } catch (e) {
    console.log(e);
  }
};
