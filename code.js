// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(x) {
   if (typeof x !=="string") {return "Hello, World!"}
   else if (!isNaN(x)) {return "Hello, World!"}
   else {return "Hello, " + x +"!"};
// return "Hello, Jane!"
}

function isFive(x) {
return parseFloat(x)===5
}

function isEven(x) {
   if(x===false) {return false} else {return x % 2 ==0}
}

function isVowel(x) {
    if (typeof x !== "string") {return false}
    else {return !/[bcdfghjklmnpqrstvwxyz]/.test(x)};
}

function add(x,y) {
    if (isNaN(x,y)) {return parseFloat(("banana"))} else {return parseFloat(x) + parseFloat(y)};
}
