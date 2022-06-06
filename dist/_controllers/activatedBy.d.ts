import { ActivatedByProps, LuggageProps, QusetionsProps, StationProps } from '../_types';
declare const activatedBy: (props: ActivatedByProps[], QUESTION_LIST: QusetionsProps, LUGGAGE: LuggageProps, LANGUAGE: {
    [key: string]: string;
}, STATIONS: {
    [key: string]: StationProps;
}) => boolean;
export { activatedBy };
