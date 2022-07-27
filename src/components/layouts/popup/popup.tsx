import React from 'react';
import { Property } from '../../blocks/this-day-info/this-day-info';
import { DayProperty } from '../../ui/day-property/day-property';
import SharedSvgSelector from '../../../assets/icons/shared/shared-svg-selector';
import { Day, Img, LeftColumn, StyledPopup, Temperature, Text, Close, Blur } from './styled';
import { Ul } from '../../styled';

interface Props {
  properties: Property[];
};

export function Popup({properties}: Props) {
  return (
    <Blur>
      <StyledPopup>
        <LeftColumn>
          <Temperature>12°</Temperature>
          <Day>Середа</Day>
          <Img>
            <SharedSvgSelector id="mainly-cloudy" width={48} height={48} />
          </Img>
          <Text>Час: 20:50</Text>
          <Text>Місто: Київ</Text>
        </LeftColumn>
        <Ul>
          {properties.map(property => (<DayProperty property={property} key={property.id} />))}
        </Ul>
        <Close>
          <SharedSvgSelector id="close" width={18} height={18} />
        </Close>
      </StyledPopup>
    </Blur>
  );
};
