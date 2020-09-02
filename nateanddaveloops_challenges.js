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

const assignGrade = (score) => {
  if(score >= 90 && score <= 100) {
    return "You got an A!"
}else if (score >= 80 && score <= 89) {
    return "You got a B!"
}else if (score >= 70 && score <= 79) {
    return "You got a C!"
}else if (score >= 60 && score <= 69) {
    return "You got a D!"
}else {
  return "Ouch..."
}
}

console.log(assignGrade(75));
