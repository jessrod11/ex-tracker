const loadEx = (successFunction, errorFunction) => {
  $.get('../db/ex.json')
    .done(successFunction)
    .fail(errorFunction);
};

const loadLocations = (successFunction, errorFunction) => {
  $.get('../db/locations.json')
    .done(successFunction)
    .fail(errorFunction);
};

module.exports = {
  loadEx,
  loadLocations,
};
