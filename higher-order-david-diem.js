//HIGHER ORDER CHALLENGES

//#1
// var arr1 = [3, 9, 15, 4, 10]
// const multiplyBy10 = (array) => {
//     // write a function that takes in argument array
//     return array.map(value => {
//         return value * 10
//     })
//     // returns new array with all numbers * 10
// }
// console.log("This function multiplies by 10")
// console.log(multiplyBy10(arr1))

// the same function as above, but not as good practice because you're creating a new unnecessasry variable that takes up memory
// var arr1 = [3, 9, 15, 4, 10]
// const multiplyBy10 = (array) => {
//     // write a function that takes in argument array
//     let newArray = array.map(value => {
//         return value * 10
//     })
//     // returns new array with all numbers * 10
//     return newArray
// }
// console.log(multiplyBy10(arr1))


//#2
//write a function that takes in argument array
// const oddFilter = (array) =>{
//     return array.filter(value => value%2 === 1)
// }
// //returns array with only odd numbers
// var arr2 = [2, 7, 3, 5, 8, 10, 13]
// console.log("This function filters for odd numbers only")
// console.log(oddFilter(arr2))


//#3
//write a function that takes in argumenet array of letters and numbers
// const stringMaker = (array) => {
//     return array.filter(value =>{
//         //typeof to find string only
//         return typeof value === "string"
//         //array method join
//     }).join("")
// }
// //returns a string with only letters
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"] 
// console.log(stringMaker(comboArr))


//STRETCH CHALLENGES

//#1
//Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"
// const noVowel = (string) => {
//     //splits string, filters out vowels, joins remaining consonants back into a string.
//     return string.split("").filter(value => {
//         return value !== "a" && value !== "e" &&  value !=="i" &&  value !=="o" && value !== "u"
//     }).join("")
// }
// console.log(noVowel(str))
//Expected output --> "jvscrpt s wsm"




//#2
//Create a function that takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]
const noRepeats = (array1, array2) => {
    return array1.concat(array2).filter((value, index) => {
      return array1.concat(array2).indexOf(value) === index
    })
  }
console.log(noRepeats(arr1, arr2));
//Expected output -> [3, 7, 10, 5, 4, 8, 2, 1]