import React from 'react';
import { StyledSection, Temperature, Today, Text, Wrapper, Image } from './styled';
import SharedSvgSelector from '../../../assets/icons/shared/shared-svg-selector';


function ThisDay() {
  return (
    <StyledSection>
      <Wrapper>
        <div>
          <Temperature>20°</Temperature>
          <Today>Сьогодні</Today>
        </div>
        <Image>
          <SharedSvgSelector id="sun" width={119} height={119}/>
        </Image>
      </Wrapper>
      <Text $marginBottom={14}>Час: 17:51</Text>
      <Text>Місто: Київ</Text>
    </StyledSection>
  );
}

export default ThisDay;
