"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.luggageLookup = void 0;
// function for check it both array have common value(one | more)
var contains = function (arr1, arr2) {
    var obj = {};
    arr1.forEach(function (value) {
        if (!obj[value]) {
            obj[value] = true;
        }
    });
    return arr2.some(function (value) { return obj[value] === true; });
};
// function for validate data with luggage
var luggageLookup = function (luggage, operator, value, key, source) {
    var LUGGAGE_DATA = luggage;
    // get answer for particular key rom luggage data
    var SOURCE = source ? (LUGGAGE_DATA.Luggages["".concat(source)] ? LUGGAGE_DATA.Luggages["".concat(source)] : null) : null;
    var ANSWERS = SOURCE
        ? SOURCE.questions
            ? SOURCE.questions["".concat(key)]
                ? SOURCE.questions["".concat(key)].answers
                    ? SOURCE.questions["".concat(key)].answers
                    : null
                : null
            : null
        : null;
    // it answer exixts in luggage data
    if (ANSWERS) {
        var result = false;
        if (operator === 'Eq') {
            result = contains(ANSWERS, value);
            return result;
        }
        if (operator === 'Neq') {
            result = contains(ANSWERS, value);
            return !result;
        }
        if (operator === 'Hasvalue') {
            if (ANSWERS.length > 0)
                return true;
            return false;
        }
        if (operator === 'Gt') {
            if (ANSWERS !== null || ANSWERS !== undefined) {
                return value.some(function (val) { return ANSWERS === null || ANSWERS === void 0 ? void 0 : ANSWERS.some(function (num) { return parseInt(val) > parseInt(num); }); });
            }
            return false;
        }
        if (operator === 'Lt') {
            if (ANSWERS !== null || ANSWERS !== undefined) {
                return value.some(function (val) { return ANSWERS === null || ANSWERS === void 0 ? void 0 : ANSWERS.some(function (num) { return parseInt(val) < parseInt(num); }); });
            }
            return false;
        }
    }
    return false;
};
exports.luggageLookup = luggageLookup;
