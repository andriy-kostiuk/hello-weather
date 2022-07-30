import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weather, ForecastWeatherResponse } from '../../interfaces/weather';
import { AxiosResponse } from 'axios';
import dayjs from 'dayjs';
import { filterByTime } from '../../utils';

interface Response {
  status: number;
  message: string;
}

interface ForecastWeather {
  isLoading: boolean;
  response: Response;
  forecastTomorrow: Weather[];
  forecastThreeDays: Weather[];
  forecastFiveDays: Weather[];
}

const initialState: ForecastWeather = {
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
  forecastTomorrow: [],
  forecastThreeDays: [],
  forecastFiveDays: [],
};

const forecastWeatherSlice = createSlice({
  name: 'forecastWeather',
  initialState,
  reducers: {
    startFetchForecastWeather(state) {
      state.isLoading = true;
    },
    fetchForecastWeatherSuccess(state, action: PayloadAction<AxiosResponse>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchForecastWeatherError(state, action: PayloadAction<AxiosResponse<ForecastWeatherResponse>>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    getForecastTomorrow(state, action: PayloadAction<AxiosResponse<ForecastWeatherResponse>>) {
      const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
      state.forecastTomorrow = action.payload.data.list.filter((element) =>
        element.dt_txt && element.dt_txt.includes(tomorrow),
      );
    },
    getForecastThreeDays(state, action: PayloadAction<AxiosResponse<ForecastWeatherResponse>>) {
      const format: string = 'YYYY-MM-DD';
      const future = dayjs().add(3, 'day');
      const arrByDays = action.payload.data.list.filter((day) => {
        if (day.dt_txt) {
          return (dayjs(day.dt_txt) < future || day.dt_txt.includes(future.format(format)));
        }
      });
      state.forecastThreeDays = filterByTime(arrByDays);
    },
    getForecastFiveDays(state, action: PayloadAction<AxiosResponse<ForecastWeatherResponse>>) {
      state.forecastFiveDays = filterByTime(action.payload.data.list);
    },
  },
});

export const {
  startFetchForecastWeather,
  fetchForecastWeatherError,
  fetchForecastWeatherSuccess,
  getForecastTomorrow,
  getForecastThreeDays,
  getForecastFiveDays,
} = forecastWeatherSlice.actions;

export default forecastWeatherSlice.reducer;
