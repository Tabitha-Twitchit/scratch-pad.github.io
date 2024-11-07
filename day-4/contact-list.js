// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
I 
O Returns a "contact object--implying an object with details for one contact"
C
E
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *    X 1. length(): returns the number of contacts within the list.
 *    X 2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *    X 3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *    X 4. removeContact(contact): takes a contact object to be removed from 
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
 * 
 * NOTE: Look at the Data json file. That is what you're working
*/
// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id : id,
        nameFirst: nameFirst,
        nameLast: nameLast,
    }
} 

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
    
    TABI: seems like something in the background is pushing the JSON objects onto 
    the contacts array. not sure what they mean by length api, the array method?
    */
    var contacts = [];
    // console.log(contacts);
    
    return {
        // we implemented the length api for you //
       length: function(){
        // console.log(contacts);
        return contacts.length;
       },
       addContact: function(contact){
        console.log(contacts);
        contacts.push(contact);
        // we can see here from logging that what is passed through is an array of 2 objects
        console.log(contacts);
       },
       findContact: function(fullName){
        // input: a fullname string: Max Gaudin
        // console.log(fullName);

        // SO seemingly need to break the string, and use the piece to check for a first / lastname
        const [first, second] = fullName.split(" ");

        // checking we did the split right
        // console.log(first);
        // console.log(second);       

        // create a new var to be the result of checking the contacts array for a key value pair matching...
        // our pair of strings comprising fullname. This happens shabbily now tho because we're only checking
        // first name here... hrm 
        const result = contacts.find(obj =>{
            // is there a way to expand this statement to include the last name or should I have tried to 
            // check a concatenated version of nameFirst / nameLast, hrmmm
            return Object.keys(obj).includes("nameFirst") && obj["nameFirst"] === first; 
        });
        // a return statement referencing the full contacT object, 
        return result;
        // or else undefined
       },
       removeContact: function(contact){
        // log to see the object to be removed.
        // console.log(contact);

        for(let i = 0;i < contacts.length; i++){
            if(contact === contacts[i]){
                contacts.splice(i , 1);
            }
        }
        // This is helpful to remember, that if what you have is Apples to Apples objects, you can just use strict compare. 
        // No need to hack up strings or use fancy methods. 
       },
       printAllContactNames: function(){
        // returns a single string comprised of all concatenated first and last names with spacing and line breaks
        // last name can't have a line break after.
        // What is a JS line break string literal?
        
        // create results string
        let results = "";
        // loop the array

        for (let i = 0; i < contacts.length; i++){
            // seems like to reach into the obj in the array we need a ref to it?
            let currentObj = contacts[i];
            // if i != the last array element do the full deal
            if(i !== contacts.length -1){
                // access the value of first name, and to the string with a space,
                //  access the value of last name, add it to the string. Add a line br
                results += currentObj.nameFirst + " " + currentObj.nameLast + "\n"; 
            // else if i === array.length
            } else if (i === contacts.length -1){
                // do the above stuff withOUT the linebreak.
                results += currentObj.nameFirst + " " + currentObj.nameLast;
            }
        }
        
// return the results string  
console.log(results);
return results;




       }
    }
}

makeContactList(); // => { length: function(){}, addContact: function(){}, findContact: function(){}  }
// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}