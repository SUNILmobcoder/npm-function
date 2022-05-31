// import { store } from "../_app";

// function for check it both array have common value(one | more)
const contains = (arr1: string[], arr2: string[]) => {
  let obj: { [key: string]: boolean } = {};
  arr1.forEach((value) => {
    if (!obj[value]) {
      obj[value] = true;
    }
  });
  return arr2.some((value) => obj[value] === true);
};

// function for validate data with luggage
const luggageLookup = (
  luggage,
  operator: string,
  value: string[],
  key: string,
  source?: string
) => {
  // get the luggage data from store
  let LUGGAGE_DATA = luggage;
  // let LUGGAGE_DATA = store.getState().luggage;

  // get answer for particular key rom luggage data
  let SOURCE = source
    ? LUGGAGE_DATA.Luggages[`${source}`]
      ? LUGGAGE_DATA.Luggages[`${source}`]
      : null
    : null;
  let ANSWERS = SOURCE
    ? SOURCE.questions
      ? SOURCE.questions[`${key}`]
        ? SOURCE.questions[`${key}`].answers
          ? SOURCE.questions[`${key}`].answers
          : null
        : null
      : null
    : null;

  // it answer exixts in luggage data
  if (ANSWERS) {
    let result: boolean = false;

    if (operator === "Eq") {
      result = contains(ANSWERS, value);
      return result;
    }

    if (operator === "Neq") {
      result = contains(ANSWERS, value);
      return !result;
    }

    if (operator === "Hasvalue") {
      if (ANSWERS.length > 0) return true;
      return false;
    }

    if (operator === "Gt") {
      if (ANSWERS !== null || ANSWERS !== undefined) {
        return value.some((val) =>
          ANSWERS?.some((num) => parseInt(val) > parseInt(num))
        );
      }
      return false;
    }

    if (operator === "Lt") {
      if (ANSWERS !== null || ANSWERS !== undefined) {
        return value.some((val) =>
          ANSWERS?.some((num) => parseInt(val) < parseInt(num))
        );
      }
      return false;
    }
  }

  return false;
};

export default luggageLookup;
