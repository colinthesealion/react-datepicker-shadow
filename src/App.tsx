import React from 'react';
import DatePicker from 'react-datepicker';

import Description from './Description';

interface AppProps {
  header: string;
  shadow?: boolean;
}

export default function App({ header, shadow }: AppProps): JSX.Element {
  const [date, setDate] = React.useState(new Date());
  const handleChange = React.useCallback(date => setDate(date), [setDate]);
  return (
    <>
      <h1>{header}</h1>
      <Description shadow={shadow} />
      <DatePicker selected={date} onChange={handleChange} calendarClassName="custom" withPortal portalId="123" />
    </>
  );
}
