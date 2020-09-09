// Additional Topics

// Spread Operator

// Exercise 1

// function combineArrays(arrOne, arrTwo) {
//   return arrOne.concat(arrTwo)
// }
//
// console.log(combineArrays([2, 4, 2], [4, 6, 11]))

const combineArrays = (array1, array2) => {
  let combinedArray = [...array1, ...array2]
  return combinedArray;
}

var array1 = [2, 4, 2]
var array2 = [4, 6, 11]
// console.log(combineArrays(array1, array2));

// Exercise 2

// function combineAndFilterOdd(arrOne, arrTwo, arrThree){
//   return arrOne.concat(arrTwo).concat(arrThree).filter(num => num % 2 !== 0)
// }
//
// console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))

var arr1 = [3, 2, 5]
var arr2 = [5, 8, 7]
var arr3 = [4, 5, 6]

const combineAndFilter = (arr1, arr2, arr3) => {
  let concattedArray = [...arr1, ...arr2, ...arr3]
  return concattedArray.filter(num => num % 2 !== 0);
}

// console.log(combineAndFilter(arr1, arr2, arr3));


// Template Literals

var meaningOfLife = 42

// Write the code that prints 'The answer to the meaning of life is 42'.

// console.log(`The answer to the meaning of life is ${meaningOfLife}`);

// Refactor the .forEach method to use string interpolation.

/* var zooAnimals = ['giraffe', 'fennec fox', 'elephant']

zooAnimals.forEach(animal =>  console.log('The zoo has a' + animal))*/

var zooAnimals = ['giraffe', 'fennec fox', 'elephant']

// zooAnimals.forEach(animal =>  console.log(`The zoo has a ${animal}`));

// Write the code that prints 'black bean burger with cheddar' to the screen.

var burger = {
    cheese: 'cheddar',
    patty: 'black bean',
    onions: false,
}

// console.log(`${burger.patty} burger with ${burger.cheese}`);

// Write a function takes a burger object and returns a descriptive strin

var beanBurger = {
    cheese: 'cheddar',
    patty: 'black bean',
    onions: false,
}

var turkeyBurger = {
    cheese: 'swiss',
    patty: 'turkey',
    onions: true,
}

const burgerDescription = (array) => {
  if(array.onions === true){
    return `${array.patty} burger with ${array.cheese} and onions`
  }
  else {
    return `${array.patty} burger with ${array.cheese} and no onions`
  }
}

// console.log(burgerDescription(beanBurger))
// console.log(burgerDescription(turkeyBurger))

// Ternary Operator

// Create a function that determines if a user is old enough to vote (age 18 or older).

const votingAge = (age) => {
  return age >= 18 ? `Go Vote!` : `Not Yet!`;
}

// console.log(votingAge(18))
// console.log(votingAge(12))

// Create a function that takes in an array of numbers and determines if the number is odd or even.
var numArray = [3, 2, 5]

const oddOrEven = (array) => {
  return array.map(value => value % 2 === 0 ? "Even" : "Odd");
}

console.log(oddOrEven(numArray));
