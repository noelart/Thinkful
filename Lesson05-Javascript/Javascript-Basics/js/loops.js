/* Loops */

/*==================
      for loops
====================*/
var uwSum = function() {
  var sum = 0;
  var array = [];
  for (var i = 1; i < 11; i++) {
    sum = sum + i;
    array.push(i + ' ' + sum + '\n');
  }
  return array.join("");
};

console.log(uwSum());


/* ==================
      while loops
=====================*/

var startCountdown = function(num){
  var countdownArray = [num];
  var countdown = num;

  while (countdown > 0) {
    countdown--;
    countdownArray.push(countdown);
  }
  return countdownArray;
};

console.log(startCountdown(20));


/*===================
      for in loops
=====================*/
var person = {
  firstName : 'Scott',
  secondName : 'Zahra',
  age : 7,
  education : 'primary',
  birthday : 15,
  month : 12
};

for (var key in person) {
  console.log(key + ' = ' + person[key]);
}