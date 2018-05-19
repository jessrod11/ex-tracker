const writeEx = (ex) => {
  let exString = '';
  ex.forEach((ex) => {
    exString += `<div class="col-md-4 ex-container text-center panel panel-default">`;
    exString += `<div class="panel-heading">`;
    exString += `<h1class="panel-title"> Name: ${ex.name}</h1>`;
    exString += `</div>`;
    exString += `<div class="panel-body">`;
    exString += `<img class="img-rounded img-styles" src=${ex.imageUrl}>`;
    exString += `<h2> Age: ${ex.age}</h2>`;
    exString += `<h2>Flaws</h2>`;
    exString += `<li>${ex.flaws[0]}</l1>`;
    exString += `<li>${ex.flaws[1]}</l1>`;
    exString += `<li>${ex.flaws[2]}</l1>`;
    exString += `<li>${ex.flaws[3]}</l1>`;
    exString += `</div>`;
    exString += `</div>`;
  });
  $('#ex-container').append(exString);
};

const writeLocations = (locations) => {
  let locationString = '';
  locations.forEach((location) => {
    locationString += `<div class="col-sm-4 panel text-center panel-default location-dom ex-container ${location.timeOfDay}">`;
    locationString += `<div class="panel-heading">`;
    locationString += `<h1 class="text-center panel-title">${location.name}</h1>`;
    locationString += `</div>`;
    locationString += `<div class="panel-body">`;
    locationString += `<img class="img-styles" src=${location.imageUrl}>`;
    locationString += `<h2 class="text-center">${location.address}</h2>`;
    locationString += `<h3 class="time">${location.timeOfDay}</h3>`;
    locationString += `</div>`;
    locationString += `</div>`;
  });
  $('#location-container').append(locationString);
};

module.exports = {
  writeEx,
  writeLocations,
};
