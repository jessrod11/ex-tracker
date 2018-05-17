// const writeToDom = require('./dom');

/* ALL PUP DATA FUNCTIONS */

/* How we would have gotten all the data with JQuery AJAX △ */
// const getAllPups = () => {
//   let pups = [];
//   $.get('../db/pup1.json')
//     .done((data1) => {
//       pups = [...data1.pup1,];
//       $.get('../db/pup2.json')
//         .done((data2) => {
//           pups = [...pups, ...data2.pup2,];
//           $.get('../db/pup3.json')
//             .done((data3) => {
//               pups = [...pups, ...data3.pup3,];
//               dom.domString(pups);
//             })
//             .fail((error3) => {
//               console.error(error3);
//             });
//         })
//         .fail((error2) => {
//           console.error(error2);
//         });
//     })
//     .fail((error1) => {
//       console.error(error1);
//     });
// };

// const loadEx = (successFunction, errorFunction) => {
//   $.get('../db/ex.json')
//     .done(successFunction)
//     .fail(errorFunction);
// };

// const loadLocations = (successFunction, errorFunction) => {
//   $.get('../db/locations.json')
//     .done(successFunction)
//     .fail(errorFunction);
// };

// Promise Constructor

// const getExJson = () => {
//   return new Promise ((resolve, reject) => {
//     $.get('../db/ex.json')
//       .done((data) => {
//         resolve(data.ex);
//       })
//       .fail((err) => {
//         reject('Uh-oh, Stix', err);
//       });
//   });
// };

// const getLocationsJson = () => {
//   return new Promise ((resolve, reject) => {
//     $.get('../db/locations.json')
//       .done((data) => {
//         resolve(data.locations);
//       })
//       .fail((err) => {
//         reject('Uh-oh, Stix', err);
//       });
//   });
// };

// const grabBoth = () => {
//   return getExJson
//     .then((results) => {
//       dom.writeEx(results);
//       return getLocationsJson
//     })
// }

// module.exports = {

// };
