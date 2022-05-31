"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrePopulatedValue = void 0;
// function for getting the answer based on luggage key
var getPrePopulatedValue = function (LUGGAGE_DATA, key, source) {
    var question = LUGGAGE_DATA.Luggages["".concat(source)]['questions'];
    var val = question[key] ? question[key] : null;
    return val ? (val['answers'] ? val['answers'] : ['DEFAULT']) : ['DEFAULT'];
};
exports.getPrePopulatedValue = getPrePopulatedValue;
