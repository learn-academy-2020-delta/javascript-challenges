// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.
// describe the test
describe("drink", () => {
  //set the test
  test("returns drink coffee if you are tired and keep working if you are not tired", () => {
    //write expectation
    expect(drink("tired")).toEqual("drink coffee")
    expect(drink("not tired")).toEqual("keep working")
  })
})

const drink = (status) => {
  if (status === "tired") {
    return "drink coffee"
  } else if (status === "not tired") {
    return "keep working"
  } else {
    return "you're a GOD!"
  }
}
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function that will make the test pass.
// describe the test
  describe("status", () => {
  //   //set the test
    test("returns relax if you are stressed and keep going if you are not stressed", () => {
    //     //write expectation
      expect(status("stressed")).toEqual("relax")
      expect(status("not stressed")).toEqual("keep going")
    })
})

 const status = (energy) => {
   if (energy === "stressed") {
     return "relax"
   } else if (energy === "not stressed") {
     return "keep going"
   } else {
     return "whatever"
  }
 }
//Write the test for a function that returns "in budget" if a price is lower than $300. Write the function that will make the test pass.
//describe the test
describe("budget", () => {
  //set the test
    test("returns in budget if a price is lower than $300", () => {
      //write expectation
      expect(budget(265)).toEqual("in budget")
      expect(budget(645834658)).toEqual("over budget")
    })
  })

const budget = (price) => {
  if (price < 300) {
    return "in budget"
  } else {
    return "over budget"
  }
}

//Write the test for a function that takes in two arguments(numbers) and returns the smaller number. Write the function that will make the test pass.
//decribe the test
describe("smallNum", () => {
  //set the test
  test("takes in two arguments(numbers) and returns the smaller number.", () => {
    //write expectations
    expect(smallNum(2,4)).toEqual(2)
    expect(smallNum(-15,423)).toEqual(-15)
    expect(smallNum(0, 0)).toEqual("Equal")
  })
})

const smallNum = (num1, num2) => {
  if(num1 > num2) {
    return num2
  } else if (num1 < num2) {
    return num1
  } else {
    return "Equal"
  }
}

//Write the test for a function that takes in one argument(number) and returns whether the number is odd. Write the function that will make the test pass
//decribe the test
describe("isOdd", () => {
  //set the test
    test("takes in one argument(number) and returns whether the number is odd.", () => {
      //write expectations
      expect(isOdd(3)).toEqual("Odd")
      expect(isOdd(22)).toEqual("not odd")
      expect(isOdd(3.5)).toEqual("not odd")
    })
})

const isOdd = (number) => {
  if(number % 2 === 1) {
    return "Odd"
  } else {
    return "not odd"
  }
}

//Write the test for a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Write the function that will make the test pass.
// describe the test
describe("fruitType", () => {
  //set the test
  test("takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape.", () => {
      //write expectations
      expect(fruitType("banana")).toEqual("yellow")
      expect(fruitType("apple")).toEqual("red")
      expect(fruitType("grape")).toEqual("purple")
  })
})

const fruitType = (fruit) => {
  if(fruit === "banana") {
    return "yellow"
  } else if(fruit === "apple") {
    return "red"
  } else if(fruit === "grape") {
    return "purple"
  } else {
    return "error"
  }
}

//Write the test for a function called Rick that returns "Morty". Write the function that will make the test pass.
//describe the test
describe("Rick", () => {
  //set the test
  test("returns 'Morty'", () => {
    //write expectations
    expect(Rick()).toEqual("Morty")
  })
})

const Rick = () => {
  return "Morty"
}

//Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen. Write the function that will make the test pass.
//describe the test
describe("greeter", () => {
  //set the test
  test("returns a greeting with argument name", () => {
    //write expecations
    expect(greeter("James")).toEqual("Hello there, James!")
    expect(greeter("Dave")).toEqual("Hello there, Dave!")
  })
})

const greeter = (name) => {
  return `Hello there, ${ name }!`
}

//Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even. Write the function that will make the test pass.
//describe the test
describe("oddOrEven", () => {
  //set the test
  test("takes an number as an argument and logs whether the number is odd or even", () => {
    //write expectations
    expect(oddOrEven(2)).toEqual("is even")
    expect(oddOrEven(33)).toEqual("is odd")
    expect(oddOrEven(72.4)).toEqual("not an integer")
  })
})

const oddOrEven = (num) => {
  if (num % 2 === 1) {
    return "is odd"
  } else if (num % 2 === 0) {
    return "is even"
  } else {
    return "not an integer"
  }
}

//Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2. Write the function that will make the test pass.
//Describe test
describe("doubler", () => {
  //set the test
  test("takes an number and returns the result of the number multiplied by 2", () => {
     //Write expectations
      expect(doubler(4)).toEqual(8)
      expect(doubler(1.5)).toEqual(3)
      expect(doubler(-2)).toEqual(-4)
  })
})

const doubler = (num) => {
  return num * 2
}

//Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other. Write the function that will make the test pass. 
//Describe the test
describe("multiply", () => {
  //Set the test
  test("takes two numbers as arguments and logs the result of one of the numbers multiplied by the other", () => {
    //Write expectations
    expect(multiply(2, 4)).toEqual(8)
    expect(multiply(-3, 5)).toEqual(-15)
    expect(multiply(-4, -6)).toEqual(24)
  })
})

const multiply = (num1, num2) => {
  return num1 * num2
}

//Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy (10, 5) logs "10 is evenly divisible by 5". Write the function that will make the test pass.
//Describe test
describe("divisibleBy", () => {
  //Set test
  test("akes two numbers as arguments and returns whether the first number is evenly divisible by the second", () => {
    //Write Expectations
    expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
  })
})

const divisibleBy = (num1, num2) => {
  if(num1 % num2 === 0) {
    return `${ num1 } is evenly divisible by ${ num2 }`
  } else {
    return "error"
  }
}

//Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'. Write the function that will make the test pass.
//Describe test
describe("fizzbuzz", () => {
    //Set Test
    test("If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'", () => {
        //Write Expectations
        expect(fizzbuzz(3)).toEqual("fizz")
        expect(fizzbuzz(5)).toEqual("buzz")
        expect(fizzbuzz(15)).toEqual("fizzbuzz")
    })
})

const fizzbuzz = (number) => {
  if(number % 3 === 0 && number % 5 === 0) {
    return "fizzbuzz"
  } else if (number % 3 === 0) {
    return "fizz"
  } else if (number % 5 === 0) {
    return "buzz"
  } else {
    return number
  }
}


    

  
    



