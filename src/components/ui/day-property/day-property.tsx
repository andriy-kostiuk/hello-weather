import React from 'react';
import { Property } from '../../blocks/this-day-info/this-day-info';
import { Icon, Wrapper, Title } from './styled';
import SharedSvgSelector from '../../../assets/icons/shared/shared-svg-selector';
import { P } from '../../styled';

interface Props {
  property: Property;
};

export function DayProperty({property}: Props) {
  return (
    <Wrapper>
      <Icon>
        <SharedSvgSelector id={property.icon} width={25} height={25} />
      </Icon>
      <Title>{property.title}</Title>
      <P>{property.description}</P>
    </Wrapper>);
};
