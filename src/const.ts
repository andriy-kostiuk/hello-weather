import { IRoutes } from './interfaces/const';
import { Settlement } from './interfaces/settlement';

export const AppRouts: IRoutes = {
  HOME: '/',
  STATISTIC: 'statistic',
};
export const API_WEATHER_KEY: string = '8b095d7b8dd449ef2c8c4b572a3d5cfa';

export const REGIONAL_CENTERS: Settlement[] = [
  {
    value: 'Вінниця',
    label: 'Вінниця',
  }, {
    value: 'Дніпро',
    label: 'Дніпро',
  }, {
    value: 'Донецьк',
    label: 'Донецьк',
  }, {
    value: 'Житомир',
    label: 'Житомир',
  }, {
    value: 'Запоріжжя',
    label: 'Запоріжжя',
  }, {
    value: 'Івано-Франківськ',
    label: 'Івано-Франківськ',
  }, {
    value: 'Київ',
    label: 'Київ',
  }, {
    value: 'Кропивницький',
    label: 'Кропивницький',
  }, {
    value: 'Дніпро',
    label: 'Дніпро',
  }, {
    value: 'Луганськ',
    label: 'Луганськ',
  }, {
    value: 'Луцьк',
    label: 'Луцьк',
  }, {
    value: 'Львів',
    label: 'Львів',
  }, {
    value: 'Миколаїв',
    label: 'Миколаїв',
  }, {
    value: 'Одеса',
    label: 'Одеса',
  }, {
    value: 'Полтава',
    label: 'Полтава',
  }, {
    value: 'Рівне',
    label: 'Рівне',
  }, {
    value: 'Суми',
    label: 'Суми',
  }, {
    value: 'Тернопіль',
    label: 'Тернопіль',
  }, {
    value: 'Ужгород',
    label: 'Ужгород',
  }, {
    value: 'Харків',
    label: 'Харків',
  }, {
    value: 'Херсон',
    label: 'Херсон',
  }, {
    value: 'Хмельницький',
    label: 'Хмельницький',
  }, {
    value: 'Черкаси',
    label: 'Черкаси',
  }, {
    value: 'Чернівці',
    label: 'Чернівці',
  }, {
    value: 'Чернігів',
    label: 'Чернігів',
  },
];
