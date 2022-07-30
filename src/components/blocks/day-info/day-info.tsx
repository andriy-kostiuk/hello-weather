import React from 'react';
import { Ul } from '../../styled';
import { DayProperty } from '../../ui/day-property/day-property';
import { Weather } from '../../../interfaces/weather';
import { getPrecipitation, getWindDirection } from '../../../utils';

interface DayInfoProps {
  day: Weather;
}

export interface Property {
  id: number;
  icon: string;
  title: string;
  description: string;
}


export function DayInfo({day}: DayInfoProps) {

  const properties: Property[] = [
    {
      id: 1,
      icon: 'temperature',
      title: 'Температура',
      description: `${Math.round(day.main.temp)}° - відчувається як ${Math.round(day.main.feels_like)}°`,
    },
    {
      id: 2,
      icon: 'pressure',
      title: 'Тиск',
      description: `${day.main.pressure} мм ртутного стовпа`,
    },
    {
      id: 3,
      icon: 'precipitation',
      title: 'Опади',
      description: getPrecipitation(day.rain?.['3h'], day.snow?.['3h']),
    },
    {
      id: 4,
      icon: 'wind',
      title: 'Вітер',
      description: `${day.wind.speed} м/с ${getWindDirection(day.wind.deg)}`,
    },
  ];

  return (
    <Ul>
      {properties.map((property: Property) => (<DayProperty property={property} key={property.id} />))}
    </Ul>
  );
}
