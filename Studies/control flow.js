/* *
 *  0. CONTROL FLOW 
 *  
 *  The control flow is the order that a computer reads and then executes given code. Code will generally run from
 *  the first line of code to the last on a page, and is evaluated from left to right. The natural control flow may 
 *  be interupted if the code contains some sort of structure that actively impacts control flow. Examples of this 
 *  include any conditional statement and loops.
 * 
 * */

/* *
 *  1. If
 *    
 *  If statements will evaluate a value to see if it meets a set condition, and then execute a block of code if the 
 *  condition is true. Comparison operators are used heavily with if statements and other conditional statements- but
 *  it should be noted that the assignment operator is never used, and that == and === are not =.
 * 
 * */
      //init person to value Claire
      let person = 'Claire';

      //if statement that logs true if the variable person strictly equals Claire
      if (person === 'Claire') {
         return console.log(true); // => true is logged to the console
      }
/* *
 *  2. Else-if
 *     
 *  An else-if statement follows an if statement, and is used to specify what to do if the first condition is not met,
 *  and there are more than two conditions to test for. It evaluates for a completely seperate condition- and can be 
 *  followed or preceded by other else-if statements. If there is a situation where two conditions could be true for 
 *  a value being evaluated- the first condition that returns true will cause the chain to end.
 * 
 * */
      //init mood to value happy
      let mood = 'happy'; 

      //create an else-if chain that logs a string based on mood
      if (mood === 'serious') {
        console.log('Why so serious?');
      } else if (mood === 'happy') {
        console.log('If you\'re happy and you know it, clap your hands.'); // => If you're happy and you know it, clap your hands. is logged to the console
      } 

/* *
 *  3. Else
 * 
 *  An else statement will provide a block of code to be executed if both the if and else-if statements prior in the 
 *  conditional chain fail to execute. Else statements will always be at the end of a chain.
 * 
 * */
     //init num to the value of 5 
    let num = 5;
    
    //check to see if num is divisible by 2 or 3, if it is- log this to the console
    if (num % 2 === 0) {
      console.log("num is divisible by two!");
    } else if (num % 3 === 0) {
      console.log("num is divisible by three!");
    //if it is not divisible by either, log num is not divisible by two or three!
    } else {
      console.log("num is not divisible by two or three!"); // => else statement executes, num is not divisible by two or three! is logged to the console
    }

/* *
 *  4. Switch
 *   
 *  A switch statement is very similar to a condtional chain using if, else-if, and else- but there are some key differences
 *  that set it apart. Firstly, unlike a conditional which is evaluating a condition to see if it is true or false, a switch 
 *  statement will evaluate a value against a set of provided cases- if a case matches the provided value specifically, it 
 *  will execute the statement provided by that case, and exit when it hits a break statement. If it does not hit a break 
 *  statement, the execution will "fall-through", which will lead to other cases being executed until a break statement is 
 *  hit. If needed, multiple cases can be set to execute the same statement. Additionally, a default case can be set in order 
 *  to set a case for all other values than those that were previously specified.
 * 
 * */
     //init variable animal to cat
     const animal = 'cat';
     
     //evaluate animal in a switch statement
     switch(animal) {
       case 'bird':
         console.log('well the bird bird bird, bird is the word-');
         break; 
       case 'dog':   
       case 'puppy':
         console.log('what a pawsitively fine canine!');
         break;
       case 'kitten': //note that having case kitten have the same statement as cat does not interefere with our code's execution
       case 'cat':
         console.log('what\'s a cat? you\'ve got to be kitten me right meow!'); // => since our value is cat, we hit case 'cat' and then, 'what\'s a cat?
         break; //break alllows us to exit so we don't hit default              //  you\'ve got to be kitten me right meow!' is logged to the console
       default:
         console.log('animal crackers in my soup, monkeys and rabbits loop the loop!');
     }