/* Javascript basics */

/*=====================
        Numbers
=======================*/

var sum  = function() {
  return 12 / 'hello';
};

console.log(sum()); // returns Nan

var num = 22;
console.log(typeof num);

var name = "Pierre";
console.log(typeof name);

var showValue = true;
console.log(typeof showValue);

var sayHello = function(name) {
  return 'Hello ' + name;
};

console.log(sayHello('Scott'));

var person = {
  firstName : 'Scott',
  secondName : 'Pierre',
  age : 22
};

console.log('First name :' + person.firstName + '\n' + 'Second name: ' + person.secondName + '\n' + 'age : ' + person.age);

var valueNotAssigned = null;
console.log(typeof valueNotAssigned);

var valueNotDefined;
console.log(typeof valueNotDefined);