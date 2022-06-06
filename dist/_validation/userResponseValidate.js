"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidate = void 0;
const isEmpty = (str) => {
    if (str === '' || str === null || str === undefined)
        return true;
    return false;
};
// (min-max) => TextField, MultiLineText, Numeric, Date, DateTime, Phone, Currency, MultiSelect
// (pattern) => TextField, MultiLineText
const handleValidate = (props, userResponse) => {
    let { Validation, Required, Type } = props;
    // if script have validation
    if (Validation) {
        // if user haven't responsed
        if (userResponse === null)
            return "This field can't be empty";
        // handle for text and multiline field
        if (Type === 'TextField' || Type === 'MultiLineText') {
            // handle validation if it have pattern
            if (Validation.pattern) {
                let regex = Validation.pattern.value;
                let msg = Validation.pattern.error;
                let pattern = new RegExp(regex);
                // if validation didn't match
                if (!pattern.test(userResponse[0]))
                    return msg;
            }
            // handle validation if it have max
            if (Validation.max) {
                let max = parseInt(Validation.max.value);
                let maxMsg = Validation.max.error;
                if (userResponse[0].length > max) {
                    return maxMsg;
                }
            }
            // handle validation if it have min
            if (Validation.min) {
                let min = parseInt(Validation.min.value);
                let minMsg = Validation.min.error;
                if (userResponse[0].length < min) {
                    return minMsg;
                }
            }
        }
        // handle for Numeric field
        if (Type === 'Numeric') {
            // handle validation if it have max
            if (Validation.max) {
                let max = parseInt(Validation.max.value);
                let maxMsg = Validation.max.error;
                if (parseInt(userResponse[0]) > max) {
                    return maxMsg;
                }
            }
            // handle validation if it have min
            if (Validation.min) {
                let min = parseInt(Validation.min.value);
                let minMsg = Validation.min.error;
                if (parseInt(userResponse[0]) < min) {
                    return minMsg;
                }
            }
        }
        // handle date and dateTime field
        if (Type === 'Date' || Type === 'DateTime') {
            // handle validation if it have max
            if (Validation.max) {
                let max = Validation.max.value;
                let maxMsg = Validation.max.error;
                if (new Date(userResponse[0]) > new Date(max)) {
                    return maxMsg;
                }
            }
            // handle validation if it have min
            if (Validation.min) {
                let min = Validation.min.value;
                let minMsg = Validation.min.error;
                if (new Date(userResponse[0]) < new Date(min)) {
                    return minMsg;
                }
            }
        }
        // handle for Phone field
        if (Type === 'Phone') {
            // handle validation if it have max
            if (Validation.max) {
                let max = parseInt(Validation.max.value);
                let maxMsg = Validation.max.error;
                if (userResponse[0].length > max) {
                    return maxMsg;
                }
            }
            // handle validation if it have min
            if (Validation.min) {
                let min = parseInt(Validation.min.value);
                let minMsg = Validation.min.error;
                if (userResponse[0].length < min) {
                    return minMsg;
                }
            }
        }
        // handle for Currency field
        if (Type === 'Currency') {
            // handle validation if it have max
            if (Validation.max) {
                let max = parseInt(Validation.max.value);
                let maxMsg = Validation.max.error;
                if (parseInt(userResponse[0]) > max) {
                    return maxMsg;
                }
            }
            // handle validation if it have min
            if (Validation.min) {
                let min = parseInt(Validation.min.value);
                let minMsg = Validation.min.error;
                if (parseInt(userResponse[0]) < min) {
                    return minMsg;
                }
            }
        }
        // handle for SingleSelect field
        if (Type === 'SingleSelect') {
        }
        // handle for MultiSelect field
        if (Type === 'MultiSelect') {
            // handle validation if it have max
            if (Validation.max) {
                let max = parseInt(Validation.max.value);
                let maxMsg = Validation.max.error;
                if (userResponse.length > max) {
                    return maxMsg;
                }
            }
            // handle validation if it have min
            if (Validation.min) {
                let min = parseInt(Validation.min.value);
                let minMsg = Validation.min.error;
                if (userResponse.length < min) {
                    return minMsg;
                }
            }
        }
    }
    // if it is required and user haven't answered
    if (isEmpty(userResponse ? userResponse[0] : userResponse)) {
        if (Required === 'Y')
            return 'This field is required';
    }
    return 'true';
};
exports.handleValidate = handleValidate;
