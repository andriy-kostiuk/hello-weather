import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weather } from '../../interfaces/weather';

interface InitialState {
  isOpen: boolean,
  currentForecast: Weather
}

const initialState: InitialState = {
  isOpen: false,
  currentForecast: {
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
};

const forecastPopupSlice = createSlice({
  name: 'forecastPopup',
  initialState,
  reducers: {
    setCurrentForecast(state, action: PayloadAction<Weather>) {
      state.currentForecast = action.payload;
    },
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const {setCurrentForecast, setIsOpen} = forecastPopupSlice.actions;
export default forecastPopupSlice.reducer;
