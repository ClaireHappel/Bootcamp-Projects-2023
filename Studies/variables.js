/* *
 *  0. VARIABLES  
 * 
 *  Variables hold on to the information we assign either during initialization or assignment later in the program. 
 *  They allow us to use data as many times as needed within our programs. They can be assigned to the value of any 
 *  data type: whether simple like strings, booleans, and numbers or complex like objects and arrays. Ideally, they 
 *  are named in a way that we can guess at what they hold (for example strToArr could be a storage array for a string 
 *  being changed into an array). While said values can not be changed (for example, the number 2 can not suddenly morph  
 *  into 4), we can manipulate variables so that they let go of their old value and grasp on to a new one via reassignment. 
 *  Reassignment should not be confused with redeclaration- which can cause undesired side effects and occurs when declaring 
 *  the same variable twice with var.
 * 
 * 
 *  1. Declaration and assignment
 * 
 *  Declaration is when we name our variable and assignment is when we assign that name to a designated value. If both are 
 *  performed in one step, we have successfully initialized our variable. After assignment, it is possible to reassign the value 
 *  to a new value. 
 * 
 * */
     // Declaration:

      //declaration of variable pet- at this point pet is undefined, as it has not been assigned a value
      var pet;
    
     // Assignment:

      //assignment of variable pet to the string value 'Siegfried Happel'. Now pet has a value of 'Siegfried Happel', and is no longer undefined.
      pet = 'Siegfried Happel';

     // Initialization:

      //initialization of variable pet 2 to the string value 'Roy Happel'
      var pet2 = 'Roy Happel';
/* * 
 *  2. var, let, and const
 * 
 *  There are three ways to declare a variable within Javascript- var, let, and const. The first way, var, was used during the earlier 
 *  days of Javascript. Due to issues caused by its ability to be redeclared, developers sought a solution. The answer to the problem 
 *  of var came in the form of the two other ways to declare- let and const. Declaring a function with let will allow it to be reassigned 
 *  similarly to var, but will not allow for redeclaration. Meanwhile, declaring with const will mean the variable will not allow any 
 *  reassignment or redeclaration. While var is hoisted to the top of scope and is function scope- let and const are both block scoped.
 * 
 * */
     // var: 

      //declaring and assigning a value with var
       var thisFire = 'Is out of control'; 
       console.log(thisFire); // => Is out of control

      //redeclaring the variable 
       var thisFire = 'Is actually pretty manageable!';
       console.log(thisFire); // => Is actually pretty manageable!

      //function scope and var
      function scopingTheScene() {
        var scopedOut = 6;
        {
          var scopedOut = 8; // this is the same variable- so altering it reassigns the value to 8
          console.log(scopedOut); // 8 is logged to the console
        }
        console.log(scopedOut); // 8 is logged to the console
      }

      scopingTheScene();

     // let:

      //declaring and assigning a value with let
       let wakeMeUp = 'inside';
       console.log(wakeMeUp); // => inside

      //attempting to redeclare with let will result in errors
       let wakeMeUp = 'when it\'s all over'; //running code results in => SyntaxError: Identifier 'wakeMeUp' has already been declared
        
       wakeMeUp = 'before you go-go'; //instead, reassign wakemeUp to a new value
       console.log(wakeMeUp) // => before you go-go

      //block scope and let
      function threeSixtyNoScope() {
        let scopedOut = 3;
        {
          let scopedOut = 5; // this is a different variable because of scoping- meaning that depending on what scope we're in, we're dealing with a different value
          console.log(scopedOut); // 5 is logged to the console
        }
        console.log(scopedOut); // 3 is logged to the console
      }

      threeSixtyNoScope();

     // const:

      //declaring and assigning a value with const
       const lawOfConservationOfMass = 'In a closed or isolated system, matter cannot be created or destroyed.';
       console.log(lawOfConservationOfMass); // => In a closed or isolated system, matter cannot be created or destroyed.

      //attempting to redeclare will result in errors
       const lawOfConservationOfMass = 'Some matter is definitely destroyed.'; // running code results in => SyntaxError: Identifier 'lawOfConservationOfMass' has already been declared
                  
      //attempting to reassign will result in errors
       lawOfConservationOfMass = 'Maybe some matter can be created?'; // running code results in => TypeError: Assignment to constant variable.

      //block scope and const

      function scopeForBroke() {
        const scopedOut = 9;
        {
          const scopedOut = 2; // just like with let - this is a different variable because of scoping- meaning that depending on what scope we're in, we're dealing with a different value
          console.log(scopedOut); // 2 is logged to the console
        }
        console.log(scopedOut); // 9 is logged to the console
      }

      scopeForBroke()   
   
 /* *
 *  3. Hoisting
 *  
 *  Hoisting is a pre execution process that will move certain declarations to the top of their scope. Functions are always hoisted to the 
 *  top, next are any variable declarations using var. This process does not just happen on a global scope, but also inside of functions 
 *  themselves. Hoisting is important to remember when writing code because it impacts where we can access parts of our code and can lead 
 *  to errors. Using let and const to declare a variable will prevent variables being used before declaration, sending an error to the console 
 *  instead of simply declaring the variable undefined. This helps us weed out any unintentional side effects that could result from hoisting. 
 *   
 * */ 
     // Hoisting and Accessibility:
    
     //declaring a variable before a function allows it to be accessed
     var theresNot = 'a soul out there';
    
     //a function
     function gimmeGimmeGimme() {
       
        //accessible values 
        console.log(aMan); // => after midnight
        console.log(wontSomebody); // => help me chase the shadows away?
        console.log(theresNot); // => a soul out there

        //let prevents initialization before declaration
        console.log(noOne); // => ReferenceError: Cannot access 'noOne' before initialization

        //var will cause the value not yet declared to return undefined, as the program recognizes var exists because of hoisting
        console.log(takeMe); // => undefined

        //const will also prevent intitilization prior to declaration
        console.log(toThe); // => ReferenceError: Cannot access 'toThe' before initialization
          
        let noOne = 'to hear my prayer';  
       
        //noOne can be accessed after being declared
        console.log(noOne); // => to hear my prayer

    }
    
     //declaring before the function call, also allows it to be accessed- as seen with both let and var here
     var aMan = 'after midnight';
     let wontSomebody = 'help me chase the shadows away?';
    
     //function call
     gimmeGimmeGimme(); 
    
     //declaring after a function call
     //takeMe is undefined when called within the function, no errors are thrown
     var takeMe = 'through the darkness';
     //toThe meanwhile, threw an error
     const toThe = 'break of the day';


