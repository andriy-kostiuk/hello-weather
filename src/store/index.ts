import { combineReducers, configureStore } from '@reduxjs/toolkit';
import currentWeatherReducer from './current-weather-slice/current-weather-slice';
import themeReducer from './theme-slice/theme-slice';
import forecastWeatherReducer from './forecast-weather-slice/forecast-weather-slice';
import forecastPopupReducer from './forecast-popup-slice/forecast-popup-slice';

const rootReducer = combineReducers({
  theme: themeReducer,
  currentWeather: currentWeatherReducer,
  forecastWeather: forecastWeatherReducer,
  forecastPopup: forecastPopupReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
