// import { langPack } from "../utils";

// get the language pack key:value from store
// let LANGUAGE_PACK: { [key: string]: string } = langPack.keyValues;

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

// function for handle operators
const questionLookup = (
  keyValues,
  operator: string,
  ANSWERS: string[],
  value: string[]
) => {
  let LANGUAGE_PACK: { [key: string]: string } = keyValues;
  value = value.map((item: string) =>
    LANGUAGE_PACK[item] ? LANGUAGE_PACK[item] : item
  );

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

  return result;
};

export default questionLookup;
