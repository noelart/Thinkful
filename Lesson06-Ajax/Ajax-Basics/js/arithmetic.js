/* Javascripts basics - arithmetic */

var sum = function(num1, num2) {
  return num1 + num2;
};

console.log('Addition: ' + sum(22, 33));

var subtract = function(num1, num2) {
  if(num1 >= num2) {
  return num1 - num2;
  } else if(num2 > num1) {
    return num2 - num1;
  }
};

console.log('Subtract: ' + subtract(33, 44));


var multiply = function(num1, num2) {
  return num1 * num2;
};

console.log('Multiply: ' + multiply(22, 10));

var divide = function(num1, num2) {
  return num1 / num2;
};

console.log('Division: ' + divide(44, 2));

var modulus = function(num1, num2) {
  return num1 % num2;
};

console.log('Modulus: ' + modulus(50, 4));

var Sum = function(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
};

Sum.prototype = {
  add : function(num1, num2) {
    return num1 + num2;
  },

  subtract : function(num1, num2) {
      var output = (num1 > num2) ? (num1 - num2) : (num2 - num1);
      return output;
  },

  multiply : function(num1, num2) {
    return num1 * num2;
  },

  divide : function(num1, num2) {
    var output = (num1 > num2) ? (num1 / num2) : (num2 / num1);
    return output;
  }
};

var sum = new Sum();
console.log(sum.add(11, 44));
console.log(sum.subtract(73, 33));
console.log(sum.multiply(10, 20));
console.log(sum.divide(20, 400));