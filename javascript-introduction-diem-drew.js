// Arithmetic
console.log("Arthimetic answers");

console.log(34 + 71);
console.log(123 - 67);
console.log(56 * 23);
console.log(45 / 5);
console.log(5 ** 7);
console.log(33 % 6);

// String
console.log("String answers");
var name = "Diem";

console.log(name.length);
console.log(name.includes("e"));

// Boolean
console.log("Boolean answers");
console.log(34/3 > 67/2);
console.log(5 == "5");
console.log(5 === "5");
console.log(!3 === 3);
console.log("LEARN".length === 5 && "Student".length === 7);
console.log("LEARN".length === 5 || "Student".length === 10);

// Variables
console.log("Variable answers");

var favNum = 5;
console.log(favNum);
console.log(favNum / 2);

var otherNum = 13;
console.log(favNum / otherNum);

var string = "Heyyy There!";
console.log(string.length);
console.log(string.charAt(3));

// Conditional Challenges
console.log("Conditional Challenges Answers")
var items = 0, price = 0;
if (price <= 100){
  console.log("in budget");
} else {
  console.log("out of budget");
}
var hungry = true;
if (hungry === true){
  console.log("Eat food");
} else {
  console.log("Keep coding");
}
var trafficLight = "yellow";
if (trafficLight === "green"){
  console.log("Go!");
} else if (trafficLight === "yellow"){
  console.log("Slow down!");
} else if (trafficLight === "red"){
  console.log("Stop!");
} else{
  console.log("Error!");
}
var num1 = 0, num2 = 1;
if (num1 > num2){
  console.log(num1);
} else if (num1 < num2){
  console.log(num2);
} else if (num1 === num2){
  console.log("They're equal")
} else{
  console.log("You did it wrong! Redo it!");
}
var number = 27;
if (number === 0){
  console.log("It's zero");
} else if (number%2 === 1){
  console.log("It's odd");
} else if (number%2 === 0){
  console.log("It's even");
} else{
  console.log("Input error, please enter a number");
}
