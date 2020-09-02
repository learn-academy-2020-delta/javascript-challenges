//Javascript Function Challenges

// Write a function named marco that returns "polo".
console.log("marco:")
const marco = () => {
  return "polo";
}

// Test
console.log(marco());

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
console.log("\ngreeter:");
const greeting = (name) => {
  return `Welcome, ${ name }`;
}

// Test
console.log(greeting("Ryan"));

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
console.log("\nOdd or Even:");
const oddOrEven = (num) => {
  if(num % 2 === 0){
    return `${ num } is even.`;
  }
  else if(num % 2 !== 0){
    return `${ num } is odd.`;
} else {
  return `ERROR`;
}
}
 // Test
 console.log(oddOrEven(5));

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
console.log("\ntriple:");
const triple = (num) => {
  return num * 3;
}

// Test
console.log(triple(2));


// Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.
console.log("\nmultiply:");
const multiply = (num1, num2) => {
  return num1 * num2;
}

// Test
console.log(multiply(5, 3));


// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
console.log("\ndivisibleBy:");
const divisibleBy = (num1, num2) => {
  if(num1 % num2 === 0){
    return `${ num1 } is evenly divisible by ${ num2 }`;
  }
  else {
    return `Not divisible.`;
  }
}

// Test
console.log(divisibleBy(20, 10));


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
console.log("\nassignGrade:");
const assignGrade = (num) => {
  if(num <= 100 && num >= 90){
    return `You got an A!`;
  }
  else if(num <= 89 && num >= 80){
    return `You got a B!`;
  }
  else if(num <= 79 && num >= 70){
  return `You got a C`;
  }
  else if(num <= 69 && num >= 60){
  return `You got a D`;
  }
  else if(num <= 59 && num >= 0){
  return `You got an F :(`;
  }
  else {
    return `ERROR`;
  }
}

// Test
console.log(assignGrade(45));



//What number's bigger: Write a function named greaterNum that takes 2 arguments, both numbers and returns whichever number is the greater (higher) number
console.log("\ngreater number;")
const greaterNum = (num1, num2) => {
  if(num1 > num2){
    return `${num1} is greater than ${num2}`
  }
  else if(num1 < num2){
    return `${num2} is greather than ${num1}`
  }
  else if(num1 === num2){
    return `${num1} is equal to ${num2}`
  }
  else {
    return `ERROR`
  }
}
console.log(greaterNum(39, 39))
//The World Translator: Write a function named helloWorld that takes 1 argument, a language code (e.g. "es", "de", "en") and returns "Hello, World" for the given language, for at least 3 languages (it should default to returning English)
console.log("\nThe World Translator;")
const helloWorld = (langCode) => {
  if(langCode === "es"){
    return "¡Hola Mundo!"
  }
  else if(langCode === "de"){
    return "Hallo Welt!"
  }
  else if(langCode === "fr"){
    return "Bonjour Le Monde"
  }
  else {
    return "Hello World!"
  }
}
console.log(helloWorld(""))
//The Pluralizer: Write a function named pluralizer that takes 2 arguments, a number and a singular noun and returns the number and pluralized form of the noun, if necessary
const pluralizer = (num, noun) => {
  if(typeof num === `number` && typeof noun === "string"){
    if(noun === "sheep" || noun === "species" || num === 1){
      return `${num} ${noun}`
    }
    else if(noun === "goose"){
    return `${num} geese`
  }
    else if(noun === "child"){
      return `${num} children`
  }
    else if(noun === "person"){
      return `${num} people`
  }
  else if(num > 1){
    return `${num} ${noun}s`
  }
  }
  else{
    return "DO IT AGAIN!!"
  }
}
console.log(pluralizer(1, 9))
//const pluralizer = (5, cat)

//Expected outcome --> "5 cats"

//const pluralizer = (1, dog)

//Expected outcome --> "1 dog"

//Bonus: Make it handle a few collective nouns like "sheep", "goose", "child", "person" and "species"
