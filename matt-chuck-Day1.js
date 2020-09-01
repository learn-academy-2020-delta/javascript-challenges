//Arithmetic Challenges
console.log(34 + 71);
console.log(123 - 67);
console.log(56 * 23);
console.log(45 / 5);
console.log(5 ** 7);
console.log(33 % 6);

//String Challenges
var name = "ChuckMatt"
console.log(name.length);
console.log(name.includes("e"));

//Boolean Challenges
console.log(34 / 3 > 67 / 2);
console.log(5 == "5");
console.log(5 === "5");
console.log(!3 === 3);
console.log("LEARN".length === 5 && "Student".length === 7);
console.log("LEARN".length === 5 || "Student".length === 10);

//Variable Challenges
var favNum = 7;
var otherNum = 13;
var string = "Why is git so annoying for us.";

console.log(favNum / 2);
console.log(favNum / otherNum);
console.log(string.length);
console.log(string.charAt(3));

// Conditional Challenges
var item = 50;
if(item <= 100)
{
  console.log("In budget")
} else {
  console.log("Not in Budget!")
};

var hungry = true;
if (hungry === true){
  console.log("Eat food!")
} else {
  console.log("Keep coding!")
};

var trafficLight = "red";
if (trafficLight === "green") {
  console.log("go")
} else if (trafficLight === "yellow") {
  console.log("slow down!")
} else {
  console.log("stop")
};

var num1 = 3;
var num2 = 10;

if (num1 > num2) {
    console.log(num1)
} else if (num2 > num1) {
    console.log(num2)
} else {
    console.log("Equal")
};

var number = 0; 

if (number === 0) {
    console.log("Zero")
} else if (number % 2 ) {
    console.log("Even");
} else {
    console.log("Odd")
}
