"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultValue = exports.getDefaultValueSelect = void 0;
// functions for filter the default option
const getDefaultValue = (props) => {
    let defaultOption = props.filter((item) => item.Default === 'Y');
    if (defaultOption.length > 0)
        return defaultOption[0].Key;
    return 'DEFAULT';
};
exports.getDefaultValue = getDefaultValue;
const getDefaultValueSelect = (props) => {
    let defaultOption = props.filter((item) => item.Default === 'Y');
    if (defaultOption.length > 0)
        return defaultOption.map((item) => item.Key);
    return [];
};
exports.getDefaultValueSelect = getDefaultValueSelect;
