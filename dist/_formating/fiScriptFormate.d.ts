import { ScriptProps, QusetionsProps, StationArrayProps, StationProps } from '../_types';
declare const questionMapToStation: (data: ScriptProps) => QusetionsProps;
declare const filterStationsName: (data: ScriptProps) => StationArrayProps[];
declare const formateStations: (data: ScriptProps) => {
    [key: string]: StationProps;
};
export { questionMapToStation, filterStationsName, formateStations };
