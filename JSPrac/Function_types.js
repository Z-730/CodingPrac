// ------------------------------------------------------------------------
// Arrow functions: A compact alternative to traditional fuction
// ***Important: Required for array methods and promises
(x) =>{
    console.log(x);
    return x*x;
}
// ***Important: Required for array methods and promises
// Arrow functions: A compact alternative to traditional fuction
// ------------------------------------------------------------------------


// ------------------------------------------------------------------------
// Anonymous function
let anoni = function(){
    console.log("I am an anomynous function!")
};

anoni();

// Can also be used to store Arrow Functions
let squareFunc = (x) => x*x;

console.log(squareFunc(2));
console.log(squareFunc(3));
console.log(squareFunc(4));
console.log(squareFunc(13));
// Anonymous function
// ------------------------------------------------------------------------



// ------------------------------------------------------------------------
// Self invoking fucntion
// ***Important: Required for array methods and promises
(function(){
    console.log("I am a self invoked funciton!!!!!!");
})();


(function(x){
    console.log("I am a self invoked funciton calling", x);
})(86);
// ***Important: Required for array methods and promises: Required for array methods and promises
// Self invoking fucntion
// ------------------------------------------------------------------------


// ------------------------------------------------------------------------
// Callback fucntion: Takes in another function as a parameter
// ***Important: Required for array methods and promises
let square = (x) => x*x;

let cube = (y) => y*y*y;

function callBack(func, someValue){
    console.log("\nCalling Callback function...");
    console.log(func);
    console.log(func(someValue));
}

callBack(square, 3);
callBack(cube, 4);
// ***Important: Required for array methods and promises
// Callback fucntion: Takes in another function as a parameter
// ------------------------------------------------------------------------


// ------------------------------------------------------------------------
// In JS, all funciton arguments for primitives are passed by value, so the 
// changes won't be reflected outside of the function. But for objects, they 
// are passed by copy of a reference, i.e, the reference itself is passed by
// vaue. So, they are effected outside the function.
let someNum = 5;

function someFunc(x){
    x ++;
    console.log("\nCalling someFunc:", x);
}

someFunc(someNum);

console.log("\nJust printing someNum", someNum);

function incrementAge(personObject){
    personObject.age++;
}

let person1 = {
    name:"Bob",
    age: 44
}

console.log("\nPrinting person1 before passing it through incrementAge: ", person1);

incrementAge(person1);

console.log("Printing person1 after passing it through incrementAge: ", person1);
// In JS, all funciton arguments for primitives are passed by value, so the 
// changes won't be reflected outside of the function. But for objects, they 
// are passed by copy of a reference, i.e, the reference itself is passed by
// vaue. So, they are effected outside the function.
// ------------------------------------------------------------------------