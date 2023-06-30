// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

function makeContact(id, nameFirst, nameLast) {

    // return contact obj
    return {
      //init key id to value id
      id: id,
      //init key nameFirst to value nameFirst
      nameFirst: nameFirst,
      //init key nameLat to value nameLast
      nameLast: nameLast
    };
  
  }  


  function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    let storContacts = []; //assume contacts looks like the contacts in data folder
  
    return {
      // we implemented the length api for you //
      //init key length to the val of a function that returns the length of contacts
      length: function() {return storContacts.length},
      //init key addContact to the val of a function that taskes one param, contat. It then pushes any contact to the contacts list
      addContact: function addContact(contact) {return storContacts.push(contact)},
      //init key findContact to the val of a function that takes one param, fullName. it returns the specified object if found in the contact list, or undefined if not   
      findContact: function findContact(fullName) {
          
        //search through the contacts array with a for loop
        for (let i = 0; i < storContacts.length; i++) {
  
          //if fullName is strictly equal to the value of the first and last name of that contact
          if (fullName === (storContacts[i].nameFirst + ' ' + storContacts[i].nameLast)) {
          //return the entire object
          return storContacts[i];
          //else if the fullName does not exist
          } else {
          //return undefined
           return undefined;
          }
    
        }
    
    },
    removeContact: function removeContact(contact) {
      //for loop to go over all of storContacts
      for (let i = 0; i < storContacts.length; i++) {
        //if var contact is not undefined
        if (storContacts[i] === contact) {
          //splice storContacts at index i, deleting the object there
          return storContacts.splice(i, 1);
        }
      }
    },
      printAllContactNames: function printAllContactNames() {
      
        let nameFull = [];

        for (let i = 0; i < storContacts.length; i++) {
           //nameFull to 
         nameFull.push(storContacts[i].nameFirst + ' ' + storContacts[i].nameLast);
      
        }
       
      return nameFull.join('\n');
    }
  }
      
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
