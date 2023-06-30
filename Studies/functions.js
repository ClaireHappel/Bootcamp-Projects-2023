/* *
 *  0. FUNCTIONS
 * 
 *  A function in JavaScript is just a value stored in the memory of our program. Unlike other data types- a function can 
 *  produce another value. Functions can be named, anonymous, or assigned to a variable. They can be nested within each 
 *  other and even be used as returns or arguments. Functions are complex data types and indefinite in their size, meaning 
 *  they require dynamic memory allocation. Their syntax is as follows: each function can optionally take a name, any number
 *  of parameters (which are wrapped in parentheses), all functions will have a function body that is optionally surrounded 
 *  with curly brackets (within this body can be any number of conditionals, variables, loops, functions, and other such 
 *  elements), then the function will optionally have a return.
 * 
 * */

/* *
 *  1. The two phases to using functions: First we must ____? Next we can execute a function by ____? 
 *    (or two other words for executing a function)
 * 
 *  First the function must be created, once it has been initialized it can then be executed by calling the
 *  function itself, using arguments within the call if the object takes any parameters.
 * 
 * */
     // Creating a function: 

      function funcyTown() {
        console.log('Won\'t you take me to Funcy Town?');
      }

     // Calling the function :

      funcyTown(); // => calling the function will cause the function itself to log 'Won't you take me to Funcy Town?' to the console
       
/* *
 *  2. What's the difference between a function's parameters and arguments PASSED to a function?
 *  
 *  A parameter is a variable used as a placeholder within a function. Arguments are the values within the function 
 *  call itself- while they can be a variable representing a data type, they can also be any data type (for example,
 *  you could use the variable numArray or an actual array such as [1, 2, 3]). When these arguments are passed through 
 *  the function, they will be used in the places the parameter holds for them. 
 * 
 * */ 
     // Parameters vs Arguments :

      function withParams(param1, param2) { // the parameters will recieve arguments when a call occurs
        return param1 + param2; // when the call occurs, the arguements take the place of the place holder parameters
      }

      withParams(6, 7); // a function call with two arguments, arguments can be variables or data types. they are passed into the function

/* *
 *  3. What's the syntax for a named function?
 * 
 *  The syntax for a named function is a function keyword, followed by a name, followed by parentheses (). Optionally 
 *  the function can have parameters and a return.
 * 
 * */
     // Example of a Named Function:

      function named(newName) { // named is the function name
        return `my name is ${newName}`;
      }
      
      named('The Bobinator'); // => calling the function with its name allows us to access it

/* *
 *  4. How do we assign a function to a variable?
 * 
 *  Functions can be assigned to variables in the same way as any other data type. After a variable is created, it 
 *  can be assigned the value of an anonymous function. This function can then be used in a function call by using 
 *  the variable in the same way as we would the name of a named function.
 * 
 * */
     // Example of Assigning a Function Assigned to a Variable:

      let iAmAssigned = () => 'You variables can\'t hold me forever!';
      
      console.log(iAmAssigned); // [Function: iAmAssigned] is logged to the console
      console.log(iAmAssigned()); // 'You variables can\'t hold me forever!' is logged to the console

/* *
 *  5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we
 *     specify inputs, and how do we specify outputs?
 * 
 *  A function's ability to take inputs is tied to it's parameters. If a function needs to take 
 *  inputs, setting a parameter for each argument that will be taken will allow all inputs to be
 *  taken in. 
 * 
 *  If we want to return a single value, then we need to make sure to specify a return within 
 *  our function. Without it, our function call will result in a value of undefined, regardless 
 *  of what other things might occur inside the function itself. Adding a return, we will 
 *  recieve some sort of output for each function call we make.
 *  
 * */
     // Optional Inputs and Outputs:
     //                            ___________________ these three parameters will allow for three inputs
     //                           |       |        |
     function optionsOptions(inputMe, meToo, alsoMeThanks) { 
      return `A ${inputMe}, ${meToo}, and ${alsoMeThanks}, walk into a bar. There is a boxing tornament, bowling tornament, and baseball game going on. After watching one punch, one ball take out all pins, and one missed swing- they say, "Three strikes! We're out!" And leave.`
     } // |_ this return will allow the function to have an output

     console.log(optionsOptions('bear', 'lion', 'tiger')); // => 'A bear, lion, and tiger, walk into a bar. There is a boxing tornament, bowling tornament, 
                                                           // and baseball game going on. After watching one punch, one ball take out all pins, and one 
                                                           // missed swing- they say, "Three strikes! We're out!" And leave.' is logged to console  

/* *
 *  6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is not true.
 * 
 *  This property of scope is important to understand because it impacts our ability to access variables and 
 *  impacts the control flow. As we build our programs, we need to do so in such a way that all needed 
 *  variables are accessed properly. Parent scope, also called global scope- is the outermost scope of 
 *  every file containing JavaScript. Function scope is also called local scope, and refers to to contained
 *  scope of a function. Block scope refers to any scope that is surround by curly brackets ({}) such as 
 *  conditionals. Scopes are often nested, which leads to the innermost scopes having access to all variables 
 *  in the scopes that precede the child scope. 
 * 
 * */ 
     // Scope Visualized:

     let myGlobal = 1;

     function mrWorldWide () {
      myGlobal += 12;
      let myLocal = 5;
    }

    mrWorldWide (); //calling the function adds 12 to myGlobal, this is because the child scope can modify and see the variables of the parent scope
    console.log(myGlobal); // => 13 is logged to the console
    mrWorldWide (); // calling it again will add 12 once again to myGlobal
    console.log(myGlobal); // => 25 is logged to the console

    let cantModify = myLocal - 2; // => parent scopes can not see the variables within the inner most scopes, and thus can not modify them
    console.log(cantModify); // => ReferenceError: myLocal is not defined is logged to the console
  
/* *
 *  7. Closures: Functions form closures around the data they house. If an object is returned from the function
 *     and is held in memory somewhere (reference), that closure stays alive, and data can continue to exist
 *     in these closures.
 *     
 *  A closure is a function. Closure only exists when you create a function that returns another function. The
 *  inner function that is nested within the other function's scope gives ability to hold on to variable values 
 *  beyond that scope. 
 * 
 * */
     // Closures to Access an Inner Function:

     function closureMagic () {
      
      return (x) => `${x} is magic!`; // by assigning a function as a return, we gain access to what would ordinarily only be in a function scope
     }

     let fullyAccessible = closureMagic(); // this assigns fullyAccessible to the function returned by closureMagic

     console.log(fullyAccessible('This')); // => 'This is magic!' is logged to the console
  