import React from 'react';
import { Section } from '../../styled';
import { DaysList } from './styled';
import { DayCard } from '../../ui/day-card/day-card';
import { Tabs } from '../../layouts/tabs/tabs';

interface DaysProps {

};

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export function Days(props: DaysProps) {
  const days: Day[] = [
    {
      day: 'Сьогодні',
      day_info: '13 липня',
      icon_id: 'sun',
      temp_day: '+19',
      temp_night: '+15',
      info: 'Хмарно',
    }, {
      day: 'Завтра',
      day_info: '13 липня',
      icon_id: 'sun',
      temp_day: '+19',
      temp_night: '+15',
      info: 'Хмарно',
    }, {
      day: 'Понеділок',
      day_info: '13 липня',
      icon_id: 'sun',
      temp_day: '+19',
      temp_night: '+15',
      info: 'Хмарно',
    }, {
      day: 'Вівторок',
      day_info: '13 липня',
      icon_id: 'sun',
      temp_day: '+19',
      temp_night: '+15',
      info: 'Хмарно',
    }, {
      day: 'Середа',
      day_info: '13 липня',
      icon_id: 'sun',
      temp_day: '+19',
      temp_night: '+15',
      info: 'Хмарно',
    }, {
      day: 'Четвер',
      day_info: '13 липня',
      icon_id: 'sun',
      temp_day: '+19',
      temp_night: '+15',
      info: 'Хмарно',
    }, {
      day: 'П\'ятниця',
      day_info: '13 липня',
      icon_id: 'sun',
      temp_day: '+19',
      temp_night: '+15',
      info: 'Хмарно',
    },
  ];

  return (
    <>
      <Tabs />
      <Section>
        <DaysList>
          {days.map((day: Day) => (
            <DayCard key={day.day} day={day} />
          ))}
        </DaysList>
      </Section>
    </>
  );
};
