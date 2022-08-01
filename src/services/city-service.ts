import { AxiosResponse } from 'axios';
import apiCity from '../axios/city';
import { CitiesResponse } from '../interfaces/city';

export class CityService {
  static getSimilarCities(cityNamePart: string): Promise<AxiosResponse<CitiesResponse>> {
    return apiCity.get<CitiesResponse>(`getTowns?language=uk&searchString=${cityNamePart}`);
  }
}
