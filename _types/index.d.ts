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
interface QuestionProps {
    Name: string;
    Transport?: string;
    Sort: number;
    Type: string;
    Required?: string;
    Hidden?: string;
    Visible?: string;
    Validation?: {
        comparison?: any;
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
    QuestionGroupName?: string;
    StationName?: string;
    userResponse?: any;
    Dynamic?: {
        Methode: string;
        Parameters?: {
            Name: string;
            Value: string;
            Type: string;
        }[];
    };
    ActivatedBy?: {
        Key: string;
        Type?: string;
        Operator?: string;
        Values?: string[];
        LuggageSource?: string;
        ActivatedBy?: any;
    }[];
    Answers?: {
        Key: string;
        Sort: number;
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
}
interface ActivatedByProps {
    Key: string;
    Type?: string;
    LuggageSource?: string;
    Operator?: string;
    Values?: string[];
    result?: boolean;
    ActivatedBy?: any;
}
interface AnswerProps {
    Key: string;
    Sort: number;
    Media?: any;
    Default?: string;
    Visible?: string;
    ActivatedBy?: any;
}
interface QuestionGroupProps {
    Type: string;
    Name: string;
    DisplayQuestionGroupName?: string;
    Sort?: number;
    Hidden?: string;
    Required?: string;
    Visible: string;
    ActivatedBy?: {
        Key: string;
        Type?: string;
        LuggageSource?: string;
        Operator?: string;
        Values?: string[];
        ActivatedBy?: any;
    }[];
    Questions: {
        Name: string;
        Transport?: string;
        Sort: number;
        Type: string;
        Required?: string;
        Hidden?: string;
        Visible?: string;
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
        QuestionGroupName?: string;
        StationName?: string;
        userResponse?: any;
        Dynamic?: {
            Methode: string;
            Parameters?: {
                Name: string;
                Value: string;
                Type: string;
            }[];
        };
        ActivatedBy?: {
            Key: string;
            Type?: string;
            Operator?: string;
            Values?: string[];
            LuggageSource?: string;
            ActivatedBy?: any;
        }[];
        Answers?: {
            Key: string;
            Sort: number;
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
}
interface LanguageProps {
    language: string;
    generatedDate: string;
    keyValues: {
        [key: string]: string;
    };
}
interface LuggageProps {
    scriptHash: string;
    Luggages: {
        [key: string]: {
            [key: string]: {
                [key: string]: {
                    key: string;
                    answers?: string[];
                };
            };
        };
    };
}
export type { FiscriptProps, StationProps, StationArrayProps, QusetionsProps, QuestionProps, ActivatedByProps, AnswerProps, QuestionGroupProps, LanguageProps, LuggageProps, };
