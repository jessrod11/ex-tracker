const dom = require('./dom');
const inputField = document.getElementById('search-field');
const buttonGroup = document.getElementsByClassName('button-container');

const searchEvent = (locations) => {
  console.log(locations);
  inputField.addEventListener('keypress', (e) => {

    if (e.key === 'Enter') {
      const userInput = inputField.value.toLowerCase();
      const results = locations.filter((location) => {
        return location.name.indexOf(userInput) > -1;
      });
      dom.writeLocations(results);
    };
  });
};

const buttonEvents = () => {
  for (let i = 0; i < buttonGroup.length; i++) {
    buttonGroup[i].addEventListener('click', (e) => {
      const buttonTarget = e.target.innerHTML.toLowerCase();
      if (buttonTarget === 'morning') {

      }
    });
  };
};

module.exports = {
  searchEvent,
  buttonEvents,
};
