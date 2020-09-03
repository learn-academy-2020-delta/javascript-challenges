// Use .map() or .filter() to complete the following exercises:

// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]
const multiplyBy10 = (arr) => {
    return arr.map(value => value * 10)
}
// console.log(multiplyBy10(arr1));

// Expected output --> [30, 90, 150, 40, 100]

// Write a function that takes in an array and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
const oddNum = (arr) => {
    return arr.filter(value => value % 2 !== 0)
}
// console.log(oddNum(arr2));

// Expected output --> [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method

var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
const onlyLetters = (arr) => {
let newString = arr.filter (value => typeof value === "string")
return newString.join("")
}
console.log(onlyLetters(comboArr));



// Create a function that takes in a string and returns a new string with all the vowels removed.

var str = "javascript is awesome"
const noVowels = (string) => {
let newArray = string.split("")
let filteredArray = newArray.filter(value => {
return value !== "a" && value !== "e" && value !=="i" && value !=="o" && value !=="u" && value !== "y"
})
let newString = filteredArray.join("")
  return newString
}
console.log(noVowels(str));
//
// //
// Expected output --> "jvscrpt s wsm"
//



// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
//
// var arr2 = [7, 8, 2, 1, 5, 4]
//
// Expected output -> [3, 7, 10, 5, 4, 8, 2, 1]
