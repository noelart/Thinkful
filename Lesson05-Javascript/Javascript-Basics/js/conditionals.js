/* Conditionals */

/*=====================
      Price match
======================*/

var canIGet = function(money, item) {
  var items = ["MacBook Air", "MacBook Pro", "Mac Pro", "Mac mini"];
  var purchase = null;

  if ((item == items[0]) && (money >= 1200)) {
    purchase = true;
    } else if ((item == items[1]) && (money >= 1299)) {
      purchase = true;
    } else if ((item == items[2]) && (money >= 2499)) {
      purchase = true;
    } else if ((item == items[3]) && (money >= 500)) {
      purchase = true;
    } else {
      purchase = false;
    }
  return purchase;
};

console.log(canIGet(2000, 'MacBook Pro'));


/*======================
      Fizz buzz
=======================*/
function fizzBuzz() {
  var fizz = 'Fizz';
  var buzz = 'Buzz';
  var array = [];
  var string = null;

// Loop
  for (var i = 0; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      string = fizz + buzz;
      array.push(string);
    } else if (i % 3 === 0) {
      string = fizz;
      array.push(string);
    } else if (i % 5 === 0) {
      string = buzz;
      array.push(string);
    } else {
      array.push(i);
    }
  }
  return array;
}

console.log(fizzBuzz());

/*==============================
        Geography quiz
================================*/
var countries = ['England', 'France', 'Germany', 'Italy', 'Spain', 'Denmark'];
var whichCity = function(country) {
  var city = null;
  if (country == 'England') {
    city = 'London';
  } else if (country == 'France') {
    city = 'Paris';
  } else if (country == 'Germany') {
    city = 'Berlin';
  } else if (country == 'Italy') {
    city = 'Rome';
  } else if (country == 'Spain'){
    city = 'Madrid';
  } else {
    city = "City not listed";
  }
  return city;
};

var listOfCities = function(array) {
  var output =[];
  for(var i = 0; i < array.length; i++) {
    var city = whichCity(array[i]);
    output.push(array[i] + ': ' + city);
  }
  return output;
};

console.log(listOfCities(countries));
