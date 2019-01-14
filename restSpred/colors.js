'user strict';

const defaultColors       = ['red', 'green'];
const userFavouriteColors = ['orange', 'yellow'];
const allColors           = ['blue', ...defaultColors, ...userFavouriteColors];

console.log(allColors);
// console.log(defaultColors.concat(userFavouriteColors));
