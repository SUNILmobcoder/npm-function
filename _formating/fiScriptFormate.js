"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formateStations = exports.filterStationsName = exports.questionMapToStation = void 0;
// function to map question to its station and questionGroup
var questionMapToStation = function (data) {
    var questions = {};
    data.Stations.forEach(function (station) {
        station.QuestionGroups.sort(function (a, b) { return a.Sort - b.Sort; }).forEach(function (item) {
            item.Questions.sort(function (a, b) { return a.Sort - b.Sort; }).forEach(function (i) {
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
var filterStationsName = function (data) {
    var stationName = [];
    data.Stations.forEach(function (station) {
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
var formateStations = function (data) {
    var stations = {};
    data.Stations.forEach(function (station) {
        station.QuestionGroups.sort(function (a, b) { return a.Sort - b.Sort; }).forEach(function (questionGroup) {
            questionGroup.Questions.sort(function (a, b) { return a.Sort - b.Sort; }).forEach(function (question) {
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
