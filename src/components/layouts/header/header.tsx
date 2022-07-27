import React from 'react';
import Logo from '../../ui/logo/logo';
import { Button, StyledHeader, Wrapper } from './styled';
import SharedSvgSelector from '../../../assets/icons/shared/shared-svg-selector';
import { toggleTheme } from '../../../store/theme-slice/theme-slice';
import { useDispatch } from 'react-redux';
import { CitySelect } from '../../ui/city-select/city-select';
import { ICityOption } from '../../../interfaces/city-option';

const options: ICityOption[] = [
  {value: 'city-1', label: 'Київ'},
  {value: 'city-2', label: 'Ніжин'},
  {value: 'city-3', label: 'Умань'},
];


function Header() {
  const dispatch = useDispatch();

  const handlerToggleTheme = (): void => {
    dispatch(toggleTheme());
  };


  return (
    <StyledHeader>
      <Logo />
      <Wrapper>
        <Button onClick={handlerToggleTheme}>
          <SharedSvgSelector id="change-theme" width={35} height={35} />
        </Button>
        <CitySelect defaultValue={options[0]} options={options} />
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;
