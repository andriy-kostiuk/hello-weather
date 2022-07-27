import React from 'react';
import ThisDay from '../../blocks/this-day/this-day';
import { ThisDayInfo } from '../../blocks/this-day-info/this-day-info';
import { HomePageWrapper } from './styled';
import { Days } from '../../blocks/days/days';

function HomePage() {
  return (
    <>
      <HomePageWrapper>
        <ThisDay />
        <ThisDayInfo />
      </HomePageWrapper>
      <Days />
    </>
  );
}

export default HomePage;
