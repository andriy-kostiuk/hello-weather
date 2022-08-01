import { RootState } from './index';

export const selectCurrentWeatherData = (state: RootState) => state.currentWeather;
export const selectForecastWeatherData = (state: RootState) => state.forecastWeather;
export const selectForecastPopup = (state: RootState) => state.forecastPopup;
export const selectCitySelection = (state: RootState) => state.citySelection;
