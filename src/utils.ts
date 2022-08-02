import { Weather } from './interfaces/weather';
import dayjs, { Dayjs } from 'dayjs';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import isToday from 'dayjs/plugin/isToday';

dayjs.extend(isTomorrow);
dayjs.extend(isToday);

export const storage = {
  setItem(name: string, item: any) {
    localStorage.setItem(name, JSON.stringify(item));
  },
  getItem(name: string) {
    const item = localStorage.getItem(name);
    if (item) {
      return JSON.parse(item);
    }
  },
};

export const getWindDirection = (deg: number): string => {
  if (deg < 10) {
    return 'північний';
  } else if (deg < 80) {
    return 'північно-східний';
  } else if (deg < 100) {
    return 'східний';
  } else if (deg < 170) {
    return 'південно-східний';
  } else if (deg < 190) {
    return 'південний';
  } else if (deg < 260) {
    return 'південно-західний';
  } else if (deg < 280) {
    return 'західний';
  } else if (deg < 350) {
    return 'північно-західний';
  } else if (deg <= 360) {
    return 'північний';
  }
  return '';
};

export const getPrecipitation3h = (rain?: number, snow?: number): string => {
  if (rain && snow) {
    return `${rain} мм. дощу та ${snow} мм. снігу за останні 3 години`;
  } else if (rain || snow) {
    return `${rain || snow} мм. ${rain ? 'дощу' : 'снігу'} За останні 3 години`;
  }
  return '';
};

export const getPrecipitation1h = (rain?: number, snow?: number): string => {
  if (rain && snow) {
    return `${rain} мм. дощу та ${snow} мм. снігу за останню годину`;
  } else if (rain || snow) {
    return `${rain || snow} мм. ${rain ? 'дощу' : 'снігу'} за останню годину`;
  }
  return '';
};

export const ucFirst = (str: string): string => {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
};

export const filterByTime = (arr: Weather[]): Weather[] => {
  const reg = /09|15|21:00:00/;
  return arr.filter((day) => day?.dt_txt && reg.test(day?.dt_txt));
};

export const getDayOfWeek = (date: Dayjs): string => {
  if (date.isToday()) {
    return 'Сьогодні';
  } else if (date.isTomorrow()) {
    return 'Завтра';
  }
  return ucFirst(date.format('dddd'));
};
