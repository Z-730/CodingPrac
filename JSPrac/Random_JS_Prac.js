var a = 1;
//a = true;
//console.log(typeof a);

var x = null;
var y = undefined;
var z;
console.log(x);
console.log(y);
console.log(z);

// Creating objects
var person = new Object();
person.name = "I don't have a name!"
person.age = 101;
person.job = "What!";
console.log(person);

// Creating objects in another way
var anotherPerson = {
    name: "Another name",
    age: 404,
    work: "Not again!"
}


// Dates
var curdate = new Date();
console.log(curdate);
console.log(typeof person.job);
console.log(typeof person.name);
console.log(typeof person);

// ------------------------------------------------------------------------
// Checking '==' and '===' in JS
var person1 = {
    name: "Another name",
    age: 404,
    work: "Not again!"
};

var person2 = {
    name: "Another name",
    age: 404,
    work: "Not again!"
};

console.log('person1 == person2: ', person1 == person2);

console.log('person1 === person2: ', person1 === person2);

var person3 = person1;

console.log('person1 == person3: ', person1 == person3);

console.log('person1 === person3: ', person1 === person3);
// Checking '==' and '===' in JS
// ------------------------------------------------------------------------

// ------------------------------------------------------------------------
// Default parameters in JS
function getInfo (name, year = 2018, color = 'blue') {
    console.log(name, year, color);
    //console.log(year);  
    //console.log(color);
  }
  
  getInfo("katy", undefined, undefined);     // outputs: "katy 2018 blue"
  getInfo( undefined, 1995, 'red');    // outputs: "undefined 1995 red" 
  getInfo("Jerry" , 2020)            // outputs: "Jerry 2020 blue"
// Default parameters in JS
// ------------------------------------------------------------------------


