import React, { useEffect } from 'react';
import SharedSvgSelector from '../../../assets/icons/shared/shared-svg-selector';
import { Day, Img, LeftColumn, StyledPopup, Temperature, Text, Close, Blur } from './styled';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import { selectForecastPopup } from '../../../store/selectors';
import { DayInfo } from '../../blocks/day-info/day-info';
import { setIsOpen } from '../../../store/forecast-popup-slice/forecast-popup-slice';
import { Settlement } from '../../../interfaces/settlement';
import { SharedSvgWeatherIcons } from '../../../assets/icons/shared/shared-svg-weather-icons';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import { getDayOfWeek } from '../../../utils';


interface PopupProps {
  currentCity: Settlement;
}

export function Popup({currentCity}: PopupProps) {
  const dispatch = useCustomDispatch();
  const {currentForecast, isOpen} = useCustomSelector(selectForecastPopup);
  const date = dayjs(currentForecast.dt_txt).locale('uk');

  const handlerClickClose = () => {
    dispatch(setIsOpen(false));
  };

  const handlerEsc = (evt: KeyboardEvent): void => {
    if (evt.key === 'Escape') {
      dispatch(setIsOpen(false));
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handlerEsc);
    return () => {
      document.removeEventListener('keydown', handlerEsc);
    };
  }, []);


  return isOpen ?
    <Blur>
      <StyledPopup>
        <LeftColumn>
          <Temperature>{Math.round(currentForecast.main.temp)}°</Temperature>
          <Day>{getDayOfWeek(date)}</Day>
          <Img>
            <SharedSvgWeatherIcons id={currentForecast.weather[0].icon} width={48} height={48} />
          </Img>
          <Text>Час: {date.format('HH:mm')}</Text>
          <Text>Місто: {currentCity.label}</Text>
        </LeftColumn>
        <DayInfo day={currentForecast} />
        <Close onClick={handlerClickClose}>
          <SharedSvgSelector id="close" width={18} height={18} />
        </Close>
      </StyledPopup>
    </Blur>
    : null;
};
