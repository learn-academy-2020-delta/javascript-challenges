// Testing Challenges

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.

describe("youTired", () => {
  test("returns 'drink coffee' if you are tired and 'keep working' if you are not tired", () => {
    expect(youTired("tired")).toEqual("drink coffee")
    expect(youTired("not tired")).toEqual("keep working")
  })
})

const youTired = (state) => {
  if(state.toLowerCase() === "tired"){
    return `drink coffee`;
  }
  else if(state.toLowerCase() === "not tired"){
    return `keep working`;
  }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function that will make the test pass.

describe("stressTest", () => {
  test("returns 'relax' if you are stressed and 'keep going' if you are not stressed", () => {
    expect(stressTest("stressed")).toEqual("relax")
    expect(stressTest("not stressed")).toEqual("keep going")
  })
})

const stressTest = (stress) => {
  if(stress.toLowerCase() === "stressed"){
    return `relax`;
  }
  else if(stress.toLowerCase() === "not stressed"){
    return `keep going`;
  }
}

// Write the test for a function that returns "in budget" if a price is lower than $300. Write the function that will make the test pass.

describe("budgeter", () => {
  test("returns 'in budget' if a price is lower than $300", () => {
    expect(budgeter("200")).toEqual("in budget")
    expect(budgeter("100")).toEqual("in budget")
    expect(budgeter("301")).toEqual("out of budget")
    expect(budgeter("400")).toEqual("out of budget")
  })
})


const budgeter = (price) => {
  if(price <= 300){
    return `in budget`;
  }
  else if(price > 300) {
    return `out of budget`;
  }
  else {
    return `INPUT ERROR`;
  }
}



// Write the test for a function that takes in two arguments(numbers) and returns the smaller number. Write the function that will make the test pass.

describe("argumentsNum", () =>{
  test("a function that takes in two arguments numbers and returns the smaller number.", () =>{
    expect(argumentsNum(5, 7)).toEqual(5)
    expect(argumentsNum(8, 2)).toEqual(2)
    expect(argumentsNum(4, 4)).toEqual("They are equal")
  })

})
const argumentsNum = (num1, num2) =>{
  if (num1 > num2) {
    return num2
  } else if (num1 < num2) {
    return num1
  }else if (num1 === num2) {
    return "They are equal"
  }else{
    return "USER ERROR BRO"
  }

}

// Write the test for a function that takes in one argument(number) and returns whether the number is odd. Write the function that will make the test pass.
describe("isOdd", () =>{
  test("a function that takes in one argument(number) and returns whether the number is odd", () =>{
    expect(isOdd(5)).toEqual("This is odd")
    expect(isOdd(8)).toEqual("That's an even number")
    expect(isOdd(7)).toEqual("This is odd")
    expect(isOdd("Heyoo")).toEqual("User is confused...")
  })

})
const isOdd = (number) =>{
  if(number % 2 !== 0 && typeof number === "number"){
  return "This is odd"
}else if (number % 2 === 0 && typeof number === "number"){
  return "That's an even number"
}else{
return "User is confused..."
}
}


// Write the test for a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Write the function that will make the test pass.
describe("fruitType", () =>{
  test("a function that takes in one argument(number) and returns whether the number is odd", () =>{
    expect(fruitType("banana")).toEqual("yellow")
    expect(fruitType("apple")).toEqual("red")
    expect(fruitType("grape")).toEqual("purple")
    expect(fruitType(7)).toEqual("wrong input")
  })

})

const fruitType = (fruit) => {
  if(typeof fruit === "string") {
    if(fruit === "banana") {
      return "yellow"
    } else if(fruit === "apple") {
      return "red"
    } else if(fruit === "grape") {
      return "purple"
    }
  } else {
    return "wrong input"
  }
}

// Write the test for a function called Rick that returns "Morty". Write the function that will make the test pass.
describe("Rick", () =>{
  test("called Rick that returns Morty", () =>{
    expect(Rick()).toEqual("Morty")
  })
})

const Rick = () => {
  return "Morty"
}


// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen. Write the function that will make the test pass.
describe("greeter", () =>{
  test("returns a greeting with that name to the screen", () =>{
    expect(greeter("banana")).toEqual("welcome, banana")
    expect(greeter("apple")).toEqual("welcome, apple")
    expect(greeter("grape")).toEqual("welcome, grape")
    expect(greeter(7)).toEqual("wrong input")
  })

})

const greeter = (name) => {
  if(typeof name === "string") {
   return `welcome, ${ name }`
  } else {
    return "wrong input"
  }
}

// Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even. Write the function that will make the test pass.
describe("oddOrEven", () =>{
  test("logs whether the number is odd or even", () =>{
    expect(oddOrEven(5)).toEqual("This is odd")
    expect(oddOrEven(8)).toEqual("That's an even number")
    expect(oddOrEven(7)).toEqual("This is odd")
    expect(oddOrEven("Heyoo")).toEqual("User is confused...")
  })

})
const oddOrEven = (num) => {
  if(typeof num === "number") {
    if(num % 2 !== 0) {
      return "This is odd"
    } else if (num % 2 === 0){
      return "That's an even number"
    }  
  } else {
    return "User is confused..." 
  }
}


// Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2. Write the function that will make the test pass.
describe("doubler", () =>{
  test("logs whether the number is odd or even", () =>{
    expect(doubler(5)).toEqual(10)
    expect(doubler(8)).toEqual(16)
    expect(doubler(7)).toEqual(14)
    expect(doubler("Heyoo")).toEqual("User is confused...")
  })

})

const doubler = (number) => {
  if(typeof number === "number") {
    return number * 2;
  } else {
    return "User is confused..."
  }
}


// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other. Write the function that will make the test pass.
describe("multiply", () =>{
  test("logs whether the number is odd or even", () =>{
    expect(multiply(5, 4)).toEqual(20)
    expect(multiply(8, 2)).toEqual(16)
    expect(multiply(7, 1)).toEqual(7)
    expect(multiply("Heyoo")).toEqual("User is confused...")
  })

})

const multiply = (number1, number2) => {
  if(typeof number1 === "number" && typeof number2 === "number") {
    return number1 * number2;
  } else {
    return "User is confused..."
  }
}


// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5". Write the function that will make the test pass.

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'. Write the function that will make the test pass.
