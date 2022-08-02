interface WeatherInformation {
  main: string;
  description: string;
  icon: string;
}

interface Wind {
  speed: number;
  deg: number;
};

interface Precipitation {
  '3h'?: number;
  '1h'?: number;
}

export interface Weather {
  dt_txt?: string;
  main: {
    temp: number
    pressure: number
    feels_like: number
    humidity: number
  };
  weather: WeatherInformation[];
  wind: Wind;
  rain?: Precipitation;
  snow?: Precipitation;
}

export interface ForecastWeatherResponse {
  list: Weather[];
}
