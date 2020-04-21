//const chicken = 'chicken';
//console.log(`processed ${chicken}`);

//const cow = 'cow';
//console.log(`processed ${cow}`);

//const pig = 'pig';
//console.log(`processed ${pig}`);

//const tuna = 'tuna';
//console.log(`processed ${tuna}`);

const nuggatizer = (animal) => {
  return `processed ${animal}`;
}

console.log(nuggatizer('chicken'));
console.log(nuggatizer('cow'));
console.log(nuggatizer('pig'));
console.log(nuggatizer('tuna'));

const dogBreed = (breed) => {
  return `My favorite dog breed is ${breed.toUpperCase()}`;
}

console.log(dogBreed('lab'));

//Challenge 1
//Write a function that takes any number and returns itself plus 42

const plus42 = (number) => {
  return number + 42;
}

console.log(plus42(42));

//Challenge 2
//Write a function that takes the year you were born and figures out how old you will be in 2099
const agein2099 = (yourAge) => {
  return 2099 - yourAge;
}

console.log(agein2099(1977));
