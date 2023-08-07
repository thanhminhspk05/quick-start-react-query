import * as dayjs from 'dayjs';

export const convertToFullDateTime = (input: string | number | Date): string => {
  const dateTime = dayjs(input);
  const formattedDateTime = dateTime.format('YYYY-MM-DD HH:mm:ss');
  return formattedDateTime;
};

export const convertToFullDate = (input: string | number): string => {
  const dateTime = dayjs(input);
  const formattedDate = dateTime.format('YYYY-MM-DD');
  return formattedDate;
};

export const convertDateWithFormat = (input: string, format: string) => {
  const dateTime = dayjs(input);
  const formattedDate = dateTime.format(format);
  return formattedDate;
};

export const trimDateTime = (input: string | number | Date, format = 'YYYYMMDDHHmmss'): string => {
  return dayjs(input).format(format) || '';
};

export const formatSearchDateTime = (value = '') => {
  return value.replace(/-/g, '').replace(/ /g, '').replace(/:/g, '') || '';
};
