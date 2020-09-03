// Write the test for a function that returns "drink coffee" if you are
// tired and "keep working" if you are not tired. Write the function that // will make the test pass
describe ("needCoffee", () => {
  test("take an argument and determine if the person needs coffee", () => {
    expect(needCoffee("tired")).toEqual("drink coffee")
    expect(needCoffee("not tired")).toEqual("keep working")
  })
})

const needCoffee = (condition) => {
  if (condition === "tired") {
    return "drink coffee"
  } else if (condition === "not tired") {
    return "keep working"
  } else {
    return "incorrect input"
  }
}

const { TestScheduler } = require("jest")

// Write the test for a function that returns "relax" if you are stressed // and "keep going" if you are not stressed. Write the function that
// will make the test pass.
describe ("areStressed", () => {
   test("take an argument and determine if the person needs rest", () => {
     expect(areStressed("stressed")).toEqual("relax")
     expect(areStressed("not stressed")).toEqual("keep going")
   })
 })

 const areStressed = (condition) => {
   if (condition === "stressed") {
     return "relax"
   } else if (condition === "not stressed") {
     return "keep going"
   } else {
     return "incorrect input"
   }
 }

//Write the test for a function that returns "in budget" if a price is lower than $300
//Write the function that will make the test pass.
describe ("withinBudget", () => {
    test("taken in argument to see if dollar value of item is less $300", () => {
        let itemPrice = 200
        expect(withinBudget(itemPrice)).toEqual("in budget")
        expect(withinBudget(itemPrice + 200)).toEqual("outside of budget")
    })
})

const withinBudget = (cost) => {
    if (cost <= 300) {
        return "in budget"
    } else if (cost > 300) {
        return "outside of budget"
    } else {
        return "error"
    }
}

//Write the test for a function that takes in two arguments(numbers)
//and returns the smaller number
//Write the function that will make the test pass.
describe ("smallNum", () => {
    test ("compares two numbers and returns the smaller number", () => {
        let num1 = 10
        let num2 = 20
        expect(smallNum(num1, num2)).toEqual(10)
        expect(smallNum(num1 + 20, num2)).toEqual(20)
        expect(smallNum(num1, num2 - 10)).toEqual("they are the same")
    })
})

const smallNum = (num1, num2) => {
    if (num1 > num2) {
        return num2
    } else if (num1 < num2) {
        return num1
    } else {
        return "they are the same"
    }
}

//Write the test for a function that takes in one argument(number)
//returns whether the number is odd
//Write the function that will make the test pass.
describe ("isOdd", () => {
    test("determines if the number is odd", () => {
        expect(isOdd(5)).toEqual("odd")
        expect(isOdd(6)).toEqual("even")
        expect(isOdd("eleven")).toEqual("Invalid. Please input a number.")
    })
})

const isOdd = (number) => {
    if(number % 2 === 0) {
        return "even"
    } else if (number % 2 === 1) {
        return "odd"
    } else {
        return "Invalid. Please input a number."
    }
}

// Write the test for a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Write the function that will make the test pass.
describe ("fruitColor", () => {
  test("find the color of the fruit parameter", () => {
    expect(fruitColor("banana")).toEqual("yellow")
    expect(fruitColor("apple")).toEqual("red")
    expect(fruitColor("grape")).toEqual("purple")
    expect(fruitColor("watermelon")).toEqual("I don't know!")
  })
})

const fruitColor = (fruit) => {
  if (fruit === "banana") {
    return "yellow"
  } else if (fruit === "apple") {
    return "red"
  } else if (fruit === "grape") {
    return "purple"
  } else {
    return "I don't know!"
  }
}

// Write the test for a function called Rick that returns "Morty". Write the function that will make the test pass.
describe ("Rick", () => {
  test("when function is called return Morty", () => {
    expect(Rick()).toEqual("Morty")
    expect(Rick(1000)).toEqual("Morty")
  })
})

const Rick = () => {
  return "Morty"
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen. Write the function that will make the test pass.
describe ("greeter", () => {
  test("take a parameter return a greeting with that name", () => {
    expect(greeter("Bach")).toEqual("Hello, Bach")
  })
})

const greeter = (name) => {
  return `Hello, ${name}`
}
