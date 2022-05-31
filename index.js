function formateDigit(num) {
  if (num > 9) return num;
  return "0" + num;
}

// handle date time save formate
function saveDateTimeFormat(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  let hour;
  const minute = date.getMinutes();
  let format;
  if (date.getHours() > 12) {
    hour = date.getHours() % 12;
    format = "PM";
  } else {
    hour = date.getHours();
    format = "AM";
  }

  return (
    formateDigit(month) +
    "/" +
    formateDigit(day) +
    "/" +
    year +
    formateDigit(hour) +
    ":" +
    formateDigit(minute) +
    format
  );
}

// handle date save formate
function saveDateFormat(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return formateDigit(month) + "/" + formateDigit(day) + "/" + year;
}

module.export = { saveDateFormat, saveDateTimeFormat };
