// For loop that prints 1-20
/*for(let i = 1; i <= 20; i++) {
    console.log(i)
};

// For loop that logs 1-20 tripled
for(let i = 1; i <= 20; i++) {
    console.log(i * 3)
};

for(let i = 1; i <= 20; i++) {
    if(i % 2 !== 0) {
        console.log("odd")
    } else {
        console.log(i);
    }
}*/

// For loop that logs highest number in array
//var nums = [3, 57, -9, 20, 67];
/*let currentIndex = 0; 
for(let i = 0; i < nums.length; i++) {
    if(currentIndex < nums[i]) {
        currentIndex = nums[i]
    }
}
console.log(currentIndex)*/

// For log that logs the lowest number in array

/*let currentIndex2 = 0;
for(let i = 0; i < nums.length; i++) {
    if(currentIndex2 > nums[i]) {
        currentIndex2 = nums[i]
    }
}

console.log(currentIndex2);

// For loop that lgs remainder of each number when divided by 2
for(let i = 0; i < nums.length; i++){
    console.log(nums[i] % 2);
} 

var myString = "learn student";
let numOfE = 0;
for(let i = 0; i < myString.length; i++) {
    if(myString[i] == "e") {
        numOfE++
    }
}
console.log(numOfE); 

for(let i = 0; i <= 15; i++) {
    if(i % 2 !== 0) {
        console.log(i + " is odd")
    } else {
        console.log(i + " is even");
    }
} */

/*
for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}
*/

// Write a function name marco that returns "polo"

//declare function named marco
//const marco = () => {
    // returns string polo
    //return "polo"
//}
// log the function
//console.log(marco())

// Write funct named greeting that takes name as arg and returns "Welcome, <person's name here>!"

// declare funct greeting with arg of name
/*const greeting = (name) => {
    //returns the string interpolation using arg
    return `Welcome ${ name }!`
}
console.log(greeting("Matt"));
*/

// Write func name oddOrEven that takes num as arg and returns whether num is odd or even

// declare func oddOrEven that takes arg num
/*const oddOrEven = (num) => {
    //if statement that checks if arg is odd or even
    if (num % 2 === 0) {
        return "even"
    } else if (num % 2 === 1) {
        return "odd"
    } else {
        return "Error, please input a number"
    }
}
console.log(oddOrEven(3));
console.log(oddOrEven(86));
console.log(oddOrEven("number"));
*/

// Write func named triple that takes num as arg returns result of that number multiplied by 3

// declare function named triple with arg as num
/*const triple = (num) => {
    //returns num * 3
    return num * 3
}
console.log(triple(4));
*/

//Write func named multiply that takes two nums as args and returns result of one of the numbers multiplied by the other

// declare function names multiply
/*const multiply = (num1, num2) => {
    // return resutl of num1 times num2
    return num1 * num2
}
console.log(multiply(5, 30)); */

//Declare func named divisibleBy that takes 2 nums as args. Returns if first number is evenly divisible by the second number
//Declare our function
/*const divisibleBy = (num1, num2) => {
    //If statement checking to make sure the inputs are a number
    if(typeof num1 === "number" && typeof num2 === "number") {
    //If statement to see if number is evenly divisible by num2
        if(num1 % num2 === 0) {
            return `${ num1 } is evenly divisble by ${ num2 }`
        } else if (num1 % num2 !== 0) {
            return `${ num1 } is not evenly divisble by ${ num2 }`
        }
    } 
    else {
        return "Please put in valid numbers"
    }
}

console.log(divisibleBy(10, 5));
console.log(divisibleBy(17, 5));
console.log(divisibleBy(134, "dog"));
*/
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// Declare our function assignGrade
/*const assignGrade = (score) => {
    //If score is between 90-100 return A
    if(score <= 100 && score >= 90) {
        return "A"
    }
    //If else score is between 80-89 return B
    if(score <= 89 && score >= 80) {
        return "B"
    }
    //If else score is between 70-79 return C
    if(score <= 79 && score >= 70) {
        return "C"
    }
    //If else score is between 60-69 return D
    if(score <= 69 && score >= 60) {
        return "D"
    }
    //Else return YOU SHALL NOT PASS!
    else {
        return "YOU SHALL NOT PASS!"
    }
};
console.log(assignGrade(95));
console.log(assignGrade(85));
console.log(assignGrade(75));
console.log(assignGrade(65));
console.log(assignGrade(55));
*/

//Write a function that takes in an array and returns a new array with all numbers multiplied by 3
/*var testArr1 = [3, 9, 15, 4, 10]
//Declare empty new array
var newArr = []
//Declare a function that takes in testArr
const multi3 = (array) => {
//Make loop that goes through entire array
    for(i = 0; i < array.length; i++) {
        //multiply all numbers by three and push new number into newArr
        newArr.push(array[i] * 3)
    }
    //return all numbers in newArr
    return newArr
}
console.log(multi3(testArr1)); */

//Write a function that takes in an array and returns a new array with only odd numbers
/*var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// Declare a new empty array 
var oddNum = []
// Declare a function that takes in testArr2
const oddOnly = (array) => {
    // Make for loop that goes through entire array and checks if value is odd
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            // Push the odd values into the new array
            oddNum.push(array[i])
        }
    } // Return new array made up of odd values
    return oddNum
}
console.log(oddOnly(testArr2)); */

//Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
/*var myMessage = "Hello There"
// Declare a function for capitalized message 
const messageCaps = (message) => {
    // Utilize toUpperCase built in method //return capitalized string
    return message.toUpperCase()
}
console.log(messageCaps(myMessage)); */

//Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method
/*var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
//Declare a new array with no value
var letters = []
//Declare a function that takes in array 
const letterSort = (array) => {
    //For loop that goes through all values 
    for(let i = 0; i < array.length; i++) {
        //use typeof method to check each value is a letter using if statement
        if(typeof array[i] === "string") {
            //push letters into new array
            letters.push(array[i]);
        } 
    } //Use join method to combine all letters into a string
    //return string of letters
    return letters.join("")
}
console.log(letterSort(comboArr)); */

/*
//Create a function that returns the highest number
var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]
// Declare a function to cycle through array
const highNum = (array) => {
     // Declare a variable that hold the first value in the array
    var num = array[0]
    // For loop to go through all numbers in array
    for(let i = 0; i < array.length; i ++) {
       // If statment that compares the current value is larger than the previous value
       if(num < array[i]) {
           num = array[i]
       }   
    } return num
}
console.log(highNum(highestNumber)); */

//Create a function that returns the lowest number
/*var lowestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]
// Declare a function to cycle through array
const lowNum = (array) => {
// Declare a variable that holds first value in array
    var num = array[0]
    // for loop to go through all numbers in array
    for(let i = 0; i < array.length; i++) {
        // if statement that compares the current value is smaller than the previous value
        if (num > array[i]) {
            num = array[i]
        }
    }//returns lowest number in array
    return num
}
console.log(lowNum(lowestNumber))*/


//Create a function that calculates the sum
var addThese1 = [1, 2, 3, 4]
/*const sumOf = (array) => {
    var sum = array.reduce(function(a,b) {
        return a + b
    }, 0 );
    console.log(sum)

}
console.log(sumOf(addThese1))*/
// Declare a function that accepts whatever number of arguments
const sumOf = (array) => {
    // create var that holds sum of previous values
    let sum = 0;
    // Make for loop that goes through array
    for (let i = 0; i < array.length; i++) {
        // Adds value in current index to variable sum and redeclares variable sum
        sum += array[i]; // this is short hand for sum = sum + array[i]
    }
    // returns sum of array
    return sum
}

console.log(sumOf(addThese1))
var addThese2 = [2, 4, 6, 8, 10]
console.log(sumOf(addThese2))

// Create a function that calculates the mean value
var meanChecker = [1, 2, 3]
// Declare funct that accepts user's array
const meanOf = (array) => {
    // declare var that holds total sum
    var sum = 0;
    // write for loop that goes through array
    for (let i = 0; i < array.length; i++) {
        // adds value in current index to var sum and redeclares variable sum
        sum += array[i]
    }
    // takes sum and divides by number of values in index and saves to new var mean
    let mean = sum / array.length
    // return the value of mean of array
    return mean
}
console.log(meanOf(meanChecker))

// Create function that finds the index of the highest number
var indexHighestNumber = [1, 4, 2]
// Declare a function that accepts user's array
const indexOfHighNumFinder = (array) => {
    // Declare a variable that holds the largest number in array
    let highNum = array[0]
    // Decalre a variable that holds the index of the largest number in array
    let indexOfHighNum = 0
    // Write a for loop that goes through all numbers in array
    for (let i = 0; i < array.length; i++) {
        // Write if statement that finds highest value in array
        if (array[i] > highNum) {
            // save the value of the highest number in highNum (so that it can update with every iteration of loop)
            highNum = array[i]
            // get the array index where highest number exists
            indexOfHighNum = i
        }
    }
    // return index that contains highest number
    return indexOfHighNum
}
console.log(indexOfHighNumFinder(indexHighestNumber))

// Create a function that takes in string and returns only the middle value
var testString1 = "hello"
var testString2 = "boogeyman"
// Declare a function that accepts user string 
const midLetterOf = (string) => {
    // declare the variable middle letter (and set to 0 for now)
    let midLetter = 0
    // if the string length is odd, the middle letter will be half the length rounded up
    if (string.length % 2 !== 0) {
        // find middle letter of string by dividing the length of string by 2
        // relationship between index and length is one less 
        midLetter = Math.round(string.length / 2) - 1
    } // else if the string length is even, there is no middle letter
    else if (string.length % 2 === 0) {
        return "The string does not have a middle letter."
    }
    // return the middle letter by using the charAt method
    return string.charAt(midLetter)
}
console.log(midLetterOf(testString1))
console.log(midLetterOf(testString2))
console.log(midLetterOf("tree"));



















