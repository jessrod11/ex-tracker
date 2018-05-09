const loadExInfo = require('./exInfo');

const whenExLoads = (data) => {
  console.log("Ex's Data", data.ex);
};

const whenExLocationsLoad = (data) => {
  console.log('Location Data', data.locations);
};

const ifCodeFails = (error) => {
  console.log('OH CRAP!', error);
};

const initializer = () => {
  loadExInfo.loadEx(whenExLoads, ifCodeFails);
  loadExInfo.loadLocations(whenExLocationsLoad, ifCodeFails);
};

module.exports = initializer;
