// Logging values with for loops
// for(let i = 0; i < 20; i++) {
//     console.log(i+1);
// }
//
// for(let i = 0; i < 20; i++) {
//     console.log((i+1) * 3);
// }
//
// for(let i = 0; i < 20; i++) {
//     if((i+1) % 2 === 0) {
//         console.log(i+1);
//     } else {
//         console.log("ODD")
//     }
// }

// Looping over an array
// var nums = [3, 57, -9, 20, 67];
// var biggerNum = nums [0];
// for (let i = 0; i < nums.length; i++)
// {
//   if (nums[i] > biggerNum){
//     biggerNum = nums[i];
//   }
// }
// console.log(biggerNum);

// for (let i = 0; i < nums.length; i++)
// {
//   if (nums[i] < biggerNum){
//     biggerNum = nums[i];
//   }
// }
// console.log(biggerNum);

// for (let i = 0; i < nums.length; i++)
// {
//   console.log(nums[i] % 2);
// }

//Looping over a string
// var myString = "learn student";
// var numE = 0;
// for(let i = 0; i < myString.length; i++) {
//     if(myString.charAt(i) === "e")
//     numE++;
// }
// console.log(numE);

//Stretch Challenge Even or Odd
// for (i = 0; i < 15 ; i++){
//   if (i % 2 === 0){
//     console.log(i + " is even"); // console.log(`${ 1 } is even`);
//   } else {
//     console.log(i + " is odd");  // console.log(`${ 1 } is odd`);
//   }
// }

//Stretch Challenge Fizz Buzz
// <<<<<<< HEAD
// for (i = 1; i < 101 ; i++){
//   if ((i % 3 === 0) && (i % 5 === 0)){
//     console.log("fizzbuzz");
//   } else if(i % 3 === 0){
//     console.log("fizz");
//   } else if (i % 5 === 0){
//     console.log("buzz");
//   } else{
//     console.log(i);
//   }
// }

//Function Challenges
// declare const function called marco
// const marco = () => {
//     // returns polo
//     return "polo";
// }
// console.log(marco());

// declare const function named greeting
// takes name as an argument
// const greeting = (name) => {
// // returns the string that says "welcome persons name"
//     return `Welcome ${ name }`;
// }
// console.log(greeting("Joel"));

// declare const function named "oddOrEven" with a number as an arg
// const oddOrEven = (number) => {
//     // returns wether the number is odd or even
//     if(number % 2 === 0) {
//         return "Even"
//     } else if(number % 2 === 1) {
//         return "Odd"
//     } else {
//         return "Please input number"
//     }
// }

// const funct named triple that takes a number as an argument
// const triple = (number) =>{
//   // returns the result of that number multplied by 3
// return (number * 3);
// }
// console.log(triple(7));

//const multply that takes num1, num2 as arguments
// const multiply = (num1, num2) => {
// //returns the result of num1 * num2
//   return (num1 * num2);
// }
// console.log(multiply(3,8));

//const divisibleBy that takes arguments num1, num2
// const divisibleBy = (num1, num2) =>{
// // returns whether num1 is evenly divisible by num2
//   if (typeof num1 === "number" && typeof num2 === "number"){
//     if (num1 % num2 === 0){
//       return `${ num1 } is evenly divisible by ${ num2 }`;
//     } else if (num1 % num2 !== 0){
//       return `${ num1 } is NOT evenly divisible by ${ num2 }`;
//   }
//   } else {
//     return "There has been an input error";
//   }
// }
// console.log(divisibleBy(10, 5));

// //const assignedGrade that takes score as an argument
// const assignedGrade = (score) => {
//   //returns the letter grade for the score
//   if (score >= 90 && score <= 100){
//     return `Your score of ${ score } earned you an A!`;
//   } else if (score >= 80 && score <= 89){
//     return `Your score of ${ score } earned you an B!`;
//   } else if (score >= 70 && score <= 79){
//     return `Your score of ${ score } earned you an C!`;
//   } else if (score >= 60 && score <= 69){
//     return `Your score of ${ score } earned you an D!`;
//   } else if (score <= 59){
//     return `Your score of ${ score } earned you an F!`;
//   } else {
//     return "Your test hasn't been graded";
//   }
// }
// console.log(assignedGrade(60));

// function loops and array challenges
// var testArr1 = [3, 9, 15, 4, 10]
// // const myArray takes in an array
// const newArray = (array) => {
// // returns a new array all mulitplied by 3
//     let arrayTimes3 = [];
//     for(let i = 0; i < array.length; i++) {
//         arrayTimes3.push((array[i]) * 3);
//     }
//     return arrayTimes3;
// }
// console.log(newArray(testArr1));

// const function oddNums with argument array
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
//
// const oddNums = (array) =>{
//   // returns a new array with only odd numbers
//   let newArray = [];
//   for (let i = 0; i < array.length; i++){
//     if (array[i] % 2 !== 0){
//       newArray.push(array[i]);
//   }
// }
//   return newArray;
// }
// console.log(oddNums(testArr2));

// const function with argument string
// const capitalizer = (string) =>{
//   let capString = string.toUpperCase();
//   return capString;
// }
// // returns new string with every letter capitalized
// var myMessage = "Hello There";
// console.log(capitalizer(myMessage));

// const function that takes in argument of array of numbers/letters
// const lettersOnly = (array) => {
//   // returns a string with only letters
//   let newArray = [];
//   for (i = 0; i < array.length; i++){
//     // typeof
//     if (typeof array[i] === "string"){
//       newArray.push(array[i]);
//     }
//   }
//   let sentence = newArray.join("");
//   return sentence;
// }

// var comboArr = [7 , "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// console.log(lettersOnly(comboArr));

// create a function
// const highestNumFinder = (array) => {
//   let biggerNum = array[0];
//   for (let i = 0; i < array.length; i++){
//     if (array[i] > biggerNum){
//       biggerNum = array[i];
//     }
//   }
//   return biggerNum;
// }
// // returns highest number; will want to define with array[i]
// var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]
// console.log(highestNumFinder(highestNumber));

// create a funct
// const lowestNumFinder = (array) => {
//   let smallerNum = array[0];
//   for (let i = 0; i < array.length; i++){
//     if (array[i] < smallerNum ){
//       smallerNum = array[i];
//     }
//   }
//   // returns the lowest number
//   return smallerNum;
// }
// var lowestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]
// console.log(lowestNumFinder(lowestNumber));

// create a function that takes an argument array
//   const sumFinder = (array) => {
//     let arraySum = 0;
//     for (let i = 0; i < array.length; i++){
//       arraySum += array[i];
//     }
//     // returns sum
//     return arraySum;
//   }
// var addThese1 = [1, 2, 3, 4];
// var addThese2 = [];
// console.log(sumFinder(addThese1));
// console.log(sumFinder(addThese2));

// const function
// const meanFinder = (array) =>{
//   let sumValue = 0;
//   let meanValue = 0;
//   for (let i = 0; i < array.length; i++){
//     sumValue += array[i]
//   }
// // divide array[i]
// meanValue = sumValue/array.length;
// // returns mean value
// return meanValue;
// }
// var meanChecker = [1, 2, 3]
// console.log(meanFinder(meanChecker))

// create function with argument array
// const indexOfHighestNumFinder = (array) => {
//   let biggerNum = array[0]
//   let indexOfHighNum = 0
//   for (i = 0; i < array.length; i++){
//     if (array[i] > biggerNum) {
//       biggerNum = array[i]
//       indexOfHighNum = i
//     }
//   }
// // returns index of highest number
// return indexOfHighNum
// }
// var indexHighestNumber = [1, 4, 2]
// console.log(indexOfHighestNumFinder(indexHighestNumber))

// create a function with argument string
// const middleLetterFinder = (string) => {
//   let midIndex = 0; 
//   //length/2 and round value up for the middle value
//   midIndex = Math.round((string.length/2) - 1)
//   // returns only middle value
//   return string.charAt(midIndex)
// }
// var testString1 = "hello"
// var testString2 = "boogeyman"
// console.log(middleLetterFinder(testString1))
// console.log(middleLetterFinder(testString2))

// Clean Function: Create a function that filters false, null, 0 and blank values from an array. BELOW SOLUTION DOESNT WORK YET
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

// const dataFilter = (array) => {
//   let trimmedArray = array.map(value => {
//     if(typeof value === "string"){
//       return value.trim()
//     }
//     else{
//       return value
//     }
//   })
//   return array.filter(value => value.trim())
// }

// console.log(dataFilter(filterArrayValues))
// // Expected output --> [58, "abcd", true]