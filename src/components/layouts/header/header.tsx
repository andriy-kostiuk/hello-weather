import React from 'react';
import Logo from '../../ui/logo/logo';
import { Button, StyledHeader, Wrapper } from './styled';
import SharedSvgSelector from '../../../assets/icons/shared/shared-svg-selector';
import Select from 'react-select';

const options = [
  {value: 'city-1', label: 'Київ'},
  {value: 'city-2', label: 'Ніжин'},
  {value: 'city-3', label: 'Умань'},
];

const customStyles = {
  control: (styles: any) => ({
    ...styles,
    height: '38px',
    minWidth: '200px',
    backgroundColor: 'rgba(71, 147, 255, 0.2)',
    borderRadius: '10px',
    border: 'none',
  }),
};

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Wrapper>
        <Button>
          <SharedSvgSelector id="change-theme" width={35} height={35} />
        </Button>
        <Select defaultValue={options[0]} options={options} styles={customStyles} />
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;
