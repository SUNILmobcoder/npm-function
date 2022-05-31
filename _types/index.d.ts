interface FiscriptProps {
    Name: string;
    Stations: {
        Type: string;
        Name: string;
        GroupName?: string;
        Hidden?: string;
        Visible: string;
        ActivatedBy?: {
            Key: string;
            Type?: string;
            LuggageSource?: string;
            Operator?: string;
            Values?: string[];
            ActivatedBy?: any;
        }[];
        QuestionGroups: {
            Type: string;
            Name: string;
            DisplayQuestionGroupName?: string;
            Sort: number;
            Hidden?: string;
            Required?: string;
            Visible: string;
            ActivatedBy?: {
                comparison?: {
                    message: string;
                    messageClassification: string;
                    messageDisplayType: string;
                    Key: string;
                    Type: string;
                    LuggageSource: string;
                    Operator: string;
                };
                Key: string;
                Type?: string;
                LuggageSource?: string;
                Operator?: string;
                Values?: string[];
                ActivatedBy?: any;
            }[];
            Questions: {
                Name: string;
                Sort: number;
                ReadOnly?: string;
                Required?: string;
                Hidden?: string;
                Visible: string;
                Type: string;
                Validation?: {
                    comparison?: {
                        message: string;
                        messageClassification: string;
                        messageDisplayType: string;
                        Key: string;
                        Type: string;
                        LuggageSource: string;
                        Operator: string;
                    };
                    min?: {
                        value: string;
                        error: string;
                    };
                    max?: {
                        value: string;
                        error: string;
                    };
                    pattern?: {
                        value: string;
                        error: string;
                    };
                };
                PrePopulate?: {
                    PrePopulatedBy: {
                        Key: string;
                        Type: string;
                        LuggageSource?: string;
                    };
                };
                [key: string]: any;
                ActivatedBy?: {
                    comparison?: {
                        message: string;
                        messageClassification: string;
                        messageDisplayType: string;
                        Key: string;
                        Type: string;
                        LuggageSource: string;
                        Operator: string;
                    };
                    Key: string;
                    Type?: string;
                    LuggageSource?: string;
                    Operator?: string;
                    Values?: string[];
                    ActivatedBy?: any;
                }[];
                Answers?: {
                    Key: string;
                    Sort: number;
                    Visible?: string;
                    Terminal?: string;
                    Media?: {
                        Photos?: {
                            Label: string;
                            Min?: number;
                            Max?: number;
                            Visible?: string;
                            ActivatedBy?: {
                                Key: string;
                                Type: string;
                                LuggageSource?: string;
                                Operator: string;
                                Values: string[];
                                ActivatedBy?: any;
                            }[];
                        }[];
                    };
                    ActivatedBy?: {
                        comparison?: {
                            message: string;
                            messageClassification: string;
                            messageDisplayType: string;
                            Key: string;
                            Type: string;
                            LuggageSource: string;
                            Operator: string;
                        };
                        Key: string;
                        Type?: string;
                        LuggageSource?: string;
                        Operator?: string;
                        Values?: string[];
                        ActivatedBy?: any;
                    }[];
                }[];
            }[];
        }[];
    }[];
}
interface StationProps {
    Type: string;
    Name: string;
    GroupName?: string;
    Hidden?: string;
    Visible: string;
    ActivatedBy?: {
        comparison?: {
            message: string;
            messageClassification: string;
            messageDisplayType: string;
            Key: string;
            Type: string;
            LuggageSource: string;
            Operator: string;
        };
        Key: string;
        Type?: string;
        LuggageSource?: string;
        Operator?: string;
        Values?: string[];
        ActivatedBy?: any;
    }[];
    QuestionGroups: {
        Type: string;
        Name: string;
        DisplayQuestionGroupName?: string;
        Sort: number;
        Hidden?: string;
        Required?: string;
        Visible: string;
        ActivatedBy?: {
            comparison?: {
                message: string;
                messageClassification: string;
                messageDisplayType: string;
                Key: string;
                Type: string;
                LuggageSource: string;
                Operator: string;
            };
            Key: string;
            Type?: string;
            LuggageSource?: string;
            Operator?: string;
            Values?: string[];
            ActivatedBy?: any;
        }[];
        Questions: {
            Name: string;
            Sort: number;
            ReadOnly?: string;
            Required?: string;
            Hidden?: string;
            Visible: string;
            Type: string;
            Validation?: {
                comparison?: {
                    message: string;
                    messageClassification: string;
                    messageDisplayType: string;
                    Key: string;
                    Type: string;
                    LuggageSource: string;
                    Operator: string;
                };
                min?: {
                    value: string;
                    error: string;
                };
                max?: {
                    value: string;
                    error: string;
                };
                pattern?: {
                    value: string;
                    error: string;
                };
            };
            PrePopulate?: {
                PrePopulatedBy: {
                    Key: string;
                    Type: string;
                    LuggageSource?: string;
                };
            };
            [key: string]: any;
            ActivatedBy?: {
                Key: string;
                Type?: string;
                LuggageSource?: string;
                Operator?: string;
                Values?: string[];
                ActivatedBy?: any;
            }[];
            Answers?: {
                Key: string;
                Sort: number;
                Visible?: string;
                Terminal?: string;
                Media?: {
                    Photos?: {
                        Label: string;
                        Min?: number;
                        Max?: number;
                        Visible?: string;
                        ActivatedBy?: {
                            Key: string;
                            Type: string;
                            LuggageSource?: string;
                            Operator: string;
                            Values: string[];
                            ActivatedBy?: any;
                        }[];
                    }[];
                };
                ActivatedBy?: {
                    Key: string;
                    Type?: string;
                    LuggageSource?: string;
                    Operator?: string;
                    Values?: string[];
                    ActivatedBy?: any;
                }[];
            }[];
        }[];
    }[];
}
interface StationArrayProps {
    Type: string;
    Name: string;
    GroupName?: string;
    Hidden: string;
    Visible: string;
    ActivatedBy?: {
        Key: string;
        Type?: string;
        LuggageSource?: string;
        Operator?: string;
        Values?: string[];
        ActivatedBy?: any;
    }[];
}
interface QusetionsProps {
    [key: string]: {
        StationName: string;
        QuestionGroup: string;
        UserResponse: any;
        error: string;
    };
}
