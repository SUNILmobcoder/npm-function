"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultValue = exports.getDefaultValueSelect = void 0;
// functions for filter the default option
var getDefaultValue = function (props) {
    var defaultOption = props.filter(function (item) { return item.Default === 'Y'; });
    if (defaultOption.length > 0)
        return defaultOption[0].Key;
    return 'DEFAULT';
};
exports.getDefaultValue = getDefaultValue;
var getDefaultValueSelect = function (props) {
    var defaultOption = props.filter(function (item) { return item.Default === 'Y'; });
    if (defaultOption.length > 0)
        return defaultOption.map(function (item) { return item.Key; });
    return [];
};
exports.getDefaultValueSelect = getDefaultValueSelect;
