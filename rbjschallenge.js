//Add 34 and 71
//Subtract 67 from 123
//Multiply 56 and 23
//Divide 45 by 5
//Calculate 5 to the power of 7
//Find the remainder of 33/6

console.log(34 +71)
console.log(67 - 123)
console.log(56 * 23)
console.log(45 / 5)
console.log(5 ** 7)
console.log(33 % 6)



//String Challenges

/*Find the length of a string containing your name
Does your string include the letter "e"?*/

var name = "ryan"
console.log(name.includes("e"));

console.log(name.length)
console.log(`${name} does not include the letter "e"`)

/*Boolean Challenges (return true or false)

Is 34 divided by 3 greater than 67 divided by 2?
Does 5 evaluate to the same as "5"?
Does 5 strictly equal "5"?
Does !3 strictly equal 3?
Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?*/

console.log(34 / 3 > 67 / 2)
console.log(5 == "5")
console.log(5 === "5")
console.log(!3 === 3)
console.log("LEARN".length === 5 && "Student".length === 7)
console.log("LEARN".length === 5 || "Student".length === 10)


/*Variables Challenges

Set a variable called favNum equal to your favorite number
Log your favorite number divided by 2
Set another variable called otherNum equal to 13
What is favNum divided by otherNum?
Save a string as a variable
Find the length of the string
Use the method charAt() to find what letter is at the 3rd index*/


var favNum = 11;
console.log(favNum / 2)
var otherNum = 13;
console.log(favNum / otherNum);
var randomWord = "very random";
console.log(randomWord.length)
console.log(randomWord.charAt(3));
