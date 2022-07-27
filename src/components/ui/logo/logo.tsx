import React from 'react';
import { AppRouts } from '../../../const';
import { Icon, StyledLink, Text } from './styled';
import SharedSvgSelector from '../../../assets/icons/shared/shared-svg-selector';

function Logo() {
  return (
    <StyledLink to={AppRouts.HOME}>
      <Icon>
        <SharedSvgSelector id="header-logo" width={65} height={65} />
      </Icon>
      <Text> Hello weather</Text>
    </StyledLink>
  );
}

export default Logo;

