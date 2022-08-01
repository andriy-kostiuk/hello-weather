import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { ThemeEnum } from '../../../interfaces/styled';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import { Settlement } from '../../../interfaces/settlement';
import { selectCitySelection, selectCurrentWeatherData } from '../../../store/selectors';
import { fetchCurrentWeather } from '../../../store/thunks/fetch-current-weather';
import { fetchSimilarCities } from '../../../store/thunks/fetch-similar-cities';
import { resetSimilarCities } from '../../../store/city-selection-slice/city-selection-slice';

export function CitySelect() {
  const dispatch = useCustomDispatch();
  const currentTheme = useCustomSelector(state => state.theme.currentTheme);
  const {currentCity} = useCustomSelector(selectCurrentWeatherData);
  const {cities} = useCustomSelector(selectCitySelection);

  const handlerChangeCity = (evt: SingleValue<Settlement>): void => {
    if (evt) {
      dispatch(fetchCurrentWeather(evt));
    }
  };
  const handlerInputChange = (newValue: string) => {
    if (newValue.length >= 3) {
      dispatch(fetchSimilarCities(newValue));
    }
  };

  const handlerMenuClose = () => {
    dispatch(resetSimilarCities());
  };

  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      height: '38px',
      minWidth: '200px',
      backgroundColor: currentTheme.type === ThemeEnum.light ? currentTheme.colors.blue100 : currentTheme.colors.baseWhite,
      borderRadius: '10px',
      border: 'none',
      color: currentTheme.colors.mainText,
    }),
    menuList: (styles: any) => ({
      ...styles,
      color: currentTheme.colors.baseBlack,
      backgroundColor: currentTheme.type === ThemeEnum.light ? currentTheme.colors.blue100 : currentTheme.colors.baseWhite,
    }),
  };
  return (
    <Select options={cities} value={currentCity} styles={customStyles}
            onChange={handlerChangeCity}
            onInputChange={handlerInputChange}
            onMenuClose={handlerMenuClose}
    />
  );
};
