/* Funcitons javascript */

/* Named function */
function sum(num1, num2) {
  return num1 + num2;
};

console.log(sum(24, 26));


/*Anonymous function */
var total = function(num1, num2) {
  return num1 + num2;
};

console.log(total(24, 26));

/*================================
      FizzBuzz functions
==================================*/

function fizzbuzzLong(max) {
  var string = "";
  var array = [];
  for (var i = 1; i <= max; i++) {
   if ((i % 5 === 0) && (i % 3 === 0)) {
    string += 'FizzBuzz' + ', ';
   } else if (i % 3 === 0) {
    string += 'Fizz' + ', ';
   } else if (i % 5 === 0) {
    string += 'Buzz' + ', ';
   } else {
      string += i + ', ';
   }
  }
  return string;
}

console.log(fizzbuzzLong(30));


/*===============================
    Clousre returning a value
=================================*/

function fizzbuzzer(max) {
  var array = [];

  function check(num) {
    var string = '';
    if (num % 3 === 0) { string +='Fizz'; }
    if (num % 5 === 0) { string +='Buzz'; }
    return string || num;
  }

  for (var i = 1; i <= max; i++) {
    array.push(check(i));
  }
  return array;
}

console.log(fizzbuzzer(30));

/*===============================
    Clousre returning a function
=================================*/

function adder(x) {
  return function(y) {
    return x + y;
  }
}

var add3 = adder(3);
var add5 = adder(5);

console.log(add3(5));
console.log(add5(5));