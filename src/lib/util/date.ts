import dayjs, { Dayjs } from "dayjs";

// https://v3.ko.vuejs.org/guide/migration/filters.html

export const formatTime = (time: Dayjs | Date | string | number) => {
  return dayjs(time).format("YYYY-MM-DD HH:mm:ss");
};

export const formatYYMMDD = (time: Dayjs | Date | string | number) => {
  return dayjs(time).format("YYYY-MM-DD");
};

export const formatUTC = (time: Dayjs | Date | string | number) => {
  return dayjs(time).utc().format("YYYY-MM-DD HH:mm:ss");
};

export const formatLocal = (time: Dayjs | Date | string | number) => {
  return dayjs(time).local().format("YYYY-MM-DD HH:mm:ss");
};

export const getDayjs = (time: Date | string | number) => {
  return dayjs(time);
};
