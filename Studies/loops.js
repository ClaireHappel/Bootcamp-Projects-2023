/* *
 *  0. LOOPS
 *  
 *  Loops give us to ability to iterate over something repeatedly. There are many different kinds of loops, but they all 
 *  achieve the same goal of repeating an action some number of times. The different loop mechanisms offer different 
 *  ways to determine the start and end points of the loop. Certain loops are used over others depending on what 
 *  goal we are trying to accomplish and what data types we are working with. Data types such as strings and arrays,
 *  for example, are often iterated over with a for loop. Objects meanwhile, often are iterated over with a for-in
 *  loop. While loops can be used when we are unsure of how many times we will need to loop while for loops are best
 *  used when we know the number of times we want to loop.
 *  
 * */

/* *
 *  1. Explain while, for, and for-in loops
 * 
 *  A while loop executes its statements as long as a specified condition evaluates to true. A while statement's syntax is 
 *  while, followed by some condition specified, with a statement to be fufilled so long as the condition is true. To iterate
 *  over values properly, it is important to iterate whatever starting value you are using within the statement portion of the 
 *  while loop. The looping will stop after the condition turns false- setting a condition that will never turn false will
 *  result in an infinite loop being created. While loops can use break statements and continue statements in order to control
 *  where the looping ends specifically. In a while loop, continue will cause the looping to jumps back to the condition.
 * 
 *  For loops repeat until a condition evaluates to false. A for statement's syntax includes for immeadiately followed by a
 *  parentheses. Within these parentheses are the initial value our for loop will loop over- for example this could be a 
 *  number or the index of array. After this, there is a condition specified that once met, will cause our for loop to stop.
 *  Lastly, we have what's known as the afterthought, an expression that will be executed on each loop. Frequently this is 
 *  used for incrementation (or step) within our loop. Following all of this is the statement(s) that will be executed each
 *  loop.For loops can also use both break and continue statements. In a for loop, the continue will jump to the 
 *  increment-expression.
 * 
 *  A for-in loop is a bit different from other loops in that it is specifically used to loop over objects. As such, it has
 *  a distinct syntax. It starts with a for that is followed by a set of parantheses containing the declaration of a variable.
 *  This variable declaration is immeadiately followed by the word "in" and the object's name. This is then followed by a statement,
 *  Accessing the object in this way allows for both keys and values in the key/value pairs to be accessed easily. For-in loops
 *  would not be used for any looping where the index value is important, and thus arrays and strings tend to be accessed with 
 *  for loops instead.
 *   
 * */
     // While Loop: 

     var whileArr = ['w', 'h', 'i', 'l', 'e']; // the array we're looping through

     let start = 0; // this is acting as the starting point for our loop 

     while (start < whileArr.length) { // the condition- while start is less than the length of the array
       console.log(whileArr[start].split(' ')); // => ['w'] 
       start++; // increment start by one       //    ['h']
     }                                          //    ['i']
                                                //    ['l']
                                                //    ['e'] is logged to console

     // For Loop:

     let forLoopArr = [ "f", "o", "r" ]; // the array we're looping over

      for (let i = 0; i < forLoopArr.length; i++) { // start at 0, as long as i is less than the array length, increment i by 1
	     console.log(forLoopArr[i] + ' : ' + [i]); // => f : 0 
      }                                            //    o : 1
                                                   //    r : 2  is logged to console

                                                   //    note that the output is a string of the letters, a semicolon, and their respective indexes in the array

     // For-in Loop:

     let forInLoopMe = { //the object we're looping over
        name: 'Claire',
        objective: 'To become better at JavaScript every day.',
        whatLoopsOverObjects: 'A for-in loop!'
     };

     for (let key in forInLoopMe) {
       
        console.log(key); // =>  name
                          //     objective
                          //     whatLoopsOverObjects is logged to console
       
     }                    // if we wanted values, we could use forInLoopMe[key] instead

/* *
 *  2. Be able to loop any number of times, forward counting up to some limit and backward counting down to 0.
 *  
 *  Looping to a nonspecific value and looping backward can both be achieved with both for loops and while 
 *  loops. In general, for loops tend to be prefered when we know the number of times we need to loop- 
 *  and a while loop would be used if you needed to hit some other condition other than the number of times.
 *  You would never use a for-in loop for either of these cases because they do not strictly involve objects. 
 * 
 * */
     // Loop Forward Until Hitting Some Number:

     let loopTillNum = (num) => { 

        let numArray = []; // an empty array
 
        for (let i = 0; i <= num; i += 3) { // starting at 0, stop is when i is less than or equal to num, and each loop i is incremented by 3
            numArray.push(i); // then we push i to our storage array
        }
       return numArray; // before returning an array of all those numbers
     }
 
     console.log(loopTillNum(21)); // => [ 0,  3,  6, 9, 12, 15, 18, 21 ] is logged to the console

     // Loop Backwards From A Specified Number till 0:

     let loopReverse = (num) => {

        let numArray = []; // an empty array

        for (let i = num; i >= 0; i -= 2) {  // starting at num, stop is when i is greater than or equal to 0, and each loop i is decremented by 2
            numArray.push(i); // then we push i to our storage array
        }
        return numArray; // before returning an array of all those numbers
     }

     console.log(loopReverse(10)); // => [ 10, 8, 6, 4, 2, 0 ] is logged to the console

/* *
 *  3. Loop over an array, forwards and backwards
 *  
 *  Looping over an array positively requires an incrementation of the initial value we placed as the start
 *  of our loop. If we wanted to loop over every value, we would use an incrementation value of 1, which can
 *  be written in one of three ways: x = x + 1, x += 1, or x++. In the case of an array moving backwards, we
 *  would need to use a decrement instead of an increment. If we wanted to decrement the value each time by
 *  1, we could do so in the following ways: x = x - 1, x-= 1, or x--. It is also possible to decrement or 
 *  increment by a prefix value instead of a postfix value (++x and --x instead of x++ and x--) and the 
 *  specifications on what that would entail can be found within the Operators section of this project. 
 * 
 * */
     // Increment Forwards Over an Array:

     let forward = ['f', 'o', 'r', 'w', 'a', 'r', 'd'];
     

     let forwarding = (array) => {

        let forMessage = '' // an empty string

        for (let i = 0; i < array.length; i++) { // start at the first index, end at the last index, and increment forward by 1
            forMessage += array[i]; // for each loop, add the string value at each index to forMessage and reassign forMessage to this value
        }
       return forMessage; // before returning all the letters
     }

     console.log(forwarding(forward)) // => 'forward' is logged to the console

     // Decrement Backwards Over an Array:

     let backward = ['d', 'r', 'a', 'w', 'k', 'c', 'a', 'b'];

     let backwarding = (array) => {

        let forMessage = '' // an empty string
        
        for (let i = array.length - 1; i >= 0; i--) { // start at the last index, end at the first index, and decrement backwards by 1
            forMessage += array[i]; // for each loop, add the string value at each index to forMessage and reassign forMessage to this value
        }
       return forMessage; // before returning all the letters
     }

     console.log(backwarding(backward)) // => 'backward' is logged to the console


/* *
 *  4. Loop over an object
 * 
 *  For-in loops are ideal for looping over objects. For-in loops allow easy access to both keys and values,
 *  which means they are a wonderful tool to fully access objects. While we would not use for-in loops on an 
 *  array due to indexing- objects do not have an order, making them perfect for for-in loops. In the case 
 *  of an array of objects- pairing a for loop and a for-in loop with each other can provide a reliable 
 *  way of accessing all data. 
 * 
 * */
     // Use a For-in Loop to Loop Over an Object 
    
      //in this case, our object is going to be within an array- each object represents a person
      let siblingsArray = [ // note the array brackets
        {name: 'Claire', favAnimals: 'cats', hobbies: ['gaming', 'coding', 'reading']}, // one object
        {name: 'Grant', favAnimals: 'lizards', hobbies: ['gaming', 'welding', 'gardening']}, // another object
        {name: 'Peter', favAnimals: 'fish', hobbies: ['gaming', 'fishing', 'hunting']} // the last object
      ];
    
    let grabSiblingsData = (array, key) => { // our array and a key name to search for
       let arrInfo = []; // an empty array
       for (let i = 0; i < array.length; i++) { // a for loop to iterate through the array
           for (let keys in array[i]) { // a for in loop to reach the key/value pairs
               if (keys === key) { //if one of the keys equal the key value given
                   arrInfo.push(array[i][keys]); //push the info to our storage array
               }
           }
       }
      return arrInfo; //return the info
    }

    console.log(grabSiblingsData(siblingsArray, 'favAnimals')); // => [ 'cats', 'lizards', 'fish' ] is logged to the console
    

     

