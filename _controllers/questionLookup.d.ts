declare const questionLookup: (LANGUAGE_PACK: {
    [key: string]: string;
}, operator: string, ANSWERS: string[], value: string[]) => boolean;
export { questionLookup };
