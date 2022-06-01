import { LuggageProps, QusetionsProps, StationProps } from '../_types';
interface AnswerProps {
    Name: string;
    Values: string[];
}
declare const handleSaveTransport: (station: {
    [key: string]: StationProps;
}, QUESTION_LIST: QusetionsProps, LUGGAGE: LuggageProps, LANGUAGE: {
    [key: string]: string;
}) => {
    error: boolean;
    ANSWERS: AnswerProps[];
    errorMsg: {
        name: string;
        error: string;
    }[];
};
export { handleSaveTransport };
