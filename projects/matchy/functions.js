/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//implement a function called search that takes two params, one representing animals array and one representing a string that ideally, is an animal name
function search(arrAnimal, nameAnimal) {
  //create a for loop that iterates over every value of the animal array
  for (var i = 0; i < arrAnimal.length; i++) {
    //if a name within any object within animals is strictly equal to the given string
    if (arrAnimal[i].name === nameAnimal) {
      //return the entire object representing that specific animal
      return arrAnimal[i];
    }
    
  }
//function should return null if no animal is found
return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//write a funct declaration called replace that has a signature of replace(animals, name, replacement) - params are animals array, string represent the name of an animal and an obj that represents the replacement animal
function replace(animals, name, replacement) {

  //create a for loop to iterate over all of animals array
  for (var i = 0; i < animals.length; i++) {
    //if name is strictly equal to the value of a name on one animal object
    if(animals[i].name === name) {
      //replace that animals object with replacement object
      animals[i] = replacement;
    }
  }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//write a function remove with params animals and name, representing the array of animals and a string
function remove(animals, name) {
  //create a for loop to iterate over all of animals array
 for (var i = 0; i < animals.length; i++) {
   //if name is strictly equal to the value of a name on one animal object
   if(animals[i].name === name) {
   //remove that entire obj in animals using splice 
   animals.splice(i, 1);
   }
 }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//write a function called add with a signature add(animals, animal) - that takes the array of animals and an object representing a new animal
function add(animals, animal){

  //create storAnimal to store value of animal 
  var storAnimal;

  //if the length of the new animal's name is not 0, the species of the animal does not have a length of 0
  if (animal.name.length !== 0 && animal.species.length !== 0) {
    //create a for loop to iterate over all of animals array
    for (var i = 0; i < animals.length; i++) {
      // if the animal's name exists already within animals
      if (animal.name === animals[i].name) {
        //do nothing else 
        return;
      }
    } 
    //push animal into animals object
    animals.push(animal);
  }
}



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
