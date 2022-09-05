let person1 = {
    firstName: "peter",
    age: 33,
    student: false
}
console.log(person1.lastName);
person1.lastName = "tolstrup";
console.log(person1.lastName);
/* person1.lastName = undefined;
console.log(person1.lastName, person1.lastName); */
delete person1.lastName;
console.log(person1.lastName)


