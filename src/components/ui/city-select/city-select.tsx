import React from 'react';
import Select from 'react-select';
import { ICityOption } from '../../../interfaces/city-option';
import { ThemeEnum } from '../../../interfaces/styled';
import { useCustomSelector } from '../../../hooks/store';

interface Props {
  defaultValue: ICityOption,
  options: ICityOption[]
};

export function CitySelect({defaultValue, options}: Props) {

  const currentTheme = useCustomSelector(state => state.theme.currentTheme);
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
      color: currentTheme.colors.baseBlack,
      backgroundColor: currentTheme.type === ThemeEnum.light ? currentTheme.colors.blue100 : currentTheme.colors.baseWhite,
    }),
  };
  return (
    <Select options={options} defaultValue={defaultValue} styles={customStyles} />
  );
};
