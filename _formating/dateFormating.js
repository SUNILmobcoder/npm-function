"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveDateTimeFormat = exports.saveDateFormat = void 0;
const formateDigit = (num) => {
    if (num > 9)
        return num;
    return `0${num}`;
};
// handle date time save formate
const saveDateTimeFormat = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    let hour;
    const minute = date.getMinutes();
    let format;
    if (date.getHours() > 12) {
        hour = date.getHours() % 12;
        format = 'PM';
    }
    else {
        hour = date.getHours();
        format = 'AM';
    }
    return `${formateDigit(month)}/${formateDigit(day)}/${year} ${formateDigit(hour)}:${formateDigit(minute)} ${format}`;
};
exports.saveDateTimeFormat = saveDateTimeFormat;
// handle date save formate
const saveDateFormat = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${formateDigit(month)}/${formateDigit(day)}/${year}`;
};
exports.saveDateFormat = saveDateFormat;
