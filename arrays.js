// Challenge 1
//write a function that takes an array and an index and prints out value of that index

const myArray = ["Luke", "Obi-Wan", "Darth Vader", "Han"];

const arrayIndex = (array, index) => {
  return array[index];
}

console.log(arrayIndex(myArray, 3));

// Challenge 2
//write a function that takes an array of something and tells you if the name Luna is in it
const myArray2 = ["Lisa", "Homer", "Marge", "Bart"];

const hasName = (array, name) => {
  return array.includes(name);
}

console.log(hasName(myArray2, "Luna"));
