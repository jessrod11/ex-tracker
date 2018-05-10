const writeEx = (ex) => {
  let exString = '';
  ex.forEach((ex) => {
    exString += `<div class="col-md-6 col-md-offset-3 text-center ex-container panel panel-default">`;
    exString += `<div class="panel-heading">`;
    exString += `<h1class="panel-title"> Name: ${ex.name}</h1>`;
    exString += `</div>`;
    exString += `<div class="panel-body">`;
    exString += `<img class="img-rounded" src=${ex.imageUrl}>`;
    exString += `<h2> Age: ${ex.age}</h2>`;
    exString += `<h2>Flaws</h2>`;
    exString += `<li>${ex.flaws[0]}</l1>`;
    exString += `<li>${ex.flaws[1]}</l1>`;
    exString += `<li>${ex.flaws[1]}</l1>`;
    exString += `<li>${ex.flaws[3]}</l1>`;
    exString += `</div>`;
    exString += `</div>`;
  });
  return exString;
};

const writeLocations = (locations) => {
  let locationString = '';
  locations.forEach((location) => {
    locationString += `<div class="col-sm-4 panel panel-default ex-container">`;
    locationString += `<div class="panel-heading">`;
    locationString += `<h1 class="text-center panel-title">${location.name}</h1>`;
    locationString += `</div>`;
    locationString += `<div class="panel-body">`;
    locationString += `<img class="locationImg" src=${location.imageUrl}>`;
    locationString += `<h2 class="text-center">${location.address}</h2>`;
    locationString += `<div class="panel-footer">`;
    locationString += `<h3>${location.timeOfDay}</h3>`;
    locationString += `</div>`;
    locationString += `</div>`;
    locationString += `</div>`;
  });
  return locationString;
};

module.exports = {
  writeEx,
  writeLocations,
};
