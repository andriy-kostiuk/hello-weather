import axios from 'axios';

const apiCity = axios.create({
  baseURL: process.env.REACT_APP_API_URL_CITY,
});

export default apiCity;
