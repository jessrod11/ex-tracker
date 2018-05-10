// const dom = require('./dom');
const inputField = document.getElementById('search-field');

const searchEvent = (locations) => {
  console.log(locations);
  for (let i = 0; i < locations.length; i++) {
    console.log('locations', locations[i]);
  };
  inputField.addEventListener('keypress', (e) => {
    console.log('input field', e);
  });
};

module.exports = searchEvent;
