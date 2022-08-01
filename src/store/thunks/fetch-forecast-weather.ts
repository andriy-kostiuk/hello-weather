import { AppDispatch } from '../index';
import { WeatherService } from '../../services/weather-service';
import {
  fetchForecastWeatherError,
  fetchForecastWeatherSuccess,
  startFetchForecastWeather,
  getForecastTomorrow,
  getForecastThreeDays,
  getForecastFiveDays,
} from '../forecast-weather-slice/forecast-weather-slice';
import { Settlement } from '../../interfaces/settlement';

export const fetchForecastWeather = (payload: Settlement) => async (dispatch: AppDispatch) => {
  try {
    dispatch(startFetchForecastWeather());
    const res = await WeatherService.getForecastWeather(payload.value);
    if (res.status === 200) {
      dispatch(fetchForecastWeatherSuccess(res));
      dispatch(getForecastTomorrow(res));
      dispatch(getForecastThreeDays(res));
      dispatch(getForecastFiveDays(res));
    } else {
      fetchForecastWeatherError(res);
    }
  } catch (e) {
    console.log(e);
  }
};
