//Challenge 1

const evenOdd = (int) => {
  if (int % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOdd(16));


// Challenge 2

const findOpposite = (int) => {
  return -int;
}

console.log(findOpposite(22));


// Challenge 3

const palindrome = (word) => {
  const reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("madam"));
