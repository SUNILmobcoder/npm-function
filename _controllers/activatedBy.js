"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activatedBy = void 0;
const luggageLookup_1 = require("./luggageLookup");
const questionLookup_1 = require("./questionLookup");
const activatedBy = (props, QUESTION_LIST, LUGGAGE, LANGUAGE, STATIONS) => {
    let active = false;
    if (QUESTION_LIST) {
        // iterate over the array
        props.forEach((item) => {
            active = active || handleActivatedBy(item, LUGGAGE, QUESTION_LIST, LANGUAGE, STATIONS);
        });
    }
    return active === undefined ? false : active;
};
exports.activatedBy = activatedBy;
//  activatedBy handle function and return boolean
// true : render
// false : not render
const handleActivatedBy = (props, LUGGAGE, QUESTION_LIST, LANGUAGE, STATIONS) => {
    // get question as key:value
    let result = false;
    let { ActivatedBy, Operator, Values, Key, LuggageSource, Type } = props;
    // handle if it is Luggage type
    if (Type === 'Luggage' && Operator && Values) {
        let luggageLookupValue = (0, luggageLookup_1.luggageLookup)(LUGGAGE, Operator, Values, Key, LuggageSource);
        result = result || luggageLookupValue;
        // handle nested activatedBy key
        if (ActivatedBy) {
            let luggageLookupValues = activatedBy(ActivatedBy, QUESTION_LIST, LUGGAGE, LANGUAGE, STATIONS);
            result = result && luggageLookupValues;
        }
    }
    // handle if it is Question type
    if (Type === 'Question' && Operator && Values && QUESTION_LIST) {
        try {
            let stationName = QUESTION_LIST[`${Key}`]['StationName'];
            let questionGroup = QUESTION_LIST[`${Key}`]['QuestionGroup'];
            let userResponse = getQuestion(stationName, questionGroup, Key, STATIONS);
            let questionLookupValue = (0, questionLookup_1.questionLookup)(LANGUAGE, Operator, userResponse, Values);
            result = result || questionLookupValue;
            // handle nested activatedBy key
            if (ActivatedBy) {
                let questionLookupValues = activatedBy(ActivatedBy, QUESTION_LIST, LUGGAGE, LANGUAGE, STATIONS);
                result = result && questionLookupValues;
            }
        }
        catch (_a) {
            console.log("Didn't find ", Key);
            result = result && false;
        }
    }
    return result;
};
// function for get the curresponding userResponse of the question
const getQuestion = (stationName, questionGroup, key, stations) => {
    let value = stations[stationName]['QuestionGroups']
        .filter((item) => item.Name === questionGroup)[0]['Questions'].filter((item) => item.Name === key)[0]['userResponse'];
    return value === null ? [] : value;
};
