import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weather } from '../../interfaces/weather';
import { AxiosResponse } from 'axios';

interface Response {
  status: number;
  message: string;
}

interface CurrentWeather {
  weather: Weather;
  isLoading: boolean;
  response: Response;
}


const initialState: CurrentWeather = {
  weather: {},
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
};

const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {
    startFetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export const {startFetchCurrentWeather, fetchCurrentWeatherSuccess, fetchCurrentWeatherError} = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
