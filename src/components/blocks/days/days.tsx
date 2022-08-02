import React, { useState } from 'react';
import { DayCard } from '../../ui/day-card/day-card';
import { Tabs } from '../../layouts/tabs/tabs';
import { useCustomSelector } from '../../../hooks/store';
import { selectForecastWeatherData } from '../../../store/selectors';
import { Weather } from '../../../interfaces/weather';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from 'swiper';
import { StyledDiv, SwiperStyled } from './styled';
import { VisuallyHiddenTitle } from '../../ui/visually-hidden-title/visually-hidden-title';
import 'swiper/css';
import 'swiper/css/scrollbar';

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

export interface Tab {
  value: string;
  content: Weather[];
}

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export function Days() {
  const {forecastTomorrow, forecastThreeDays, forecastFiveDays} = useCustomSelector(selectForecastWeatherData);
  const [activeTab, setActiveTab] = useState<number>(0);

  const handlerTabClick = (index: number): void => {
    setActiveTab(index);
  };

  const tabs: Tab[] = [
    {
      value: 'на завтра',
      content: forecastTomorrow,
    },
    {
      value: 'на 3 дні',
      content: forecastThreeDays,

    },
    {
      value: 'на 5 днів',
      content: forecastFiveDays,
    },
  ];

  return (
    <section>
      <VisuallyHiddenTitle size={2}>{`Прогноз погоди ${tabs[activeTab].value}`}</VisuallyHiddenTitle>
      <Tabs tabs={tabs} onClick={handlerTabClick} activeTab={activeTab} />
      <StyledDiv>
        <SwiperStyled
          spaceBetween={20}
          direction="horizontal"
          slidesPerView="auto"
          scrollbar={{draggable: false}}
          mousewheel={true}
          pagination={{
            type: 'fraction',
          }}
        >
          {tabs[activeTab].content.map((day) => (
            <SwiperSlide key={day.dt_txt}>
              <DayCard day={day} />
            </SwiperSlide>))}
        </SwiperStyled>
      </StyledDiv>
    </section>
  );
};
