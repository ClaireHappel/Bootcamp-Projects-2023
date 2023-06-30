////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  //if num1 is lower than num2, return num1
   if (num1 < num2) {
     //return num1
     return num1;
   //else
   } else {
     //return num2
     return num2;
   }
 }

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//for function isEven take takes one param, number
function isEven(num) {
  //if num is strictly equal to 0
  if (num === 0) {
    //return true, since number is even
    return true;
  //else if num is strictly equal to 1 or -1
  } else if (num === 1 || num === -1) {
    //return false, since number is odd
    return false;
  //if not 1 or 0
  } else {
    //subtract 2 from the number and run isEvan again
    return isEven(num - 2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: two params, a string and a letter
//O: return the count of the letter

function countChars(string, letter) {

  //init letterCount to val 0
  let letterCount = 0;
  
    //loop over all indexes of string
    for (let i = 0; i < string.length; i++) {
      //if a val of string is strictly equal to letter
      if (string[i] === letter) {
        //add one to letterCount, and assign it to the new value
        letterCount  += 1;
      }
    }
    //return letterCount
    return letterCount;
  }
  

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: input is a string
//O: is how many Bs exist in one string
//E: edit countBs to use countCharacters

//for function countBs with one param, string
function countBs(string) {

  //return a call of countChars using param to represent our string and 'B'
  return countChars(string, 'B');
                             
  }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};