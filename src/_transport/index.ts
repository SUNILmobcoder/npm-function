import { activatedBy, getDefaultValue, getDefaultValueSelect, getPrePopulatedValue } from '../_controllers';
import { LuggageProps, QuestionGroupProps, QuestionProps, QusetionsProps, StationProps } from '../_types';
import { handleValidate } from '../_validation';

let USER_RESPONSE: any;
let ERROR: boolean;
let TOTAL_ERROR_COUNT: { [stationName: string]: number };
let ERROR_COLLECTION: { QuestionName: string; error: string }[];

let QUESTION_LIST: QusetionsProps;
let LUGGAGE: LuggageProps;
let LANGUAGE: { [key: string]: string };
let STATIONS: { [key: string]: StationProps };

interface AnswerProps {
  Name: string;
  Values: string[];
}

// function for checking that It should include in Answer or not
const validateData = (visible?: string, hidden?: string, activated?: any) => {
  if (activated && activatedBy(activated, QUESTION_LIST, LUGGAGE, LANGUAGE, STATIONS)) return true;
  if (visible === 'N') return false;
  if (!activated) return true;
  return false;
};

// get user answer
const getAnswerByQuestion = (props: QuestionProps) => {
  let { Name, Required, Validation, PrePopulate, Answers, Type, StationName } = props;
  let answer = USER_RESPONSE[Name].UserResponse;

  // if question have validation
  if (Validation) {
    let str = answer;
    let valid = handleValidate(props, str);
    if (valid === 'true') {
      return { Name: Name, Values: answer };
    } else {
      ERROR_COLLECTION.push({ QuestionName: Name, error: valid });
      if (StationName)
        TOTAL_ERROR_COUNT[StationName] = TOTAL_ERROR_COUNT[StationName] ? TOTAL_ERROR_COUNT[StationName] + 1 : 1;
      ERROR = true;
      return null;
    }
  }

  // if question have prepopulated values and response is null
  if (PrePopulate && answer === null) {
    if (PrePopulate.PrePopulatedBy.LuggageSource) {
      console.log('at getPrePopulatedValue', LUGGAGE);

      let preValue = getPrePopulatedValue(
        LUGGAGE,
        PrePopulate.PrePopulatedBy.Key,
        PrePopulate.PrePopulatedBy.LuggageSource,
      );
      if (preValue[0] !== 'DEFAULT') {
        return { Name: Name, Values: preValue };
      }
    }
  }

  // if answer have default option and
  if (Answers && answer === null) {
    if (Type === 'MultiSelect') {
      let defaultValue = getDefaultValueSelect(Answers);
      if (defaultValue.length > 0) {
        answer = defaultValue;
        return { Name: Name, Values: defaultValue };
      }
    }
    if (Type === 'SingleSelect') {
      let defaultValue = getDefaultValue(Answers);
      if (defaultValue !== 'DEFAULT') {
        answer = [defaultValue];
        return { Name: Name, Values: [defaultValue] };
      }
    }
  }

  // if question is required and response is null
  if (Required === 'Y' && answer === null) {
    ERROR_COLLECTION.push({ QuestionName: Name, error: 'This is required field' });
    if (StationName)
      TOTAL_ERROR_COUNT[StationName] = TOTAL_ERROR_COUNT[StationName] ? TOTAL_ERROR_COUNT[StationName] + 1 : 1;
    ERROR = true;
    return null;
  }

  return { Name: Name, Values: answer };
};

// handle questions
const handleGetAnswerByQuestions = (props: QuestionProps[]) => {
  let ANSWERS: AnswerProps[] = [];
  props.forEach((item) => {
    let { Visible, Hidden, ActivatedBy } = item;
    if (validateData(Visible, Hidden, ActivatedBy)) {
      let val = getAnswerByQuestion(item);
      if (val !== null) ANSWERS.push(val);
    }
  });
  return ANSWERS;
};

// handle question group
const handleGetAnswerByQuestionGroup = (props: QuestionGroupProps) => {
  let { Visible, Hidden, ActivatedBy, Questions } = props;
  let ANSWERS: AnswerProps[] = [];
  if (validateData(Visible, Hidden, ActivatedBy)) ANSWERS = ANSWERS.concat(handleGetAnswerByQuestions(Questions));
  return ANSWERS;
};

// handle station
const handleGetAnsweByStation = (props: StationProps) => {
  let { QuestionGroups } = props;
  let ANSWERS: AnswerProps[] = [];
  QuestionGroups.forEach((item) => {
    let { Visible, Hidden, ActivatedBy } = item;
    if (validateData(Visible, Hidden, ActivatedBy)) ANSWERS = ANSWERS.concat(handleGetAnswerByQuestionGroup(item));
  });
  return ANSWERS;
};

const handleSaveTransport = (
  station: { [key: string]: StationProps },
  QUESTION_LIST: QusetionsProps,
  Luggage: LuggageProps,
  Language: { [key: string]: string },
) => {
  USER_RESPONSE = QUESTION_LIST;
  LUGGAGE = Luggage;
  LANGUAGE = Language;
  STATIONS = station;

  console.log('at station', LUGGAGE);

  ERROR = false;
  TOTAL_ERROR_COUNT = {};
  let ANSWERS: AnswerProps[] = [];
  ERROR_COLLECTION = [];

  Object.entries(STATIONS).forEach((item) => {
    let { Visible, Hidden, ActivatedBy } = item[1];
    if (validateData(Visible, Hidden, ActivatedBy)) ANSWERS = ANSWERS.concat(handleGetAnsweByStation(item[1]));
  });
  return { error: ERROR, ANSWERS, errorMsg: ERROR_COLLECTION };
};

export { handleSaveTransport };
