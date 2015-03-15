/* Javascript variables */

var now = new Date();
var month = now.getMonth();

console.log(now + '\n' + month);


var temperature = 17;
console.log(temperature);

temperature = 15;
console.log(temperature);

temperature -= 5;
console.log(temperature);

function tempertureRegulator() {
  var array = [];
  if (temperature <= 10) {
    for(var i = 0; i < 10; i++) {
      temperature ++;
      array.push(temperature);
    }
    return array;
  }
}

console.log(tempertureRegulator());