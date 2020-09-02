// Arithmetic
console.log("Arthimetic Answers");

console.log("34 + 71:", 34 + 71);
console.log("123 - 67:", 123 - 67);
console.log("56 * 23:", 56 * 23);
console.log("45 / 5:", 45 / 5);
console.log("5 ** 7:", 5 ** 7);
console.log("33 % 6:", 33 % 6);

// String
console.log("\nString Answers");
var name = "Diem";

console.log("String Length:", name.length);
console.log("Includes 'e':", name.includes("e"));

// Boolean
console.log("\nBoolean Answers");
console.log("34/3 > 67/2:", 34/3 > 67/2);
console.log("5 == '5':", 5 == "5");
console.log("5 === '5':", 5 === "5");
console.log("!3 === 3:", !3 === 3);
console.log("'LEARN'.length === 5 && 'Student'.length === 7:", "LEARN".length === 5 && "Student".length === 7);
console.log("'LEARN'.length === 5 || 'Student'.length === 10:", "LEARN".length === 5 || "Student".length === 10);

// Variables
console.log("\nVariable Answers");

var favNum = 5;
console.log("favNum:", favNum);
console.log("favNum / 2:", favNum / 2);

var otherNum = 13;
console.log("favNum / otherNum", favNum / otherNum);

var string = "Heyyy There!";
console.log("String Length:", string.length);
console.log("CharAt[3]:", string.charAt(3));

// Conditional Challenges
console.log("\nConditional Challenge Answers")
var items = 0, price = 0;
if (price <= 100){
  console.log("Budget Test:", "in budget");
} else {
  console.log("Budget Test:", "out of budget");
}

var hungry = true;
if (hungry === true){
  console.log("Hunger Test:", "Eat food");
} else {
  console.log("Hunger Test:", "Keep coding");
}

var trafficLight = "yellow";
if (trafficLight === "green"){
  console.log("Traffic Light:", "Go!");
} else if (trafficLight === "yellow"){
  console.log("Traffic Light:", "Slow down!");
} else if (trafficLight === "red"){
  console.log("Traffic Light:", "Stop!");
} else{
  console.log("Error!");
}

var num1 = 0, num2 = 1;
if (num1 > num2){
  console.log("Biggest Num:", num1);
} else if (num1 < num2){
  console.log("Biggest Num:", num2);
} else if (num1 === num2){
  console.log("Biggest Num:", "They're equal")
} else{
  console.log("You did it wrong! Redo it!");
}

var number = 27;
if (number === 0){
  console.log("Even or Odd:", "It's zero");
} else if (number%2 === 1){
  console.log("Even or Odd:", "It's odd");
} else if (number%2 === 0){
  console.log("Even or Odd:", "It's even");
} else{
  console.log("Input error, please enter a number");
}

// Stretch Challenges
console.log("\nStretch Challenge Answers");

var gradePercentage = 40
if(gradePercentage === 100){
  console.log("Test Grade:", "Perfect Score!!");
} else if(gradePercentage === 0){
  console.log("Test Grade:", "No grade available");
} else if(gradePercentage <= 99 && gradePercentage >= 90){
  console.log("Test Grade:", "You got an A!");
} else if(gradePercentage <= 89 && gradePercentage >= 80){
  console.log("Test Grade:", "You got an B!");
} else if(gradePercentage <= 79 && gradePercentage >= 70){
  console.log("Test Grade:", "You got an C!");
} else if(gradePercentage <= 69 && gradePercentage >= 60){
  console.log("Test Grade:", "You got an D!");
} else if(gradePercentage <= 59){
  console.log("Test Grade:", "You got an F!");
} else {
  console.log("Input Error");
}


var data = true;
if(typeof data === "string"){
  console.log("Data Type:", "string");
} else if(typeof data === "boolean"){
  console.log("Data Type:", "boolean");
} else if(typeof data === "number"){
  console.log("Data Type:", "number");
} else {
  console.log("Input Error");
}

var password = "heavypineapple"
if(password.length >= 12 && password.includes("!")){
  console.log("Password Strength:", "This is a mighty strong password");
} else if(password.length >= 8 || password.includes("!")){
  console.log("Password Strength:", "This password is strong enough");
} else {
  console.log("That is not a VALID password");
}

// Array Challenges
console.log("\nArray Challenge Answers")
console.log("groceryList = ['chips', 'dip', 'cookies']")
var groceryList = ["chips", "dip", "cookies"];
groceryList.push("soda");
console.log("Add [soda]:", groceryList);

var groceryList2 = ["granola"];
console.log("Add [granola]:", "Original array:", groceryList);
console.log("Add [granola]:", "New array:", groceryList.concat(groceryList2));

console.log("\nnumbers = [2, 4, 6, 8, 10]")
var numbers = [2, 4, 6, 8, 10];
numbers.unshift(0);
console.log("Add [0] to beginning:", numbers);
numbers.push(12);
console.log("Add [12] to end", numbers);
numbers.shift();
console.log("Remove first number:", numbers);
var numbers2 = [0];
console.log("Add [0]:", "Original array:", numbers);
console.log("Add [0]:", numbers.concat(numbers2));

console.log("\nnumSet = [2, 13, 6, 8, 4, 2]")
var numSet = [2, 13, 6, 8, 4, 2];
console.log("Index of 2:", numSet.indexOf(2));
console.log("Last Index of 2:", numSet.lastIndexOf(2));

console.log("\nchars = ['y', 'a', 'r', 'r', 'a']")
var chars = ["y", "a", "r", "r", "a"]
console.log("Join Array:", chars.join(""));
console.log("Reverse Array:", chars.reverse());
console.log("Join with -:", chars.join("-"));
console.log("Join:", chars.join(""));

console.log("\ndelta = ['Drew', 'Diem', 'Brian']")
console.log("delta2 = ['Bach', 'Nathan', 'Joel']")
var delta = ["Drew", "Diem", "Brian"];
var delta2 = ["Bach", "Nathan", "Joel"];

console.log("Sort:", delta.sort());
console.log("Reverse:", delta.reverse());
var delta3 = delta.concat(delta2);
console.log("Concat and Sort:", delta3.sort());
