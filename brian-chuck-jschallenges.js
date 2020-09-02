// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }
//
// for (let i = 1; i <= 20; i++) {
//   console.log(i * 3);
// }
//
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   } else {
//     console.log("ODD");
//   }
// }
// var nums = [3, 57, -9, 20, 67]
// var highNum = 0
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > highNum) {
//     highNum = nums[i]
//   }
// }
//
// console.log(highNum);
//
// var nums = [3, 57, -9, 20, 67]
// var lowNum = 0
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] < lowNum) {
//     lowNum = nums[i]
//   }
// }
//
// console.log(lowNum);
// var nums = [3, 57, -9, 20, 67]
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i] % 2);
// }

// var myString = "learn student";
// var count = 0;
// for (let i = 0; i < myString.length; i++) {
//   if (myString[i] === "e") {
//     count++;
//   }
// }
// // console.log(count);
//
// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " is even!");
//   } else {
//     console.log(i + " is odd!");
//   }
// }
//
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else {
//     console.log(i);
//   }
// }
// const marco = () => {
//   return "Polo!"
// }
//
// console.log(marco());
// const greeting = (name) => {
//   return `Welcome ${name}!`
// }
//
// console.log(greeting("Chuck"));
//
// const oddOrEven = (number) => {
//   if (number % 2 === 0) {
//     return "Even!"
//   } else {
//     return "Odd!"
//   }
// }
//
// // console.log(oddOrEven(21));
// const triple = (num) => {
//   return num * 3
// }
//
// console.log(triple(6));

// const multiply = (num1, num2) => {
//   return num1 * num2;
// }
// console.log(multiply(6, 3));

// const divisibleBy = (num1, num2) => {
//   if (num1 % num2 === 0) {
//     return `${num1} is evenly divisible by ${num2}.`
//   } else {
//     return "Not divisible!"
//   }
// }
// console.log(divisibleBy(4, 3));
//
// //Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score
// const assignGrade = (number) => {
//   if (number <= 100 && number >= 0){
//     if (number >= 90) {
//       return "A"
//     } else if (number >= 80) {
//       return "B"
//     } else if (number >= 70) {
//       return "C"
//     } else if (number >= 60) {
//       return "D"
//     } else {
//       return "F"
//     }
//   } else {
//     return "Grade not valid!"
//   }
// }
// console.log(assignGrade(105));
// console.log(assignGrade(95));
// console.log(assignGrade(85));
// console.log(assignGrade(75));
// console.log(assignGrade(65));
// console.log(assignGrade(55));
// console.log(assignGrade(-5));

// Write a function named greaterNum that takes 2 arguments
// const greaterNum = (num1, num2) => {
//   // returns whichever number is the greater (higher) number
//   if (num1 > num2) {
//     return num1
//   } else if(num2 > num1) {
//     return num2
//   } else {
//     return "Numbers are equal."
//   }
// }
//
// console.log(greaterNum(2, 3));
// console.log(greaterNum(4, 1));
// console.log(greaterNum(23, 23));

// //Write a function helloWorld, takes a language code
// const helloWorld = (langCode) => {
// //verify language code is a two letter valid myString
//   if (typeof langCode === "string" && langCode.length === 2) {
// // Verify language is supported, it = Italian, sp = Spanish, fr = French
//       if (langCode === "it") {
//         return "Ciao mondo!"
//       } else if (langCode === "sp") {
//         return "Hola mundo!"
//       } else if (langCode === "fr") {
//         return "Bonjour le monde!"
//       } else {
//         return "Hello world!"
//       }
//   } else {
//     return "Invalid language code."
//   }
// }
//
// console.log(helloWorld("it"));
// console.log(helloWorld("sp"));
// console.log(helloWorld("fr"));
// console.log(helloWorld("en"));
// console.log(helloWorld("zmb"));

// var testArr1 = [3, 9, 15, 4, 10];
// // write a function that takes in an array
// const multiplyByThree = (array) => {
//   var newArray = [];
//   // loop through the array
//   for (let i = 0; i < array.length; i++) {
//     // multiply all number in array by 3
//     newArray[i] = array[i] * 3;
//   }
//   // return an array of the new numbers
//   return newArray;
// }
//
// console.log(multiplyByThree(testArr1));


// // return a new array with those odd Numbers
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13];
// // write a funtion that takes an array
// const findOdds = (array) => {
//   var oddArray = [];
//   for (let i = 0; i < array.length; i++) {
//     // identifiy any odd numbers in the array
//     if ((array[i] % 2 === 1) || (array[i] % 2 === -1)) {
//       oddArray.push(array[i]);
//     }
//   }
//   return oddArray;
// }
//
// console.log(findOdds(testArr2));

// write a function that takes a string
// capitalize every letter in the string
// return as a new string
// var myMessage = "Hello There";
//
// const capMessage = (message) => {
//   return message.toUpperCase();
// }
//
// console.log(capMessage(myMessage));


// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"];
// // write a function that takes numbers and letters and booleans
// const getLetters = (array) => {
//   var newString = "";
//   for (let i = 0; i < array.length; i++) {
//     // seperate out letters
//     if (typeof array[i] === "string") {
//       newString = newString + array[i];
//     }
//   }
//   // return a string of those letters
//   return newString;
// }
// console.log(getLetters(comboArr));

// var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6];
// // write a function that takes an array
// const bigNumber = (array) => {
//   var biggestNumber = array[0];
//   for (let i = 0; i < array.length; i++) {
//     // identify the highest number in the array
//     if (array[i] > biggestNumber) {
//       biggestNumber = array[i];
//     }
//   }
//   // return the number
//   return biggestNumber;
// }
//
// console.log(bigNumber(highestNumber));
