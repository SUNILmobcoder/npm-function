const formateDigit = (num: number) => {
  if (num > 9) return num;
  return `0${num}`;
};

// handle date time save formate
const saveDateTimeFormat = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  let hour: number;
  const minute = date.getMinutes();
  let format: string;
  if (date.getHours() > 12) {
    hour = date.getHours() % 12;
    format = "PM";
  } else {
    hour = date.getHours();
    format = "AM";
  }

  return `${formateDigit(month)}/${formateDigit(day)}/${year} ${formateDigit(
    hour
  )}:${formateDigit(minute)} ${format}`;
};

// handle date save formate
const saveDateFormat = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${formateDigit(month)}/${formateDigit(day)}/${year}`;
};

export { saveDateFormat, saveDateTimeFormat };
