import { AnswerProps } from '../_types';

// functions for filter the default option
const getDefaultValue = (props: AnswerProps[]) => {
  let defaultOption = props.filter((item) => item.Default === 'Y');
  if (defaultOption.length > 0) return defaultOption[0].Key;
  return 'DEFAULT';
};

const getDefaultValueSelect = (props: AnswerProps[]) => {
  let defaultOption = props.filter((item) => item.Default === 'Y');
  if (defaultOption.length > 0) return defaultOption.map((item) => item.Key);
  return [];
};

export { getDefaultValueSelect, getDefaultValue };
