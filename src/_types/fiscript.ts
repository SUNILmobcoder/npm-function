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
      LuggageSource?: string; // optional
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
      Required?: string; // optional
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
        LuggageSource?: string; // optional
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
        [key: string]: any; // adding userResponse
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
          LuggageSource?: string; // optional
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
            LuggageSource?: string; // optional
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
    LuggageSource?: string; //optional
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
    Required?: string; // optional
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
      LuggageSource?: string; // optional
      Operator?: string;
      Values?: string[];
      ActivatedBy?: any;
    }[];

    Questions: {
      Name: string;
      Sort: number;
      ReadOnly?: string; // optional
      Required?: string; // optional
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
        LuggageSource?: string; // optional
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
          LuggageSource?: string; // optional
          Operator?: string;
          Values?: string[];
          ActivatedBy?: any;
        }[];
      }[];
    }[];
  }[];
}

interface QuestionGroupProps {
  Type: string;
  Name: string;
  DisplayQuestionGroupName?: string;
  Sort?: number;
  Hidden?: string;
  Required?: string; // optional
  Visible: string;
  ActivatedBy?: {
    Key: string;
    Type?: string;
    LuggageSource?: string; // optional
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
    QuestionGroupName?: string; // added for handling the userREsponse
    StationName?: string; // added for handling the userREsponse
    userResponse?: any; // added for handling the userREsponse
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
        LuggageSource?: string; // optional
        Operator?: string;
        Values?: string[];
        ActivatedBy?: any;
      }[];
    }[];
  }[];
}

export type { FiscriptProps, StationProps, QuestionGroupProps };
