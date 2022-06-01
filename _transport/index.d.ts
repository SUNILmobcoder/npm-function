import { LuggageProps, QusetionsProps, StationProps } from '../_types';
interface AnswerProps {
    Name: string;
    Values: string[];
}
declare const handleSaveTransport: (station: {
    [key: string]: StationProps;
}, Question: QusetionsProps, Luggage: LuggageProps, Language: {
    [key: string]: string;
}) => {
    error: boolean;
    ANSWERS: AnswerProps[];
    errorMsg: {
        QuestionName: string;
        error: string;
    }[];
};
export { handleSaveTransport };
