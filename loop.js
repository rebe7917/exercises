"use strict";
// counts 0 - 9
/* let counter = 0;
for (counter = 0; counter < 10; counter++) {
  console.log(counter);
}
console.log(`after the loop, counter is ${counter}`); */
/* 

// counts 1 - 10
let counter = 1;
for (counter = 1; counter < 11; counter++) {
  console.log(counter);
}
console.log(`after the loop, counter is ${counter}`); */

// counts 10 - 0
/* let counter = 10;
for (counter = 10; counter > -1; counter--) {
  console.log(counter);
}
console.log(`after the loop, counter is ${counter}`); */
 
// 1 -19 only odd numbers
/* let counter = 1;
for (counter = 1; counter <= 19 ; counter += 2) {
  console.log(counter);
}
console.log(`after the loop, counter is ${counter}`); 
 */
// 1 -16777216  - doubling  each time
/* let counter = 1
for (counter = 1; counter < 16777216; counter = counter * 2) {
  console.log(counter);
}
console.log(`after the loop, counter is ${counter}`); */

// + 3
/* let counter = 111;
for (counter = 111; counter < 138; counter = counter + 3) {
  console.log(counter);
}
console.log(`after the loop, counter is ${counter}`); */

// tæller ned fra 100, hver 10'ende
let counter = 100;
for (counter = 100; counter > -1; counter = counter - 10) {
  console.log(counter);
}
console.log(`after the loop, counter is ${counter}`);

//model = the data
const model = ["Peter", "Poul", "Mary"]

addNameToModel("kim")
//view (console.log)
console.log(model);
//controller
function addNameToModel (name){
model.push(name);

}