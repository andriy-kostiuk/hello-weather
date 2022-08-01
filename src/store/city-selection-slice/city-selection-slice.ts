import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Settlement } from '../../interfaces/settlement';
import { AxiosResponse } from 'axios';
import { CitiesResponse, City } from '../../interfaces/city';
import { REGIONAL_CENTERS } from '../../const';

interface Response {
  status: number;
  message: string;
}

interface CitySelection {
  cities: Settlement[];
  isLoading: boolean;
  response: Response;
}

const initialState: CitySelection = {
  cities: REGIONAL_CENTERS,
  response: {
    status: 0,
    message: '',
  },
  isLoading: false,
};

const citySelectionSlice = createSlice({
  name: 'changeCity',
  initialState,
  reducers: {
    fetchSimilarCitiesStart(state) {
      state.isLoading = true;
    },
    fetchSimilarCitiesSuccess(state, action: PayloadAction<AxiosResponse<CitiesResponse>>) {
      state.cities = action.payload.data.data.map(((city: City) => ({
        value: city.description,
        label: city.description,
      })));
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
      state.isLoading = false;
    },
    fetchSimilarCitiesError(state, action: PayloadAction<AxiosResponse<CitiesResponse>>) {
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
      state.isLoading = false;
    },
    resetSimilarCities(state) {
      state.cities = REGIONAL_CENTERS;
    },
  },
});

export const {fetchSimilarCitiesSuccess, fetchSimilarCitiesError, resetSimilarCities} = citySelectionSlice.actions;
export default citySelectionSlice.reducer;
