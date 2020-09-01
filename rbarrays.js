/*Consider this variable:
  var groceryList = ["chips", "dip", "cookies"]
Write the code that will add "soda" to the end of the original array.
Write the code that will add "granola" to the end of array without altering the original array.
Consider this variable:
  var numbers = [2, 4, 6, 8, 10]
Write the code that will add the number 0 to the beginning of the array.

Write the code that will add the number 12 to the end of the array.

Write the code that will remove the first number from the array.

Write the code that will add the number 0 to the beginning of the array without altering the original array.*/


var groceryList = ["chips", "dip", "cookies"]
  groceryList.push("soda")

console.log(groceryList)

var newArr = ["granola"]

console.log(groceryList.concat(newArr))


var numbers = [2, 4, 6, 8, 10]

  numbers.unshift(0)

console.log(numbers)

  numbers.push(12)

console.log(numbers)

    numbers.shift()
console.log(numbers)
var newNum = [0]
console.log(numbers.concat(newNum))
