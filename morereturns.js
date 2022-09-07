"use strict";

function moreReturns(){
  const a = 23;
  const b = "hi";
  const c = true;

  //man kan ikke retunere flere values til en function
  //eks. (viser kun den sidste, true)
  //return a, b, c;

  //should be written this way
  return {a,b,c}
}
console.log("test:", moreReturns());

