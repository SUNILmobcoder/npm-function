"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrePopulatedValue = void 0;
// function for getting the answer based on luggage key
const getPrePopulatedValue = (LUGGAGE_DATA, key, source) => {
    let question = LUGGAGE_DATA.Luggages[`${source}`]['questions'];
    let val = question[key] ? question[key] : null;
    return val ? (val['answers'] ? val['answers'] : ['DEFAULT']) : ['DEFAULT'];
};
exports.getPrePopulatedValue = getPrePopulatedValue;
