"use strict";
/* document.addEventListener("DOMContentLoaded", function(event){
    console.log("event", event)
console.log("MORE!!!!");
})
 */
/* document.addEventListener("DOMContentLoaded", (event)  =>{
  console.log("event", event);
  console.log("MORE!!!!");
});
 */
/* document.addEventListener("DOMContentLoaded", (event) => 
  console.log("event", event)
  );
 */
/*   const people = ["Harry", "Ron", "Hermione", "Neville"];

  function testParams(a, b, c, d){
    console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d},`)
  }
  people.forEach(testParams);

// with better names
  people.forEach(function (element, i, arr) {
  console.log(`person: ${element}, index: ${i}, array: ${arr}`);
}); */

/* const letterArray = ["a", "w", "q", "b", "c", "u"];

let vowelArray;

function isVowel(letter) {
    const lowerCasedLetter = letter.toLowerCase();
  if (
    lowerCasedLetter == "a" ||
    lowerCasedLetter == "e" ||
    lowerCasedLetter == "i" ||
    lowerCasedLetter == "o" ||
    lowerCasedLetter == "u"
  ) {
    return true;
  }  {
    return false;
  }
}

console.log(letterArray);

vowelArray = letterArray.filter(isVowel);

console.log(vowelArray); */
const animalArray = [
  {
    name: "Peter",
    type: "dog",
  },
  {
    name: "klaus",
    type: "dog",
  },
  {
    name: "Jonas",
    type: "cat",
  },
  { name: "Freddie",
   type: "dog" },
];

let filteredArray;

// hvis det ikke er jonas og cat så er det falsk - hvis det er jonas og cat kom tilbage true
function isJonasTheCat (animal) {
    if (animal.name !== "jonas" && animal.type !== "cat"){
        return false;
    }
    return true;
}

//console.log(isJonasTheCat(animalArray));
console.log("animalArray", animalArray);
filteredArray = animalArray.filter(isJonasTheCat);
console.log("filteredArray", filteredArray);

function all(){
return true;
}

filteredArray = animalArray.filter(all);
console.log(filteredArray );