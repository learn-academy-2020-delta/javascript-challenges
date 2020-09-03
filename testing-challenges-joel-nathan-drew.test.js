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
//
// Write the test for a function that takes in one argument(number) and returns whether the number is odd. Write the function that will make the test pass.
//
// Write the test for a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Write the function that will make the test pass.
//
// Write the test for a function called Rick that returns "Morty". Write the function that will make the test pass.
//
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen. Write the function that will make the test pass.
//
// Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even. Write the function that will make the test pass.
//
// Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2. Write the function that will make the test pass.
//
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other. Write the function that will make the test pass.
//
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5". Write the function that will make the test pass.
//
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'. Write the function that will make the test pass.
