"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionLookup = void 0;
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
// function for handle operators
var questionLookup = function (LANGUAGE_PACK, operator, ANSWERS, value) {
    value = value.map(function (item) { return (LANGUAGE_PACK[item] ? LANGUAGE_PACK[item] : item); });
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
    return result;
};
exports.questionLookup = questionLookup;
