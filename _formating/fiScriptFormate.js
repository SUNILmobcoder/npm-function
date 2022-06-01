"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formateStations = exports.filterStationsName = exports.questionMapToStation = void 0;
// function to map question to its station and questionGroup
const questionMapToStation = (data) => {
    let questions = {};
    data.Stations.forEach((station) => {
        station.QuestionGroups.sort((a, b) => a.Sort - b.Sort).forEach((item) => {
            item.Questions.sort((a, b) => a.Sort - b.Sort).forEach((i) => {
                questions[i.Name] = {
                    StationName: station.Name,
                    QuestionGroup: item.Name,
                    UserResponse: null,
                    error: '',
                };
            });
        });
    });
    return questions;
};
exports.questionMapToStation = questionMapToStation;
// function that return array of station
const filterStationsName = (data) => {
    let stationName = [];
    data.Stations.forEach((station) => {
        stationName.push({
            Type: station.Type,
            Name: station.Name,
            GroupName: station.GroupName,
            Hidden: station.Hidden ? station.Hidden : 'N',
            Visible: station.Visible,
            ActivatedBy: station.ActivatedBy,
        });
    });
    return stationName;
};
exports.filterStationsName = filterStationsName;
// sort question group and question and added a key in named userResponse
const formateStations = (data) => {
    let stations = {};
    data.Stations.forEach((station) => {
        station.QuestionGroups.sort((a, b) => a.Sort - b.Sort).forEach((questionGroup) => {
            questionGroup.Questions.sort((a, b) => a.Sort - b.Sort).forEach((question) => {
                question['userResponse'] = null;
                question['StationName'] = station.Name;
                question['QuestionGroupName'] = questionGroup.Name;
            });
        });
        stations[station.Name] = station;
    });
    return stations;
};
exports.formateStations = formateStations;
