import React from 'react';
import { Icon, Wrapper, Title } from './styled';
import SharedSvgSelector from '../../../assets/icons/shared/shared-svg-selector';
import { P } from '../../styled';

interface Props {
  property: {
    title: string
    icon: string
    description: string
  };
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
