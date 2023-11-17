console.log("Hello Js");

const fs = require('fs');

const person = {
    name : "Aryan",
    age : 20,
    greet() {console.log("Hello Ji, from" + this.name);}
}

fs.writeFileSync('hello.txt','Hello from node JS')

person.greet();