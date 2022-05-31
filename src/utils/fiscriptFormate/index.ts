import { FiscriptProps, StationProps } from "../../_types";

export interface StationArrayProps {
  Type: string;
  Name: string;
  GroupName?: string;
  Hidden: string;
  Visible: string;
  ActivatedBy?: {
    Key: string;
    Type?: string;
    LuggageSource?: string; // optional
    Operator?: string;
    Values?: string[];
    ActivatedBy?: any;
  }[];
}

// function to map question to its station and questionGroup
const questionMapToStation = (data: FiscriptProps) => {
  let questions: {
    [key: string]: {
      StationName: string;
      QuestionGroup: string;
      UserResponse: any;
      error: string;
    };
  } = {};
  data.Stations.forEach((station) => {
    station.QuestionGroups.sort((a, b) => a.Sort - b.Sort).forEach((item) => {
      item.Questions.sort((a, b) => a.Sort - b.Sort).forEach((i) => {
        questions[i.Name] = {
          StationName: station.Name,
          QuestionGroup: item.Name,
          UserResponse: null,
          error: "",
        };
      });
    });
  });
  return questions;
};

// function that return array of station
const filterStationsName = (data: FiscriptProps) => {
  let stationName: StationArrayProps[] = [];
  data.Stations.forEach((station) => {
    stationName.push({
      Type: station.Type,
      Name: station.Name,
      GroupName: station.GroupName,
      Hidden: station.Hidden ? station.Hidden : "N",
      Visible: station.Visible,
      ActivatedBy: station.ActivatedBy,
    });
  });
  return stationName;
};

// sort question group and question and added a key in named userResponse
const formateStations = (data: FiscriptProps) => {
  let stations: { [key: string]: StationProps } = {};
  data.Stations.forEach((station) => {
    station.QuestionGroups.sort((a, b) => a.Sort - b.Sort).forEach(
      (questionGroup) => {
        questionGroup.Questions.sort((a, b) => a.Sort - b.Sort).forEach(
          (question) => {
            question["userResponse"] = null;
            question["StationName"] = station.Name;
            question["QuestionGroupName"] = questionGroup.Name;
          }
        );
      }
    );
    stations[station.Name] = station;
  });
  return stations;
};

export { questionMapToStation, filterStationsName, formateStations };
