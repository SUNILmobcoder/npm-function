import { QuestionGroupProps, RenderStationProps } from '../_types';

// true => not to render
// false => render
const renderStations = (station: RenderStationProps) => {
  let { Hidden, ActivatedBy, Visible } = station;
  if (!Hidden && Visible === 'Y') return false;
  if (Hidden === 'Y' && !ActivatedBy) return true;
  return false;
};

// true => not to render
// false => render
const renderQuestionGroups = (questionGroup: QuestionGroupProps) => {
  let { Hidden, ActivatedBy, Visible } = questionGroup;
  if (!Hidden && Visible === 'Y') return false;
  if (Hidden === 'Y' && !ActivatedBy) return true;
  return false;
};

export { renderStations, renderQuestionGroups };
