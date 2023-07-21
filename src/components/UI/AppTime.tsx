import dayjs from 'dayjs';
import React, { FunctionComponent, useMemo } from 'react';

export type AppTimeProps = {
  dateTime: string;
  format?: string;
};

const AppTime: FunctionComponent<AppTimeProps> = ({
  dateTime,
  format = 'DD-MMM-YYYY HH:mm',
}) => {
  const formattedDateTime = useMemo(
    () => dayjs(dateTime).format(format),
    [dateTime]
  );
  return <time dateTime={dateTime}>{formattedDateTime}</time>;
};

export default AppTime;
