declare const questionMapToStation: (data: FiscriptProps) => QusetionsProps;
declare const filterStationsName: (data: FiscriptProps) => StationArrayProps[];
declare const formateStations: (data: FiscriptProps) => {
    [key: string]: StationProps;
};
export { questionMapToStation, filterStationsName, formateStations };
