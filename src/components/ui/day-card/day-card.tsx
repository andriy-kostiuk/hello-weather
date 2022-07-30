import React from 'react';
import { Card, Text, Img } from './styled';
import { Weather } from '../../../interfaces/weather';
import { SharedSvgWeatherIcons } from '../../../assets/icons/shared/shared-svg-weather-icons';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import { getDayOfWeek, ucFirst } from '../../../utils';
import { useCustomDispatch } from '../../../hooks/store';
import { setCurrentForecast, setIsOpen } from '../../../store/forecast-popup-slice/forecast-popup-slice';

interface Props {
  day: Weather;
}

export function DayCard({day}: Props) {
  const dispatch = useCustomDispatch();
  const date = dayjs(day.dt_txt).locale('uk');

  const handlerClickCard = () => {
    dispatch(setCurrentForecast(day));
    dispatch(setIsOpen(true));
  };

  return (
    <Card tabIndex={0} onClick={handlerClickCard}>
      <Text $marginBottom={7} category="main">{getDayOfWeek(date)}</Text>
      <Text $marginBottom={12}>{date.format('DD MMM HH:mm ')}</Text>
      <Img>
        <SharedSvgWeatherIcons id={day.weather[0].icon} width={48} height={48} />
      </Img>
      <Text $marginBottom={6}>
        Температура:&nbsp;
        <span>{Math.round(day.main.temp)}°</span>
      </Text>
      <Text $marginBottom={6}>
        Вологість:&nbsp;
        <span>{Math.round(day.main.humidity)}%</span>
      </Text>
      <Text>{ucFirst(day.weather[0].description)}</Text>
    </Card>
  );
};
