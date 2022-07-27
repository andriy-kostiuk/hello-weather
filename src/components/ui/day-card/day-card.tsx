import React from 'react';
import { ListItem, Text, Img } from './styled';
import SharedSvgSelector from '../../../assets/icons/shared/shared-svg-selector';
import { Day } from '../../blocks/days/days';

interface Props {
  day: Day;
};


export function DayCard({day}: Props) {
  return (
    <ListItem tabIndex={0}>
      <Text $marginBottom={7} category="main">{day.day}</Text>
      <Text $marginBottom={12}>{day.day_info}</Text>
      <Img>
        <SharedSvgSelector id={day.icon_id} width={48} height={48} />
      </Img>
      <Text category="main">{day.temp_day}</Text>
      <Text $marginBottom={6}>{day.temp_night}</Text>
      <Text>{day.info}</Text>
    </ListItem>
  );
};
