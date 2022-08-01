import React from 'react';
import Logo from '../../ui/logo/logo';
import { Button, StyledHeader, Wrapper } from './styled';
import SharedSvgSelector from '../../../assets/icons/shared/shared-svg-selector';
import { toggleTheme } from '../../../store/theme-slice/theme-slice';
import { CitySelect } from '../../ui/city-select/city-select';
import { useCustomDispatch } from '../../../hooks/store';

function Header() {
  const dispatch = useCustomDispatch();

  const handlerToggleTheme = (): void => {
    dispatch(toggleTheme());
  };

  return (
    <StyledHeader>
      <Logo />
      <Wrapper>
        <Button onClick={handlerToggleTheme} aria-label="Змінити тему">
          <SharedSvgSelector id="change-theme" width={35} height={35} />
        </Button>
        <CitySelect />
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;
