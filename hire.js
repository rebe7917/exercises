function hire (person){
 person.hired = true;
    
}

function fire(person) {
  person.hired = false;
}
function fireOrHire(action, person) {
 action(person);
}


const person3 = {
firstName: "harry",
lastName: "Potter",
hired: false
}

const person4 = {
  firstName: "Fred",
  lastName: "Weasly",
  hired: false,
};

fireOrHire(hire, person4);
fireOrHire(fire, person3);

console.log()