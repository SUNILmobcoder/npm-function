import { QuestionProps } from "../_types";

const isEmpty = (str: string) => {
  if (str === "" || str === null || str === undefined) return true;
  return false;
};

const handleValidate = (
  props: QuestionProps,
  userResponse: string[],
  keyValues
) => {
  const LANGUAGE = keyValues;
  // const LANGUAGE = store.getState().lang.keyValues;
  let { Validation, Required, Type } = props;

  // if script have validation
  if (Validation) {
    // handle for text and multiline field
    if (Type === "TextField" || Type === "MultiLineText") {
      // handle validation if it have pattern
      if (Validation.pattern) {
        let regex = Validation.pattern.value;
        let msg = Validation.pattern.error;
        let pattern = new RegExp(regex);

        // if user haven't responsed
        if (userResponse === null) return LANGUAGE[msg] ? LANGUAGE[msg] : msg;

        // if validation didn't match
        if (!pattern.test(userResponse[0]))
          return LANGUAGE[msg] ? LANGUAGE[msg] : msg;
      }

      // handle validation if it hav min-max
      if (Validation.max && Validation.min) {
        let min = parseInt(Validation.min.value);
        let minMsg = Validation.min.error;

        let max = parseInt(Validation.max.value);
        let maxMsg = Validation.max.error;

        // if user haven't responsed
        if (userResponse === null)
          return LANGUAGE[minMsg] ? LANGUAGE[minMsg] : minMsg;

        if (userResponse[0].length < min) {
          return LANGUAGE[minMsg] ? LANGUAGE[minMsg] : minMsg;
        }
        if (userResponse[0].length > max) {
          return LANGUAGE[maxMsg] ? LANGUAGE[maxMsg] : maxMsg;
        }
      }
    }

    // handle for Numeric and Phone field
    if (Type === "Numeric" || Type === "Phone" || Type === "Currency") {
    }

    // handle for SingleSelect and MultiSelect field
    if (Type === "MultiSelect" || Type === "SingleSelect") {
    }
  }

  // if it is required and user haven't answered
  if (isEmpty(userResponse ? userResponse[0] : null)) {
    if (Required === "Y") return "This field is required";
  }

  return "true";
};

export { handleValidate };
