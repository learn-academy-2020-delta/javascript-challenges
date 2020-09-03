//Loops challenges

//#1
// for (var i = 0; i < 21; i++) {
//   // array[i]
//   console.log(i*3);
// }

// for (var i = 0; i < 21; i++) {
//   // array[i]
//   if (i % 2 === 0) {
//     console.log(i);
//   }else {
//     console.log("ODD");
//   }
// }


//#2
// var array = [3, 57, -9, 20, 67]
// var compareNum = 0
// for(let i = 0; i < array.length; i++) {
//   if(array[i] > compareNum){
//     compareNum = array[i]
//   }
// }
// console.log(compareNum);

// var array = [3, 57, -9, 20, 67]
// var compareNum = 0
// for(let i = 0; i < array.length; i++) {
//   if(array[i] < compareNum){
//     compareNum = array[i]
//   }
// }
// console.log(compareNum);

// var array = [3, 57, -9, 20, 67]
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i] % 2);
// }

// //#3
// //.split makes each letter into it's own value
// var myString = "learn student"
// var myArray = myString.split("")
// var numbE = 0

// console.log(myArray);

// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] === "e") {
//     numbE++
//   }
// //3 variables, 1 makes the string, 2 makes it into and array and turns each letter into and index making into it's own value, 3 start at 0 (1st index)

// //++ moves computer to check each index by 1
// }console.log(numbE);


//Functions
//#1
// const marco = () => {
//   return "polo"
// }
// console.log(marco());

//#2
// const greeting = (name) => {
//   return `welcome ${name}!`
// }
// console.log(greeting("nathan"));

//#3
// const oddOrEven = (num) => {
//   if(num % 2 === 0){
//     return `Number is even`
//   }
//   else {
//     return `Number is odd`
//   }
// }
// console.log(oddOrEven(2));

//#4
// const triple = (num) => {
//   return num * 3
// }
// console.log(triple(3))

//#5
//
// const multiply =(num1, num2) => {
//   return num1 * num2
//
// }
// console.log(multiply(2,10));

//#6

//
// const divisibleBy = (num1, num2) => {
//   if(num1 % 5 === 0 && num2 === 5 && num1 % num2 === 0) {
//     return "10 is evenly divisible by 5"
//   }else {
//     return "Not evenly divisible by 5"
//   }
// }
// console.log(divisibleBy(10, 5));

//#7

// const assignGrade = (score) => {
//   if(score >= 90 && score <= 100) {
//     return "You got an A!"
// }else if (score >= 80 && score <= 89) {
//     return "You got a B!"
// }else if (score >= 70 && score <= 79) {
//     return "You got a C!"
// }else if (score >= 60 && score <= 69) {
//     return "You got a D!"
// }else {
//   return "Ouch..."
// }
// }

// console.log(assignGrade(75));


//FUNCTIONS, LOOPS, ARRAYS
//#1
// var testArr1 = [3, 9, 15, 4, 10]
// const multiplier = (array) => {
//   let arrayMult = []
//   for(let i = 0; i < array.length; i++){
//     arrayMult.push(array[i] * 3) 
//   }
//   return arrayMult
// }
// console.log(multiplier(testArr1));

//#2
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// const noEven = (array) => {
//   let arrayOdd = []
//   for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 !== 0){
//       arrayOdd.push(array[i])
//     }
//   }
//   return arrayOdd
// }
// console.log(noEven(testArr2));

//#3
// var myMessage = "Hello There"
// const upperCase = (string) => {
//   let newString = string.toUpperCase()
//     return newString
// }
// console.log(upperCase(myMessage));

//#4
// //takes in array of numbers and letters and returns a string with only letters.
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// const charOnly = (array) => {
//   for(let i = 0; i < array.length; i++){
//     //checks to see if index is a string or not
//     if(typeof array[i] !== "string"){
//       //removes any value that is not type string (what we are getting rid of, how many places to the right we are deleting)
//       array.splice(i, 1)
//     }
//   }
//   return array
// }
// console.log(charOnly(comboArr).join(""));

// //#5
// var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]
// var check = 0
// //function that checks to find the hightest number in array.
// const highest = (num) => {
//   for(let i = 0; i < highestNumber.length; i++){
//     if(highestNumber[i] > check){
//       check = highestNumber[i]
//     }
//   }
//   return check
// }
// console.log(highest(highestNumber));

//#6
// var lowestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]
// var check = 0
// //function that checks to find the lowest number in array.
// const lowest = (num) => {
//   for(let i = 0; i < lowestNumber.length; i++){
//     if(lowestNumber[i] < check){
//       check = lowestNumber[i]
//     }
//   }
//   return check
// }
// console.log(lowest(lowestNumber));

//#7
// var addThese1 = [1, 2, 3, 4]
// var addThese2 = []
// var total = 0
// const sum = (array) => {
//   for(let i = 0; i < array.length; i++){
//     total = total + array[i]  
//   }
//   return total
// }
// //not too sure how to reset return value...
// console.log(sum(addThese2));
// console.log(sum(addThese1));

//#8
// var meanChecker = [1, 2, 3]
// var total = 0
// const mean = (array) => {
//   for(let i = 0; i < array.length; i++){
//     total = total + array[i] 
//   }
//   var avg = total/array.length
//   return avg
// }
// console.log(mean(meanChecker))

//#9
//IDK HOW TO COMPLETE THIS ONE!!
// var indexHighestNumber = [1, 4, 2]
// var check = 0
// const highIndex = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (indexHighestNumber[i] > check) {
//       check = indexHighestNumber[i] 
//     }
//   }
//   return check
// }
// console.log(highIndex(indexHighestNumber))

//#10
//MY BRAIN IS FRIED, GAVE UP...
// var testString1 = "hello"
// var testString2 = "boogeyman"
// const middle = (string) => {
//   if()
// }