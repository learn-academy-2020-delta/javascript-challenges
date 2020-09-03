// Functions - Loops - Arrays


// Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
var testArr1 = [3, 9, 15, 4, 10]
const triple = (array) => {
  let newArr = []
  for(let i = 0; i < array.length; i++){
    newArr.push(array[i] * 3);
  }
  return newArr
}

console.log(triple(testArr1));
console.log("Expected output --> [9, 27, 45, 12, 30]\n")

// Write a function that takes in an array and returns a new array with only odd numbers.
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
const onlyOdd = (array) => {
  let oddNums = []
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
      oddNums.push(array[i]);
    }
  }
  return oddNums
}

console.log(onlyOdd(testArr2));
console.log("Expected output --> [-7, 3, 5, 13]\n")

// Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
var myMessage = "Hello There"
const toUpper = (string) => {
  return string.toUpperCase()
}

console.log(toUpper(myMessage));
console.log("Expected output --> 'HELLO THERE'\n");

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

//make a var with an empty string

const makeString = (array) => {
  let newWord = ""
  for(let i = 0; i < array.length; i++) {
    if(typeof array[i] === "string"){
      newWord += array[i]
    }
  }
  return newWord
}
console.log(makeString(comboArr));
console.log("Expected output --> 'nicework'\n")

// Create a function that returns the highest number
var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

const biggestNumber = (array) => {
  for(let i = 0; i < array.length; i++){
    if(array[i] === Math.max(...array)){
      return array[i];
    }
  }
}

console.log(biggestNumber(highestNumber));
console.log("Expected output --> 67\n")

// Create a function that returns the lowest number
var lowestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

const smallestNumber = (array) => {
  for(let i = 0; i < array.length; i++){
    if(array[i] === Math.min(...array)){
      return array[i];
    }
  }
}

console.log(smallestNumber(lowestNumber));
console.log("Expected output --> -9\n");

// Create a function that calculates the sum
var addThese1 = [1, 2, 3, 4]

const sum = (array) => {
  let total = 0
  for(let i = 0; i < array.length; i++){
    total += array[i];
  }
  return total
}

console.log(sum(addThese1));
console.log("Expected output --> 10\n")

//addThese 2
var addThese2 = []

var initialValue = 0
const reducer = (acc, item) => {
  return acc + item
}

console.log(addThese2.reduce(reducer, initialValue));
console.log("Expected output --> 0\n")

// Create a function that calculates the mean value
var meanChecker = [1, 2, 3]

const meanCheck = (array) => {
  let totalSum = 0
  for(let i = 0; i < array.length; i++) {
    totalSum += array[i];
  }
  return totalSum / array.length
}

console.log(meanCheck(meanChecker));
console.log("Expected output --> 2\n")

// Create a function that finds the index of the highest number
var indexHighestNumber = [1, 4, 2]
const indexOfHighest = (array) => {
  for(let i = 0; i < indexHighestNumber.length; i++){
    if(indexHighestNumber[i] === Math.max(...indexHighestNumber)){
      return indexHighestNumber.indexOf(indexHighestNumber[i])
    }
  }
}

console.log(indexOfHighest(indexHighestNumber));
console.log("Expected output --> 1\n");

// Create a function that takes in a string and returns only the middle value
var testString1 = "hello"

const middleOf = (string) => {
  var position;
  var length;
  if(string.length % 2 === 1) {
    position = string.length / 2;
    length = 1;
  }
  else {
    position = string.length / 2 - 1;
    length = 2;
  }
  return string.substring(position, position + length)
}

console.log(middleOf(testString1));
console.log("Expected output --> 'l'\n")


var testString2 = "boogeyman"
console.log(middleOf(testString2));
console.log("Expected output --> 'e'")
