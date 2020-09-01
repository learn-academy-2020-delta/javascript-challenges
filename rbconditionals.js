/*Make sure you try different options and change the variables to ensure properly working code.

Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.

Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.

Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.*/


var toaster = 40

  if(toaster <= 100) {
    console.log("in budget")
  }

var hungry = false
  if(hungry == true){
    console.log("eat food")
  }
  else {
    console.log("keep coding")
  }
console.log(hungry);

  var trafficLight = "yellow"
      trafficLight = "red"
  if(trafficLight === "green"){
    console.log("go")
  }
  else if (trafficLight === "yellow"){
    console.log("slow down!")
  }
  else if (trafficLight === "red"){
    console.log("STOP")
  }

var num1 = 100
var num2 = 100

    if(num2 > num1){
      console.log(num2)
    }
    else if(num1 > num2){
      console.log(num1)
    }
    else if(num1 === num2){
      console.log("number is the same")
    }

var num = 21
  if(num % 2){
    console.log("odd")
  }
  else if(num % 2 === 0){
    console.log("even")
  }
  else if(num === 0){
    console.log("zero")
  }
