import activatedBy from "../../config/activatedBy";

// function for checking that It should include in Answer or not
const validateData = (
  questions,
  stationData,
  keyValues,
  visible?: string,
  hidden?: string,
  activated?: any
) => {
  if (activated && activatedBy(activated, questions, stationData, keyValues))
    return true;
  if (visible === "N") return false;
  if (!activated) return true;
  return false;
};

const getActiveStations = (stationData) => {
  const Station = stationData;
  // const Station = store.getState().fiscript.stationData;
  let stations: string[] = [];
  Object.entries(Station).forEach((item) => {
    let { Visible, Hidden, ActivatedBy } = item[1];
    if (validateData(Visible, Hidden, ActivatedBy)) {
      stations.push(item[1].Name);
    }
  });
  return stations;
};

export default getActiveStations;
