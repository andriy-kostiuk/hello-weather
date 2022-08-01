import { AppDispatch } from '../index';
import { CityService } from '../../services/city-service';
import { fetchSimilarCitiesSuccess, fetchSimilarCitiesError } from '../city-selection-slice/city-selection-slice';

export const fetchSimilarCities = (payload: string) => async (dispatch: AppDispatch) => {
  try {
    const res = await CityService.getSimilarCities(payload);
    if (res.status === 200) {
      dispatch(fetchSimilarCitiesSuccess(res));
    } else {
      fetchSimilarCitiesError(res);
    }
  } catch (e) {
    console.log(e);
  }
};
