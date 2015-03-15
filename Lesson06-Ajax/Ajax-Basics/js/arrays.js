/* Javascript basics - arrays*/

/*==================
    Initiate array
===================*/
var sports = [];
sports[0] = 'running';
sports[1] = 'cycling';
sports[2] = 'trekking';

console.log(sports);

/*=======================
      Array methods
=========================*/

//concat()
var flowers = ['Lilly', 'Rose', 'Tulip'];
var colors = ['red', 'blue', 'yellow'];
var colorFlowers = flowers.concat(colors);
console.log(colorFlowers);

//indexOf() lastIndexOf()
var transport = ['car', 'bus', 'train', 'airplane', 'taxi', 'ferry', 'train'];
console.log(
  transport.indexOf('train'),
  transport.lastIndexOf('train')
);

//pop() shift()
function lastItem(array) {
  return array.pop();
}

function firstitem(array) {
  return array.shift();
}
console.log(
  lastItem(['car', 'bus', 'train', 'airplane', 'taxi', 'ferry']),
  firstitem(['car', 'bus', 'train', 'airplane', 'taxi', 'ferry'])
);

//push() unshift()
function addFirstItem(array, item) {
  return array.unshift(item);
}

function addlastItem(array, item) {
  return array.push(item);
}

var adventureSports = ['paragliding', 'kayaking'];
addlastItem(adventureSports, 'snowboarding');
addFirstItem(adventureSports, 'buggykiting');

console.log(adventureSports);
