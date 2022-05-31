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

export type { LuggageProps };
