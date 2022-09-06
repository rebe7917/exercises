"use strict";
/* function greeting(firstName) {
  return `Hello ${firstName}`;
}
const messeage = greeting("Emma");
console.log("message1:", messeage);

console.log("message2:", greeting("Freddie"));
console.log("message3:", `A messeage ${greeting("Freddie")}`); */


const name = "rebeCca";

capitalize(name);
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
 
} 
const cap = capitalize(name)
 console.log(cap);