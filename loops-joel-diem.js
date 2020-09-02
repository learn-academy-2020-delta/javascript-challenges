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

//const assignedGrade that takes score as an argument
const assignedGrade = (score) => {
  //returns the letter grade for the score
  if (score >= 90 && score <= 100){
    return `Your score of ${ score } earned you an A!`;
  } else if (score >= 80 && score <= 89){
    return `Your score of ${ score } earned you an B!`;
  } else if (score >= 70 && score <= 79){
    return `Your score of ${ score } earned you an C!`;
  } else if (score >= 60 && score <= 69){
    return `Your score of ${ score } earned you an D!`;
  } else if (score <= 59){
    return `Your score of ${ score } earned you an F!`;
  } else {
    return "Your test hasn't been graded";
  }
}
console.log(assignedGrade(60));
