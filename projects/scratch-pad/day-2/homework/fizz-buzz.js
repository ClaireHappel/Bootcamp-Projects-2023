// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

//O: print all numbers from 1 to 100- with some exceptions
//C: for all multiples of three print Fizz, for all multiples of five print Buzz, and all numbers of five and three print FizzBuzz
//E: mults of 3 and 5 should only print FizzBuzz- not Fizz, Buzz, and FizzBuzz

//create funct fizzBuzz, no params
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
  //init num variable to 1
  let num = 1;
 //create a while loop to iterate over all nums
 //while num is less than 100, including 100
 while (num <= 100) {
  //create a conditional to sort all nums
  //if num is a mult of 3 and 5
  if (num % 5 === 0 && num % 3 === 0) {
    //print FizzBuzz
    console.log('FizzBuzz');
  //else if num is mult of 3
  } else if (num % 3 === 0) {
    //print Fizz
    console.log('Fizz');
  //else if num is mult of 5
  } else if (num % 5 === 0) {
    //print Buzz
    console.log('Buzz');
  //else
  } else {
    //print num
    console.log(num);
  }  
   //increase num by one
   num++;
 }
    // YOUR CODE GOES ABOVE HERE //
}






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}