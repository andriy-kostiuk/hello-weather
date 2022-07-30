import React from 'react';
import Logo from '../../ui/logo/logo';
import { Button, StyledHeader, Wrapper } from './styled';
import SharedSvgSelector from '../../../assets/icons/shared/shared-svg-selector';
import { toggleTheme } from '../../../store/theme-slice/theme-slice';
import { CitySelect } from '../../ui/city-select/city-select';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import { selectCurrentWeatherData } from '../../../store/selectors';
import { Settlement } from '../../../interfaces/settlement';
import { fetchCurrentWeather } from '../../../store/thunks/fetch-current-weather';

const options: Settlement[] = [
  {value: 'kyiv', label: 'Київ'},
  {value: 'nizhyn', label: 'Ніжин'},
  {value: 'uman', label: 'Умань'},
];


function Header() {
  const dispatch = useCustomDispatch();

  const handlerToggleTheme = (): void => {
    dispatch(toggleTheme());
  };

  const {currentCity} = useCustomSelector(selectCurrentWeatherData);

  const handlerChangeCity = (evt: Settlement): void => {
    dispatch(fetchCurrentWeather(evt));
  };


  return (
    <StyledHeader>
      <Logo />
      <Wrapper>
        <Button onClick={handlerToggleTheme}>
          <SharedSvgSelector id="change-theme" width={35} height={35} />
        </Button>
        <CitySelect defaultValue={currentCity} options={options} onChange={handlerChangeCity} />
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;
