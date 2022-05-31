"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveDateTimeFormat = exports.saveDateFormat = void 0;
var formateDigit = function (num) {
    if (num > 9)
        return num;
    return "0".concat(num);
};
// handle date time save formate
var saveDateTimeFormat = function (date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hour;
    var minute = date.getMinutes();
    var format;
    if (date.getHours() > 12) {
        hour = date.getHours() % 12;
        format = 'PM';
    }
    else {
        hour = date.getHours();
        format = 'AM';
    }
    return "".concat(formateDigit(month), "/").concat(formateDigit(day), "/").concat(year, " ").concat(formateDigit(hour), ":").concat(formateDigit(minute), " ").concat(format);
};
exports.saveDateTimeFormat = saveDateTimeFormat;
// handle date save formate
var saveDateFormat = function (date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return "".concat(formateDigit(month), "/").concat(formateDigit(day), "/").concat(year);
};
exports.saveDateFormat = saveDateFormat;
