//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {

    return Object.values(object);

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
   
  var storArr = Object.keys(object);

  return storArr.join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {

    var storArr = [] 

  for (key in object) {
    if (typeof object[key] === 'string') {
        storArr.push(object[key]);
    }
 } 
    return storArr.join(' ');
  
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
if (Array.isArray(collection) === true) {
    return "array";
} else {
    return "object";
}

}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {

    var words = string.split(" ")

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

    var storName = object.name.charAt(0).toUpperCase() + object.name.slice(1)
  
     return "Welcome " + storName + "!"
  
  }

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

     return object.name.charAt(0).toUpperCase() + object.name.slice(1) + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

    if (Array.isArray(object.noises) === true && object.noises.length > 0) {
        return object.noises.join(' ');
    } else {
        return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

    var splitArr = string.split(' ');
  
    console.log(splitArr)
  
      for (var i = 0; i < splitArr.length; i++) {
  
          if (splitArr[i] === word) {
              return true;
          }
      }
  
    return false;
  
  }

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

    object.friends.push(name);
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

    if (object.friends) {
      
      for (var i = 0; i < object.friends.length; i++) {
      
       if (object.friends[i] === name) {
              return true;
          }
  
      }   
    }

    return false
  }
  

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //init nonFriendOutput to an array literal
    let nonFriendOutput = [];
  
    //loop over the array to access its values
    for (let i = 0; i < array.length; i++) {
      //we only want to access the objects that are not whatever name we've been given for our parameter (like Liza) so we can look at the lists of everyone besides the name we're given and see if that person is on their friends list
      //if the current name is not equal to whoever is inputted
      if (array[i].name !== name) {
        //init nameExists to false
        let nameExists = false //boolean flag variable used to detect if 'name' is within any friend's list
        //loop over the friends array
        for (let j = 0; j < array[i].friends.length; j++) {
          //if any value of the friends array is equal to the given param name
          if (array[i].friends[j] === name) {
            //if name is in the array set to true
            nameExists = true;
          }
        }
        //if nameExists is still false, that means the friends array does not include our param, name
        if (nameExists === false) {
          //push the names of anyone who is not friends with param name to nonFriendOutput
          nonFriendOutput.push(array[i].name);
        }
      }
    }
    //return the array of not friends
    return nonFriendOutput;
  }


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: takes an object, key, and a value as parameters
//O: should update the property key on object with new value

function updateObject(object, key, value) {
  //update the object, key, and value
  object[key] = value;
  //return object
  return object;
}
  

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {


    for (var i = 0; i < array.length; i++) {
      delete object[array[i]];
    }
    return object;
  }

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//I: an array with duplicates
//an array without duplicates

//function dedup has one param, array
function dedup(array) {

  //init storArr to an array literal
  let storArr = [];

  //create a for loop to go over all values of the array
  for (var i = 0; i < array.length; i++) {
    //if storArr does not contain a value from the array
    if (!storArr.includes(array[i])) {
      //push the value into storArr
      storArr.push(array[i])
    }
  }
  //return storArr
  return storArr
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}