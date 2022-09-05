//Del fuldenavn i for-, mellem-, og efternavn 
const fullName = "Peter Heronimous Lind"

const firstName = fullName.substring(0,5);
const middleName = fullName.substring(6, 16);
const lastName = fullName.substring(17,21);

console.log(firstName);
console.log(middleName);
console.log(lastName);
// rigtige udgave
const fullName = "Lasse Godtkjær Andersen";

let firstSpace = fullName.indexOf(" ");

let seccondSpace = fullName.lastIndexOf(" ");

let lenght = fullName.length;

let firstName = fullName.substring(0, firstSpace);

let middleName = fullName.substring(firstSpace, seccondSpace).trim();

let lastName = fullName.substring(seccondSpace, lenght).trim();

console.log(firstName);

console.log(middleName);

console.log(lastName);
// 3 letter CAP
const navn = "Harry"
 const name1 = navn.substring(2, 3).toUpperCase();
 const part1 = navn.substring(0, 2);
 const part2 = navn.substring(3);
console.log(`${part1}${name1}${part2}`);
 
//first letter uppercap, rest lowercap
const myString = "the first letter is capital"
let part3 = myString.substring(0, 1).toUpperCase();
let part4 = myString.substring(1);
console.log(`${part3}​​​​${part4}​​​​`);

//find længden af fornavnet
const input2 = "Harry Potter"
let firstSpace = input2.indexOf(" ");
let name2 = input2.substring(0, firstSpace);
let len = name2.length;
console.log(len)

//find længden af et navn
const name3 = "Hagrid Petersen";
let leng = name3.length;
//console.log(name3.length)
console.log(leng);


