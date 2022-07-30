import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weather } from '../../interfaces/weather';
import { AxiosResponse } from 'axios';
import { Settlement } from '../../interfaces/settlement';

interface Response {
  status: number;
  message: string;
}

interface CurrentWeather {
  weather: Weather;
  isLoading: boolean;
  response: Response;
  currentCity: Settlement;
}


const initialState: CurrentWeather = {
  weather: {
    main: {
      temp: 0,
      pressure: 0,
      feels_like: 0,
      humidity: 0,
    },
    weather: [{
      main: '',
      icon: '',
      description: '',
    }],
    wind: {
      speed: 0,
      deg: 0,
    },
  },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
  currentCity: {value: 'kyiv', label: 'Київ'},
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
    setCurrentCity(state, action: PayloadAction<Settlement>) {
      state.currentCity = action.payload;
    },
  },
});

export const {
  startFetchCurrentWeather,
  fetchCurrentWeatherSuccess,
  fetchCurrentWeatherError,
  setCurrentCity,
} = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
