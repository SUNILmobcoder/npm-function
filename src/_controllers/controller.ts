import { QuestionGroupProps, RenderStationProps } from '../_types';

// true => not to render
// false => render
const renderStations = (station: RenderStationProps) => {
  let { Hidden, ActivatedBy } = station;

  if (Hidden === 'Y' && !ActivatedBy) return true;
  return false;
};

// true => not to render
// false => render
const renderQuestionGroups = (questionGroup: QuestionGroupProps) => {
  let { Hidden, ActivatedBy } = questionGroup;

  if (Hidden === 'Y' && !ActivatedBy) return true;
  return false;
};

export { renderStations, renderQuestionGroups };
