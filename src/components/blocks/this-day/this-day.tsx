import React from 'react';
import { StyledDiv, Temperature, Today, Text, Wrapper, Image } from './styled';
import { Weather } from '../../../interfaces/weather';
import { SharedSvgWeatherIcons } from '../../../assets/icons/shared/shared-svg-weather-icons';
import { Settlement } from '../../../interfaces/settlement';
import { Clock } from '../../ui/clock/clock';

interface ThisDayProps {
  weather: Weather;
  currentCity: Settlement;
}

function ThisDay({weather, currentCity}: ThisDayProps) {
  return (
    <StyledDiv>
      <Wrapper>
        <div>
          <Temperature>{Math.round(weather.main.temp)}°</Temperature>
          <Today>Сьогодні</Today>
        </div>
        <Image>
          <SharedSvgWeatherIcons id={weather.weather[0].icon} width={100} height={100} />
        </Image>
      </Wrapper>
      <Text $marginBottom={14}>Час: <Clock /></Text>
      <Text>Місто: {currentCity.label}</Text>
    </StyledDiv>
  );
}

export default ThisDay;
