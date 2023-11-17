console.log("Hello Js");

const { log } = require('console');
const fs = require('fs');

// Write an arrow function which returns the product of two numbers
const mult = (a,b) => a*b;

console.log(mult(5,4));


// Watch video 6 as well and create a student object

const person = {
    name : "Aryan",
    age : 20,
    greet() {console.log("Hello Ji, from" + this.name);}
}

person.greet();

fs.writeFileSync('hello.txt','Hello from node JS');

// Take an array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon]. Transform it into ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon] using array maps

let arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

let arr2 = arr.map((val)=>{
    if(val === ' ') return 'empty string';
    else return val;
});

console.log(arr2);

// How is hobbies const and it still doesnt error out when we add new elements to the array as in the video.
// Because array is a reference variable it just contains reference to those values


// What according to you is spread opertor. Does spread operator create a new object or point to the same old object?
// It creates a new object or array with the values of old object or array.

// What is rest operator. [Watch video 9 and 10 from the same link above and understand it in detail]
// Rest operator is opposite of spread operator. 

let BecomeArr = (...args) => [args] // This is not spread oprator this is rest opeator