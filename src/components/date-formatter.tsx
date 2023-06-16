import dayjs from 'dayjs';

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = dayjs(dateString).format('DD-MMM-YYYY');

  return <time dateTime={dateString}>{date}</time>;
};

export default DateFormatter;
