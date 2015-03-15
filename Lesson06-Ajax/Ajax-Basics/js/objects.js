/* Objects */

/*Constructor*/
var Person = function(name, age, role) {
  this.firstName = name;
  this.age = age;
  this.role = role;
};

var candidate = new Person('Jon', 39, 'CEO');

console.log('Candidate: ' + candidate.firstName + '\n' + 'Age: ' + candidate.age + '\n' + 'Role: ' + candidate.role);


/* Object based literal */

var client = {
  firstName: 'Jon', lastName: 'Rogers',
  concatName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

var name = client.concatName();

console.log(name);

var Car = function(name, num, year) {
  this.brand = name;
  this.engine = num;
  this.year = year;
};

var ford = new Car("Ford", 1800, "1980" );
var tesla = new Car("Tesla", 150, "2014");

console.log('Brands: ' + ford.brand + '\t' + tesla.brand + '\n' + 'Capacity: ' + ford.engine + '\t' + tesla.engine);

