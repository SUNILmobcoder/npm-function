"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderQuestionGroups = exports.renderStations = void 0;
// true => not to render
// false => render
const renderStations = (station) => {
    let { Hidden, ActivatedBy, Visible } = station;
    if (!Hidden && Visible === 'Y')
        return false;
    if (Hidden === 'Y' && !ActivatedBy)
        return true;
    return false;
};
exports.renderStations = renderStations;
// true => not to render
// false => render
const renderQuestionGroups = (questionGroup) => {
    let { Hidden, ActivatedBy, Visible } = questionGroup;
    if (!Hidden && Visible === 'Y')
        return false;
    if (Hidden === 'Y' && !ActivatedBy)
        return true;
    return false;
};
exports.renderQuestionGroups = renderQuestionGroups;
