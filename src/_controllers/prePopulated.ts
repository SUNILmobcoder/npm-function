import { LuggageProps } from '../_types';

// function for getting the answer based on luggage key
const getPrePopulatedValue = (LUGGAGE_DATA: LuggageProps, key: string, source: string) => {
  let question = LUGGAGE_DATA?.Luggages[`${source}`]['questions'];
  let val = question[key] ? question[key] : null;

  return val ? (val['answers'] ? val['answers'] : ['DEFAULT']) : ['DEFAULT'];
};

export { getPrePopulatedValue };
