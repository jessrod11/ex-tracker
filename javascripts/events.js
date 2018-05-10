const dom = require('./dom');
const inputField = document.getElementById('search-field');

const searchEvent = (locations) => {
  console.log('anything there?',locations);
  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const text = inputField.value;
      const smallCaseName = locations.name.toLowerCase();
      const results = smallCaseName.filter((thing) => {
        return thing.name.indexOf(text);
      });
      dom.writeLocations(results);
    };
  });
};

module.exports = searchEvent;
