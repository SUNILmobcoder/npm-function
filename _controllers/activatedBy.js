"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activatedBy = void 0;
var luggageLookup_1 = require("./luggageLookup");
var questionLookup_1 = require("./questionLookup");
var activatedBy = function (props, QUESTION_LIST, LUGGAGE, LANGUAGE, STATIONS) {
    var active = false;
    if (QUESTION_LIST) {
        // iterate over the array
        props.forEach(function (item) {
            active = active || handleActivatedBy(item, LUGGAGE, QUESTION_LIST, LANGUAGE, STATIONS);
        });
    }
    return active === undefined ? false : active;
};
exports.activatedBy = activatedBy;
//  activatedBy handle function and return boolean
// true : render
// false : not render
var handleActivatedBy = function (props, LUGGAGE, QUESTION_LIST, LANGUAGE, STATIONS) {
    // get question as key:value
    var result = false;
    var ActivatedBy = props.ActivatedBy, Operator = props.Operator, Values = props.Values, Key = props.Key, LuggageSource = props.LuggageSource, Type = props.Type;
    // handle if it is Luggage type
    if (Type === 'Luggage' && Operator && Values) {
        var luggageLookupValue = (0, luggageLookup_1.luggageLookup)(LUGGAGE, Operator, Values, Key, LuggageSource);
        result = result || luggageLookupValue;
        // handle nested activatedBy key
        if (ActivatedBy) {
            var luggageLookupValues = activatedBy(ActivatedBy, QUESTION_LIST, LUGGAGE, LANGUAGE, STATIONS);
            result = result && luggageLookupValues;
        }
    }
    // handle if it is Question type
    if (Type === 'Question' && Operator && Values && QUESTION_LIST) {
        try {
            var stationName = QUESTION_LIST["".concat(Key)]['StationName'];
            var questionGroup = QUESTION_LIST["".concat(Key)]['QuestionGroup'];
            var userResponse = getQuestion(stationName, questionGroup, Key, STATIONS);
            var questionLookupValue = (0, questionLookup_1.questionLookup)(LANGUAGE, Operator, userResponse, Values);
            result = result || questionLookupValue;
            // handle nested activatedBy key
            if (ActivatedBy) {
                var questionLookupValues = activatedBy(ActivatedBy, QUESTION_LIST, LUGGAGE, LANGUAGE, STATIONS);
                result = result && questionLookupValues;
            }
        }
        catch (_a) {
            console.log("Didn't find ", Key);
        }
    }
    return result;
};
// function for get the curresponding userResponse of the question
var getQuestion = function (stationName, questionGroup, key, stations) {
    var value = stations[stationName]['QuestionGroups']
        .filter(function (item) { return item.Name === questionGroup; })[0]['Questions'].filter(function (item) { return item.Name === key; })[0]['userResponse'];
    return value === null ? [] : value;
};
