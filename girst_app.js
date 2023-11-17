console.log("Hello Js");

const { log } = require('console');
const fs = require('fs');

// Write an arrow function which returns the product of two numbers
const mult = (a,b) => a*b;

console.log(mult(5,4));

person.greet();

// Watch video 6 as well and create a student object

const person = {
    name : "Aryan",
    age : 20,
    greet() {console.log("Hello Ji, from" + this.name);}
}

fs.writeFileSync('hello.txt','Hello from node JS')