const loadExInfo = require('./exInfo');
const writeToDom = require('./dom');
// const events = require('./events');

const whenExLoads = (data) => {
  $('#ex-container').append(writeToDom.writeEx(data.ex));
};

const whenExLocationsLoad = (data) => {
  $('#location-container').append(writeToDom.writeLocations(data.locations));
  // events.searchEvent(data.locations);
};

const ifCodeFails = (error) => {
  console.log('OH CRAP!', error);
};

const initializer = () => {
  loadExInfo.loadEx(whenExLoads, ifCodeFails);
  loadExInfo.loadLocations(whenExLocationsLoad, ifCodeFails);
};

module.exports = initializer;
