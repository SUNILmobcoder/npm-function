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
}

export type { QuestionProps };
