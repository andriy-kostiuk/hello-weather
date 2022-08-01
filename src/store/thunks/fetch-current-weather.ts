import { AppDispatch } from '../index';
import { WeatherService } from '../../services/weather-service';
import {
  fetchCurrentWeatherError,
  fetchCurrentWeatherSuccess, setCurrentCity,
  startFetchCurrentWeather,
} from '../current-weather-slice/current-weather-slice';
import { Settlement } from '../../interfaces/settlement';

export const fetchCurrentWeather = (payload: Settlement) => async (dispatch: AppDispatch) => {
  try {
    dispatch(startFetchCurrentWeather());
    const res = await WeatherService.getCurrentWeather(payload.value);
    if (res.status === 200) {
      dispatch(fetchCurrentWeatherSuccess(res));
      dispatch(setCurrentCity(payload));
    } else {
      fetchCurrentWeatherError(res);
    }
  } catch (e) {
    console.log(e);
  }
};
