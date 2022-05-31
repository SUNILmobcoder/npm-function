"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderStations = void 0;
// true => not to render
// false => render
var renderStations = function (station) {
    var Hidden = station.Hidden, ActivatedBy = station.ActivatedBy;
    if (Hidden === 'Y' && !ActivatedBy)
        return true;
    return false;
};
exports.renderStations = renderStations;
