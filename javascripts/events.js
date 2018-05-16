// const dom = require('./dom');

// const inputField = document.getElementById('search-field');
const buttonGroup = document.getElementsByClassName('button-container');

const morning = document.getElementsByClassName('morning');
const afternoon = document.getElementsByClassName('afternoon');
const evening = document.getElementsByClassName('evening');
const dark = document.getElementsByClassName('dark');

// const searchEvent = (locations) => {
//   console.log('locations', locations);
//   locations.forEach((location) => {
//     const locationName = location.name;
//     // const locationAddy = location.address;
//     inputField.addEventListener('keypress', (e) => {
//       console.log('input field', e);
//       if (e.key === 'Enter') {
//         const userInput = inputField.value.toLowerCase();
//         const results = locationName.filter((location) => {
//           return location.indexOf(userInput) > -1;
//         });
//         dom.writeLocations(results);
//       };
//     });
//   });
// };

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

const clearAll = () => {
  for (let i = 0; i < dark.length; i++) {
    dark[i].classList.add('hide');
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
      console.log('button', e);
      const buttonTarget = e.target.innerHTML.toLowerCase();
      if (buttonTarget === 'morning') {
        showMorning();
      } else if (buttonTarget === 'afternoon') {
        showAfternoon();
      } else if (buttonTarget === 'evening') {
        showEvening();
      } else if (buttonTarget === 'dark') {
        showDark();
      } else {
        clearAll();
      }
    });
  };
};

module.exports = {
  buttonEvents,
};
