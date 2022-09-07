//getNameParts (fullname) EXERCISE
const fullName = "albus percival wulfric brian dumbledore";
function capitalize(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
}
getNameParts(fullName);
function getNameParts() {
  const firstName = capitalize(fullName.substring(0, fullName.indexOf(" ")));

  let middleName;
  if (fullName.indexOf(" ") !== fullName.lastIndexOf(" ")) {
    middleName = fullName.substring(
      fullName.indexOf(" ") + 1,
      fullName.lastIndexOf(" ")
    );
    const middleNameList = middleName.split(" ");
    console.log("middlenamelist first:", middleNameList);
    if (middleNameList.length > 1) {
      middleNameList.forEach((name, i, arr) => {
        arr[i] = capitalize(name);
      });
      console.log("middlenameList last:", middleNameList);
      middleName = middleNameList.join(" ");
    } else {
      middleName = capitalize(middleName);
    }
  }
  const lastName = capitalize(
    fullName.substring(fullName.lastIndexOf(" ") + 1)
  );
  return { firstName, middleName, lastName };
}

console.log("getNameParts test 1: ", getNameParts("daNiel NielsEn"));
console.log("getNameParts test 2: ", getNameParts("daNiel BERnhard NielsEn"));
console.log(
  "getNameParts test 3: ",
  getNameParts("Albus percival wulfric brian dumbledore")
);
