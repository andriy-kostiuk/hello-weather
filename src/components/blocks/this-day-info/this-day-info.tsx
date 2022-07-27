import React from 'react';
import { StyledSection } from './styled';
import { Ul } from '../../styled';
import { DayProperty } from '../../ui/day-property/day-property';
import { Popup } from '../../layouts/popup/popup';

interface Props {

};

export interface Property {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const properties: Property[] = [
  {
    id: 1,
    icon: 'temperature',
    title: 'Температура',
    description: '20° - відчувається як 17°',
  },
  {
    id: 2,
    icon: 'pressure',
    title: 'Тиск',
    description: '765 мм ртутного стовпа – нормальне',
  },
  {
    id: 3,
    icon: 'precipitation',
    title: 'Осадки',
    description: 'Без осадків',
  },
  {
    id: 4,
    icon: 'wind',
    title: 'Вітер',
    description: '3 м/с південно-західний - легкий вітер',
  },
];

export function ThisDayInfo(props: Props) {
  return (
    <StyledSection>
      <Ul>
        {properties.map((property: Property) => (<DayProperty property={property} key={property.id} />))}
      </Ul>
      {/*<Popup properties={properties} />*/}
    </StyledSection>
  );
}
