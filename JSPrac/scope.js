var x = 5;

// ------------------------------------------------------------------------
// Function scope
function print(message){
    console.log(message);

    var y =6;
    console.log(y)
}

console.log(typeof print);
// this will give an error because variable y outside function scope
// console.log(y);
// Function scope
// ------------------------------------------------------------------------

// Block scope
// ------------------------------------------------------------------------
for(let i = 0; i < 5; i++){
    let name = 'something';
    console.log(name, i);
    k = 3;
}

// this wll give an error because variable 'name' outside of scope when
// instantiated using the let keyword inside the block scope 
// console.log(name, 20);

// this wll give an error because variable 'i' outside of scope when
// instantiated using the 'let' keyword inside the block scope
// console.log('My anem', i);


console.log("k:", k);

// Block scope
// ------------------------------------------------------------------------

let a = 8;
function test(){
    
    console.log('a:', 8)
}

console.log(a);


UseMe;
console.log(UseMe); // displays the UseMe Function definition 

var UseMe = "Use Me Variable";

function UseMe()
{            
    console.log("UseMe function called");
}