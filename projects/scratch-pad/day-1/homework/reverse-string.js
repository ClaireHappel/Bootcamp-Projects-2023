// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

//I: one string
//O: returns new string with input reversed
//C: use a loop, need a storage variable for the new string

//for function reverseString with one parameter, string
function reverseString(string) {
  // YOUR CODE GOES BELOW HERE //
 //init reversed Str to the val of a string literal
 var reversedStr = '';
  //for loop: start last index, stop first index, decrement of one
  for (var i = string.length - 1; i >= 0; i--) {
    //reassign reversedStr to the value of itself added to each index in the string
    reversedStr += string[i];
  }
//return reversedStr
return reversedStr;
  // YOUR CODE GOES ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}