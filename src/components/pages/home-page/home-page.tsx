import React, { useEffect } from 'react';
import ThisDay from '../../blocks/this-day/this-day';
import { DayInfo } from '../../blocks/day-info/day-info';
import { HomePageWrapper, StyledSection } from './styled';
import { Days } from '../../blocks/days/days';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import { fetchCurrentWeather } from '../../../store/thunks/fetch-current-weather';
import { selectCurrentWeatherData } from '../../../store/selectors';
import { Loader } from '../../ui/loader/loader';
import { fetchForecastWeather } from '../../../store/thunks/fetch-forecast-weather';
import { Popup } from '../../layouts/popup/popup';

function HomePage() {
  const dispatch = useCustomDispatch();
  const {weather, currentCity, isLoading} = useCustomSelector(selectCurrentWeatherData);
  useEffect(() => {
    dispatch(fetchCurrentWeather(currentCity));
    dispatch(fetchForecastWeather(currentCity));
  }, [currentCity, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <HomePageWrapper>
        <ThisDay weather={weather} currentCity={currentCity} />
        <StyledSection>
          <DayInfo day={weather} />
        </StyledSection>
      </HomePageWrapper>
      <Days />
      <Popup currentCity={currentCity} />
    </>
  );
}

export default HomePage;
