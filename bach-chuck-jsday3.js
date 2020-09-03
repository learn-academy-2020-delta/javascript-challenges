// var arr1 = [3, 9, 15, 4, 10];
// // write a function that takes in an array
// const mult10 = (array) => {
//   // multiply all numbers by 10
//   // return the new array
//   return array.map(value => value * 10)
// }
//
// console.log(mult10(arr1));

// var arr2 = [2, 7, 3, 5, 8, 10, 13];
// // Write a function that takes in an array
// const findOdd = (array) => {
//   // find only odd numbers.
//   // return the new array
//   return array.filter(value => {
//     return (value % 2 === 1)
//   })
// }
//
// console.log(findOdd(arr2));


var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
//Write a function that takes in an array of numbers and letters
const findLetters = (array) => {
    //filter through array
    var newArray = array.filter(value => {
        //use the typeof method to find only strings
        return typeof value === "string"
    })
    return newArray.join("")
//returns a string with only the letters. 
}
//write function to build word from letters
const buildWord = (array) => {
    let newString = ""
    let newArray = []
    newArray = findLetters(array)
    console.log(newArray)
    return newString = newArray.join("")
}
console.log(findLetters(comboArr))
//console.log(buildWord(comboArr))

