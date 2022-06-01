import { ActivatedByProps, LuggageProps, QusetionsProps, StationProps } from '../_types';
import { luggageLookup } from './luggageLookup';
import { questionLookup } from './questionLookup';

let KEY_NOT_FOUND: boolean = false;

const activatedBy = (
  props: ActivatedByProps[],
  QUESTION_LIST: QusetionsProps,
  LUGGAGE: LuggageProps,
  LANGUAGE: { [key: string]: string },
  STATIONS: { [key: string]: StationProps },
) => {
  let active: boolean = false;
  if (QUESTION_LIST) {
    // iterate over the array
    props.forEach((item) => {
      active = active || handleActivatedBy(item, LUGGAGE, QUESTION_LIST, LANGUAGE, STATIONS);
    });
  }
  if (KEY_NOT_FOUND) return false;
  return active === undefined ? false : active;
};

//  activatedBy handle function and return boolean
// true : render
// false : not render
const handleActivatedBy = (
  props: ActivatedByProps,
  LUGGAGE: LuggageProps,
  QUESTION_LIST: QusetionsProps,
  LANGUAGE: { [key: string]: string },
  STATIONS: { [key: string]: StationProps },
): boolean => {
  // get question as key:value
  let result: boolean = false;

  let { ActivatedBy, Operator, Values, Key, LuggageSource, Type } = props;

  // handle if it is Luggage type
  if (Type === 'Luggage' && Operator && Values) {
    try {
      let luggageLookupValue = luggageLookup(LUGGAGE, Operator, Values, Key, LuggageSource);
      result = result || luggageLookupValue;

      // handle nested activatedBy key
      if (ActivatedBy) {
        let luggageLookupValues = activatedBy(ActivatedBy, QUESTION_LIST, LUGGAGE, LANGUAGE, STATIONS);
        result = result && luggageLookupValues;
      }
    } catch {
      console.log("Didn't find ", Key);
      return false;
      KEY_NOT_FOUND = true;
    }
  }

  // handle if it is Question type
  if (Type === 'Question' && Operator && Values && QUESTION_LIST) {
    try {
      let stationName = QUESTION_LIST[`${Key}`]['StationName'];
      let questionGroup = QUESTION_LIST[`${Key}`]['QuestionGroup'];
      let userResponse = getQuestion(stationName, questionGroup, Key, STATIONS);
      let questionLookupValue = questionLookup(LANGUAGE, Operator, userResponse, Values);
      result = result || questionLookupValue;
      // handle nested activatedBy key
      if (ActivatedBy) {
        let questionLookupValues = activatedBy(ActivatedBy, QUESTION_LIST, LUGGAGE, LANGUAGE, STATIONS);
        result = result && questionLookupValues;
      }
    } catch {
      console.log("Didn't find ", Key);
      return false;
      KEY_NOT_FOUND = true;
    }
  }

  return result;
};

// function for get the curresponding userResponse of the question
const getQuestion = (
  stationName: string,
  questionGroup: string,
  key: string,
  stations: { [key: string]: StationProps },
) => {
  let value: string[] | null = stations[stationName]['QuestionGroups']
    .filter((item) => item.Name === questionGroup)[0]
    ['Questions'].filter((item) => item.Name === key)[0]['userResponse'];
  return value === null ? [] : value;
};

export { activatedBy };
