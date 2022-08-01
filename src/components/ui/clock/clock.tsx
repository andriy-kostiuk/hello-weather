import React, { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export function Clock() {
  const [time, setTime] = useState(dayjs());

  const updateTime = () => {
    setTime(dayjs());
  };

  useEffect(() => {
    const update = setInterval(updateTime, 1000);
    return () => {
      clearInterval(update);
    };
  }, [time]);


  return (
    <span>
      {time.format('HH:mm:ss')}
    </span>
  );
};
