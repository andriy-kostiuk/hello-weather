import React from 'react';
import Select from 'react-select';
import { ThemeEnum } from '../../../interfaces/styled';
import { useCustomSelector } from '../../../hooks/store';
import { Settlement } from '../../../interfaces/settlement';

interface Props {
  defaultValue: any,
  options: Settlement[]
  onChange: (evt: Settlement) => void
};

export function CitySelect({defaultValue, options, onChange}: Props) {

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
      ...styles,
      color: currentTheme.colors.baseBlack,
      backgroundColor: currentTheme.type === ThemeEnum.light ? currentTheme.colors.blue100 : currentTheme.colors.baseWhite,
    }),
  };
  return (
    <Select options={options} defaultValue={defaultValue} styles={customStyles}
            onChange={(evt: Settlement) => onChange(evt)} />
  );
};
