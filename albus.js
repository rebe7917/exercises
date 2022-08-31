"use strict"
//albus
const name = "Albus Percival wulfric Brian Dumbledore";
const total =  name.length;
console.log(`Total number of characters is ${total}`);
// trim 
const str1 = "  there is     space here \n"
const str2 = str1.trim();
console.log(str2);
//substring
const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0, 5);
const lastName = fullName.substring(17);
console.log(firstName)
console.log (`first name is: _${firstName}_`);
console.log(`last name is: _${lastName}_`);


