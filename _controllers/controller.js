"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderQuestionGroups = exports.renderStations = void 0;
// true => not to render
// false => render
var renderStations = function (station) {
    var Hidden = station.Hidden, ActivatedBy = station.ActivatedBy;
    if (Hidden === 'Y' && !ActivatedBy)
        return true;
    return false;
};
exports.renderStations = renderStations;
// true => not to render
// false => render
var renderQuestionGroups = function (questionGroup) {
    var Hidden = questionGroup.Hidden, ActivatedBy = questionGroup.ActivatedBy;
    if (Hidden === 'Y' && !ActivatedBy)
        return true;
    return false;
};
exports.renderQuestionGroups = renderQuestionGroups;
