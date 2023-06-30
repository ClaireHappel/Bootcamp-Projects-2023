
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: none
//O: no return, instead log a triangle by printing one # for each num given

//create function triangles, no param needed
function triangles(num) {
 
  //init stringLog to an empty string
  let stringLog = '';

   //create a loop that loops as long as it is less than num
   for (var i = 0; i < num; i++) {
     //print to the console stringLog plus itself and another #
     console.log(stringLog += '#');
   }
  
}

//console.log(triangles())

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//O: print all numbers from 1 to 15- with some exceptions
//C: for all multiples of three print fizz, for all multiples of five print buzz, and all numbers of five and three print fizzbuzz
//E: mults of 3 and 5 should only print fizzbuzz- not fizz, buzz, and fizzBuzz

//create funct fizzBuzz, no params
function fizzBuzz(number) {
  // YOUR CODE GOES BELOW HERE //
//init num variable to 1
let num = number;
//create a while loop to iterate over all nums
//while num is less than 100, including 100
while (num <= 15) {
//create a conditional to sort all nums
//if num is a mult of 3 and 5
if (num % 5 === 0 && num % 3 === 0) {
  //print FizzBuzz
  console.log('fizzbuzz');
//else if num is mult of 3
} else if (num % 3 === 0) {
  //print Fizz
  console.log('fizz');
//else if num is mult of 5
} else if (num % 5 === 0) {
  //print Buzz
  console.log('buzz');
//else
} else {
  //print num
  console.log(num);
}  
 //increase num by one
 num++;
}

}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


//I: takes in one number
//O: returns a chessboard that is the width/height of that number

function drawChessboard(num) {
  //create an array to store rows of strings
  var chessBoard = [];
  var number = num;

   if (num <= 0 ) {
    return;
   }
  //create a loop that runs the same amount of times as num
  for (var i = 0; i < number; i++) {

    //init a variable to represent row to an empty string
    var row = '';
    
    //iterate to create a row
    for (var j = 0; j < number; j++) {
      //if j + i have a remainder strictly equal to 0 when divided by 2
      if ((i + j) % 2 === 0) {
        //add a space to row
        row += ' ';
        //if it is odd
      } else {
        //add a # to row
        row += '#';
      }
    
    }
    //then push row to chessBoard
    chessBoard.push(row);
  }
  //return the board joined into a string
  return console.log(chessBoard.join('\n') + '\n');

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
