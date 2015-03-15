/* Protoypes javascript */

var baseObject = {
  num: 2,
  sum: function() {
    return this.num + 1;
  }
};

console.log( baseObject.num + '\n' + baseObject.sum());

/* creating a prototype that inherits from baseObject */

var inheritObject = Object.create(baseObject);
console.log( inheritObject.num + '\n' +
            inheritObject.sum());

inheritObject.num = 4;
console.log(inheritObject.sum()); //5