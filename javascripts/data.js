const dom = require('./dom');

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

const initializer = () => {
  getExJson().then((result) => {
    dom.writeEx(result);
  });
  getLocationsJson().then((result2) => {
    dom.writeLocations(result2);
  });
};

module.exports = {
  initializer,
};
