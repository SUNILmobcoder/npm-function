import { ActivatedByProps } from "../_types";
import { luggageLookup, questionLookup } from "./";

let QUESTION_LIST: {
  [key: string]: {
    StationName: string;
    QuestionGroup: string;
    UserResponse: any;
    error: string;
  };
};

const activatedBy = (
  props: ActivatedByProps[],
  questions,
  stationData,
  keyValues
) => {
  QUESTION_LIST = questions;
  // QUESTION_LIST = store.getState().fiscript.questions;
  let active: boolean = false;
  if (QUESTION_LIST) {
    // iterate over the array
    props.forEach((item) => {
      active =
        active || handleActivatedBy(item, questions, stationData, keyValues);
    });
  }
  return active === undefined ? false : active;
};

//  activatedBy handle function and return boolean
// true : render
// false : not render
const handleActivatedBy = (
  props: ActivatedByProps,
  questions,
  stationData,
  keyValues
): boolean => {
  // get question as key:value
  let result: boolean = false;

  let { ActivatedBy, Operator, Values, Key, LuggageSource, Type } = props;

  // handle if it is Luggage type
  if (Type === "Luggage" && Operator && Values) {
    let luggageLookupValue = luggageLookup(
      Operator,
      Values,
      Key,
      LuggageSource
    );
    result = result || luggageLookupValue;

    // handle nested activatedBy key
    if (ActivatedBy) {
      let luggageLookupValues = activatedBy(
        ActivatedBy,
        questions,
        stationData,
        keyValues
      );
      result = result && luggageLookupValues;
    }
  }

  // handle if it is Question type
  if (Type === "Question" && Operator && Values && QUESTION_LIST) {
    try {
      let stationName = QUESTION_LIST[`${Key}`]["StationName"];
      let questionGroup = QUESTION_LIST[`${Key}`]["QuestionGroup"];
      let userResponse = getQuestion(
        stationName,
        questionGroup,
        Key,
        stationData
      );
      let questionLookupValue = questionLookup(
        keyValues,
        Operator,
        userResponse,
        Values
      );
      result = result || questionLookupValue;
      // handle nested activatedBy key
      if (ActivatedBy) {
        let questionLookupValues = activatedBy(
          ActivatedBy,
          questions,
          stationData,
          keyValues
        );
        result = result && questionLookupValues;
      }
    } catch {
      console.log("Didn't find ", Key);
    }
  }

  return result;
};

// function for get the curresponding userResponse of the question
const getQuestion = (
  stationName: string,
  questionGroup: string,
  key: string,
  stationData
) => {
  // get the data from store
  let stations = stationData;
  // let stations = store.getState().fiscript.stationData;

  let value: string[] | null = stations[stationName]["QuestionGroups"]
    .filter((item) => item.Name === questionGroup)[0]
    ["Questions"].filter((item) => item.Name === key)[0]["userResponse"];
  return value === null ? [] : value;
};

export default activatedBy;
