const dom = require('./dom');
const inputField = document.getElementById('search-field');
const buttonGroup = document.getElementsByClassName('button-container');

const morning = document.getElementsByClassName('morning');
const afternoon = document.getElementsByClassName('afternoon');
const evening = document.getElementsByClassName('evening');
const dark = document.getElementsByClassName('dark');

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

const showMorning = () => {
  for (let i = 0; i < morning.length; i++) {
    morning[i].classList.remove('hide');
  };
  for (let i = 0; i < afternoon.length; i++) {
    afternoon[i].classList.add('hide');
  };
  for (let i = 0; i < evening.length; i++) {
    evening[i].classList.add('hide');
  };
  for (let i = 0; i < dark.length; i++) {
    dark[i].classList.add('hide');
  };
};

const showAfternoon = () => {
  for (let i = 0; i < afternoon.length; i++) {
    afternoon[i].classList.remove('hide');
  };
  for (let i = 0; i < morning.length; i++) {
    morning[i].classList.add('hide');
  };
  for (let i = 0; i < evening.length; i++) {
    evening[i].classList.add('hide');
  };
  for (let i = 0; i < dark.length; i++) {
    dark[i].classList.add('hide');
  };
};

const showEvening = () => {
  for (let i = 0; i < evening.length; i++) {
    evening[i].classList.remove('hide');
  };
  for (let i = 0; i < morning.length; i++) {
    morning[i].classList.add('hide');
  };
  for (let i = 0; i < afternoon.length; i++) {
    afternoon[i].classList.add('hide');
  };
  for (let i = 0; i < dark.length; i++) {
    dark[i].classList.add('hide');
  };
};

const showDark = () => {
  for (let i = 0; i < dark.length; i++) {
    dark[i].classList.remove('hide');
  };
  for (let i = 0; i < afternoon.length; i++) {
    afternoon[i].classList.add('hide');
  };
  for (let i = 0; i < morning.length; i++) {
    morning[i].classList.add('hide');
  };
  for (let i = 0; i < evening.length; i++) {
    evening[i].classList.add('hide');
  };
};

const buttonEvents = () => {
  for (let i = 0; i < buttonGroup.length; i++) {
    buttonGroup[i].addEventListener('click', (e) => {
      const buttonTarget = e.target.innerHTML.toLowerCase();
      if (buttonTarget === 'morning') {
        showMorning();
      } else if (buttonTarget === 'afternoon') {
        showAfternoon();
      } else if (buttonTarget === 'evening') {
        showEvening();
      } else if (buttonTarget === 'dark') {
        showDark();
      }
    });
  };
};

module.exports = {
  searchEvent,
  buttonEvents,
};
