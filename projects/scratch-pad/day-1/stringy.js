// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

//I: parameter called string
//0: return the length of string

function length(string) {
    // YOUR CODE BELOW HERE //
    
    //return the length of string
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
//I: parameter called string
//O: return new string that forces all letters to lowercase.

function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    
    //return new string that forces all letters to lowercase.
    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

//I: parameter called string
//O: return new string that forces all letters to uppercase
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    //return string that forces all letters to uppercase
    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

//I: one param, string
//O: return new string that replaces spaces with dashes and has all letters forced to lower case
//funct toDashCase with one param, string
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //init var withDash to the value of string with its spaces replaced with dashes
    var withDash = string.replace(/ /g, '-');
    //return withDash after forcing all letters to be lower case
    return withDash.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

//I: two params- a string and a single char
//O: return true if string begins with character, false otherwise
//C: function is case insensitive

function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    //init variable upperFirst to the value of char forced to uppercase
    var upperFirst = char.toUpperCase();

    //if char equals the first letter in string, or the upper case of that letter
    if (string[0] === char || string[0] === upperFirst) {
        //return true
        return true;
        //for any other cases
        } else {
        //return false
        return false;
        }
          

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

//I: two params- a string and a single char
//O: return true if string ends with character, false otherwise
//C: function is case insensitive

function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

   //init var upperEnd to the value of char forced to uppercase
   var upperEnd = char.toUpperCase();
   //init var lowerEnd to the val of char forced to lowercase
   var lowerEnd = char.toLowerCase();
   
   //if the last char in string equals the upper or lower case of char
   if (string.slice(-1) == upperEnd || string.slice(-1) === lowerEnd) {
       //return true
       return true;
       //for any other cases
       } else {
       //return false
       return false;
       }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

//I: two strings
//O: the strings concatenated

//create funct concat with params stringOne and stringTwo
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //concatenate stringOne and stringTwo, return the new string
    return stringOne + stringTwo;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

//I: two strings
//O: return all strings joined together with no spaces

function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
     //init args to an array made from stringOne and 
     var args = Array.from(arguments);
  
     //return the strings with no seperator
     return args.join('');
 
}


/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

//I: two strings
//O: return the longest strings

//func longest with two params stringOne and stringTwo
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
 //if the length of stringOne is greater than stringTwo's length
 if(stringOne.length > stringTwo.length) {
  //return stringOne
  return stringOne;
 //else if the length of stringTwo is greater than stringTwo's length
 } else if(stringOne.length < stringTwo.length) {
  //return stringTwo
  return stringTwo;
 }
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

//I: two strings
//O: return -1 if 2nd string is higher alphabetically, 0 if they're equal, and 1 if the first is higher alphabetically

//function sortAscending with two params, stringOne, stringTwo
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //init comparReturn to the val of localCompare comparing stringTwo with stringOne
    var comparReturn = stringTwo.localeCompare(stringOne);
    //return the number
    return comparReturn;
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

//I: two strings
//O: return -1 if 2nd string is higher alphabetically, 0 if they're equal, and 1 if the first is higher alphabetically

//function sortDescending with two params, stringOne, stringTwo
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //init comparReturn to the val of localCompare comparing stringOne with stringTwo
    var comparReturn = stringOne.localeCompare(stringTwo);
    //return the number
    return comparReturn;
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
