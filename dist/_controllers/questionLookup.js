"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionLookup = void 0;
// function for check it both array have common value(one | more)
const contains = (arr1, arr2) => {
    let obj = {};
    arr1.forEach((value) => {
        if (!obj[value]) {
            obj[value] = true;
        }
    });
    return arr2.some((value) => obj[value] === true);
};
// function for handle operators
const questionLookup = (LANGUAGE_PACK, operator, ANSWERS, value) => {
    value = value.map((item) => (LANGUAGE_PACK[item] ? LANGUAGE_PACK[item] : item));
    let result = false;
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
            return value.some((val) => ANSWERS === null || ANSWERS === void 0 ? void 0 : ANSWERS.some((num) => parseInt(val) > parseInt(num)));
        }
        return false;
    }
    if (operator === 'Lt') {
        if (ANSWERS !== null || ANSWERS !== undefined) {
            return value.some((val) => ANSWERS === null || ANSWERS === void 0 ? void 0 : ANSWERS.some((num) => parseInt(val) < parseInt(num)));
        }
        return false;
    }
    return result;
};
exports.questionLookup = questionLookup;
