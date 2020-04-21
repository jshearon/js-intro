// Challenge 1

const expense = {
  id: 1,
  location: 'Baja Burrito',
  date: '11/11/20',
  price: 1324,
  purpose: 'Lunch',
  code: '100AB'
}

// Challenge
// write a function that takes in an expense object
// if the price (in pennies) is greater than 1500
// add a key of approved with a value of false
// otherwise add a key of approved with a value of true
// return the expense object

const isApproved = (obj) => {
 if (obj.price > 1500) {
   obj.approved = false;
 } else {
  obj.approved = true;
 }
  return obj;
}

console.log(isApproved(expense));
