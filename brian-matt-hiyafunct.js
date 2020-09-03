//Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
/*var arr1 = [3, 9, 15, 4, 10]
//Declare a function that cycles through the array
const times10 = (arr) => {
// return the values of the array multiplied by 10
    return arr.map(value => value * 10)
};
console.log(times10(arr1)); */

//Write a function that takes in an array and returns a new array with only odd numbers.
/*var arr2 = [2, 7, 3, 5, 8, 10, 13]
//Declare a function that cycles through the array
const oddNums = (arr) => {
    //Identify and Return the values that are odd
    return arr.filter(value => value % 2 === 1)
};
console.log(oddNums(arr2)); */

//Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
/*var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
//Declare a function that will cycle through the array
const letterString = (arr) => {
    //Extract letters only
    return arr.filter(value => typeof value === "string").join("")
    }
    //return a string of the letters in the new array
    console.log(letterString(comboArr));*/

//Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"
// //Convert string into an array
// //Declare a function that cycles through an array
// const noVowels = (string) => {
//   var newArr = string.split("")
//   //Identify and return the values that are not vowels
//   return newArr.filter(value => {
//     return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"}).join("")
// }
// console.log(noVowels(str));
// //Output new array as string

//Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// //Write a function that takes two arrays
// const newArray = (arr1, arr2) => {
//   //Join two arrays into one
//   return arr1.concat(arr2).filter((value, index) => {
//     //Cycle through new array to remove duplicate values
//     return arr1.concat(arr2).indexOf(value) === index
//   })
// }
// //Return the new array in console
// console.log(newArray(arr1, arr2));
