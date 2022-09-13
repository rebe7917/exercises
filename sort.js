"use strict";

/* const people = ["Harry", "Ron", "Hermione", "Neville"];
people.sort();
console.log(people);
 */
const animals = [
  {
    name: "Mandu",
    type: "cat",
  },
  {
    name: "Mia",
    type: "cat",
  },
  {
    name: "LeLoo",
    type: "dog",
  },
  {
    name: "Freddie",
    type: "dog",
  },
];


function compareName(a,b){
    if(a.name < b.name){
        return -1;
    }else {
        return 1;
    }
}
animals.sort(compareName);
console.log(animals)