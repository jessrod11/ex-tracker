// const loadExInfo = require('./exInfo');
const dom = require('./dom');
// const events = require('./events');

// Promise Constructor

const getExJson = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/ex.json')
      .done((data) => {
        resolve(data.ex);
      })
      .fail((err) => {
        reject('Uh-oh, Stix', err);
      });
  });
};

const getLocationsJson = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/locations.json')
      .done((data) => {
        resolve(data.locations);
      })
      .fail((err) => {
        reject('Uh-oh, Stix', err);
      });
  });
};

// const grabBoth = () => {
//   let info = [];
//   return getExJson()
//     .then((results) => {
//       info = [...results,];
//       return getLocationsJson();
//     }).then((results2) => {
//       info = [...info, ...results2,];
//       return Promise.resolve(info);
//     }).catch((errorMsg) => {
//       console.log(errorMsg);
//     });
// };

const initializer = () => {
  getExJson().then((result) => {
    dom.writeEx(result);
  });
  getLocationsJson().then((result2) => {
    dom.writeLocations(result2);
  });
};

module.exports = initializer;
