import axios from 'axios';

const apiWeather = axios.create({
  baseURL: process.env.REACT_APP_API_URL_WEATHER,
});

apiWeather.interceptors.request.use(config => {
  config.url = config.url + '&units=metric' + '&lang=uk' + '&appid=' + process.env.REACT_APP_API_KEY;
  return config;
});

export default apiWeather;
