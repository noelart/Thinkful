/* Javascript basics */

var story = '"This is what I meant by success" said the developer on completing the app right on his work\'s deadline';
console.log(story);

var string = "This is a number concatenated ot a string" + 22;
console.log(typeof string);

var message = 'Hello';
message += ', Pierre';
console.log(message);

/*=========================
    special characters
===========================*/

var specialChars = function(){
  var template  =  'String special characters: '
                +   '\n'
                +   'New line'
                +   '\r'
                +   'Carriage return'
                +   '\n'
                +    'Tabbed content'
                +    '\t\t'
                +     'to right'
                +     '\n'
                +     'Embedded \'quote\' in a string'
                +     '\n'
                +     '\u20AC'
                +     20;
  return template;
};
console.log('==================' + '\n'+ specialChars());

/*==========================
   parseInt() & parseFloat()
============================*/
var intFromString = parseInt('45k');
console.log('==================' + '\n'+ typeof intFromString);

//Converting a string to a number
var addParser = function(num1, num2) {
    return (parseInt(num1) + parseInt(num2));
};

var addFloat = function(float1, float2) {
    return(parseFloat(float1) + parseFloat(float2));
};

console.log(addParser('22px', '33px'));
console.log(addFloat('1.3', '1.45'));

/*============================
         Substrings
==============================*/

var message = 'Hello World!';
var firstString = message.substring(0, 5);
var secondString = message.substring(6, 11);
var worldMark = message.substring(6);

console.log('=====================' + '\n' + firstString + '\n' + secondString  + '\n' + worldMark);

/*===========================
    indexOf and lastIndexOf
============================*/

var searchTerm = 'San Francisco';
var address = 'Hotel San Francisco, 123 Market Street, San Francisco, CA';
var cityIndex = address.indexOf(searchTerm);
var cityChar = address.charAt(44);
var cityLastIndex = address.lastIndexOf(searchTerm);

console.log('=====================' + '\n' + cityIndex + '\n' + cityChar + '\n' + cityLastIndex);

// Finding substring between 2 strings
var stringBetweenMatches = function(searchString, string) {
    var startString = string.indexOf(searchString) + searchString.length;
    var lastString = string.lastIndexOf(searchString);
    var stringMatch = string.substring(startString, lastString);
    console.log('=====================' + '\n' + startString + '\n' + lastString + '\n' + stringMatch);
    return stringMatch;
};


var lyricsMessage = 'Imagine all the people Living for today... Imagine there\'s no countries';
var searchString = 'Imagine';
var finalString = stringBetweenMatches(searchString, lyricsMessage);