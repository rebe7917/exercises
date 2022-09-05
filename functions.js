"use strict";
/* const firstName = "Emma" 
const myName = "Johnny";

sayHello("Johnny");

function sayHello(firstName){
console.log(`Hello ${firstName}`)
}
 */
//console.log(`Hello ${firstName}`);

/* const firstName = "Freddie";
const animalType = "cat";
const animalName = "ingolf";
presentPet(firstName, "dog", "bruce");
function presentPet(firstName,animalType,animalName){
    
console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
}

console.log(firstName); */

/* const firstName = "Freddie";
const animalType = "cat";
const animalName = "ingolf";
presentPet(firstName, "dog", "bruce");
function presentPet(animalName, firstName, animalType) {
  console.log(
    `My name is ${firstName}, I have a ${animalType} called ${animalName}`
  );
}

console.log(firstName); */

/* const name = "rebeCca";

capitalize(name);
function capitalize(str){
let capitalizeName = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
console.log(`My name is ${capitalizeName}`);
} */

/* const name2 = "rebecca";

capitalize(name2);
function capitalize(str) {
  let capitalizeName =
    str.substring(0,3).toLowerCase() +
    str.substring(3,4).toUpperCase() +
    str.substring(4).toLowerCase();
  console.log(`My name is ${capitalizeName}`);
} */



/* const fullName = "Lasse Godtkjær Andersen";

getNameParts (fullName);

function getNameParts(){
 let firstSpace = fullName.indexOf(" ");

 let seccondSpace = fullName.lastIndexOf(" ");

 let lenght = fullName.length;

 let firstName = fullName.substring(0, firstSpace);

 let middleName = fullName.substring(firstSpace, seccondSpace).trim();

 let lastName = fullName.substring(seccondSpace, lenght).trim();

 console.log({ firstName, middleName, lastName });

} */
const full = "Harry hagrid Potter";

getNameParts (full);

function getNameParts(fullName){
  const firstName = fullName.substring(fullName.indexOf(0), fullName.indexOf(" ")).trim();
  const middleName = fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" ")).trim();
  const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1).trim();
 fullNames(lastName, firstName, middleName);

}

function fullNames(lastName, firstName, middleName){
  if(middleName === ""){
    console.log(`fullname: ${firstName} ${lastName}`);
  }else{
    console.log(`fullname: ${firstName} ${middleName} ${lastName}`);
  }
}

