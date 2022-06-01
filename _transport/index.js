"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSaveTransport = void 0;
const _controllers_1 = require("../_controllers");
const _validation_1 = require("../_validation");
let USER_RESPONSE;
let ERROR;
let TOTAL_ERROR_COUNT;
let ERROR_COLLECTION;
let QUESTION_LIST;
let LUGGAGE;
let LANGUAGE;
let STATIONS;
// function for checking that It should include in Answer or not
const validateData = (visible, hidden, activated) => {
    if (activated && (0, _controllers_1.activatedBy)(activated, QUESTION_LIST, LUGGAGE, LANGUAGE, STATIONS))
        return true;
    if (visible === 'N')
        return false;
    if (!activated)
        return true;
    return false;
};
// get user answer
const getAnswerByQuestion = (props) => {
    let { Name, Required, Validation, PrePopulate, Answers, Type, StationName } = props;
    let answer = USER_RESPONSE[Name].UserResponse;
    // if question have validation
    if (Validation) {
        let str = answer;
        let valid = (0, _validation_1.handleValidate)(props, str);
        if (valid === 'true') {
            return { Name: Name, Values: answer };
        }
        else {
            ERROR_COLLECTION.push({ name: Name, error: valid });
            if (StationName)
                TOTAL_ERROR_COUNT[StationName] = TOTAL_ERROR_COUNT[StationName] ? TOTAL_ERROR_COUNT[StationName] + 1 : 1;
            ERROR = true;
            return null;
        }
    }
    // if question have prepopulated values and response is null
    if (PrePopulate && answer === null) {
        if (PrePopulate.PrePopulatedBy.LuggageSource) {
            let preValue = (0, _controllers_1.getPrePopulatedValue)(LUGGAGE, PrePopulate.PrePopulatedBy.Key, PrePopulate.PrePopulatedBy.LuggageSource);
            if (preValue[0] !== 'DEFAULT') {
                return { Name: Name, Values: preValue };
            }
        }
    }
    // if answer have default option and
    if (Answers && answer === null) {
        if (Type === 'MultiSelect') {
            let defaultValue = (0, _controllers_1.getDefaultValueSelect)(Answers);
            if (defaultValue.length > 0) {
                answer = defaultValue;
                return { Name: Name, Values: defaultValue };
            }
        }
        if (Type === 'SingleSelect') {
            let defaultValue = (0, _controllers_1.getDefaultValue)(Answers);
            if (defaultValue !== 'DEFAULT') {
                answer = [defaultValue];
                return { Name: Name, Values: [defaultValue] };
            }
        }
    }
    // if question is required and response is null
    if (Required === 'Y' && answer === null) {
        ERROR_COLLECTION.push({ name: Name, error: 'This is required field' });
        if (StationName)
            TOTAL_ERROR_COUNT[StationName] = TOTAL_ERROR_COUNT[StationName] ? TOTAL_ERROR_COUNT[StationName] + 1 : 1;
        ERROR = true;
        return null;
    }
    return { Name: Name, Values: answer };
};
// handle questions
const handleGetAnswerByQuestions = (props) => {
    let ANSWERS = [];
    props.forEach((item) => {
        let { Visible, Hidden, ActivatedBy } = item;
        if (validateData(Visible, Hidden, ActivatedBy)) {
            let val = getAnswerByQuestion(item);
            if (val !== null)
                ANSWERS.push(val);
        }
    });
    return ANSWERS;
};
// handle question group
const handleGetAnswerByQuestionGroup = (props) => {
    let { Visible, Hidden, ActivatedBy, Questions } = props;
    let ANSWERS = [];
    if (validateData(Visible, Hidden, ActivatedBy))
        ANSWERS = ANSWERS.concat(handleGetAnswerByQuestions(Questions));
    return ANSWERS;
};
// handle station
const handleGetAnsweByStation = (props) => {
    let { QuestionGroups } = props;
    let ANSWERS = [];
    QuestionGroups.forEach((item) => {
        let { Visible, Hidden, ActivatedBy } = item;
        if (validateData(Visible, Hidden, ActivatedBy))
            ANSWERS = ANSWERS.concat(handleGetAnswerByQuestionGroup(item));
    });
    return ANSWERS;
};
const handleSaveTransport = (station, QUESTION_LIST, LUGGAGE, LANGUAGE) => {
    USER_RESPONSE = QUESTION_LIST;
    LUGGAGE = LUGGAGE;
    LANGUAGE = LANGUAGE;
    STATIONS = station;
    ERROR = false;
    TOTAL_ERROR_COUNT = {};
    let ANSWERS = [];
    Object.entries(STATIONS).forEach((item) => {
        let { Visible, Hidden, ActivatedBy } = item[1];
        if (validateData(Visible, Hidden, ActivatedBy))
            ANSWERS = ANSWERS.concat(handleGetAnsweByStation(item[1]));
    });
    console.log('TOTAL_ERROR_COUNT', TOTAL_ERROR_COUNT);
    return { error: ERROR, ANSWERS, errorMsg: ERROR_COLLECTION };
};
exports.handleSaveTransport = handleSaveTransport;
