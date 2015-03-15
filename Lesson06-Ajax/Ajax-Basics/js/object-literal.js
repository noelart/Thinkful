/* Convention for creating a class is to capitlaize the class */

var person = {
  name : 'Person name',
  addOrder : function(order) {
    console.log('Added order: ' + order);
  }
};

function Customer(name) {
  this.name = name;
}

Customer.prototype = Object.create(person);