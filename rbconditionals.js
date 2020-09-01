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


  /*Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

  Write an if/else statement that takes a variable of a boolean, number, or string datatype and logs the data type of the variable HINT: use the JS operator typeof.

  Create a password checker using a single if/else statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.*/
var grade = 82
    grade = 45
    grade = 100

  if (grade === 100) {
  console.log("Perfect score")
}
  else if (grade < 90 && grade >= 80) {
  console.log("B")
}
  else if (grade < 80 && grade >= 70) {
  console.log("C")
}
  else if (grade < 70 && grade >= 60) {
  console.log("D")
}
  else if (grade < 60 && grade > 0) {
  console.log("F")
}
  else if (grade === 0) {
  console.log("No grade available")
}

var data = true
if (data.typeOf() === "boolean") {
  console.log(data.typeOf())
}
