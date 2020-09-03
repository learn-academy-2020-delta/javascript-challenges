
// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.
describe("tiredChecker", () => {
    test("a function that returns 'drink coffee' if you are tired and 'keep working' if you are not tired", () => {
        expect(tiredChecker("tired")).toEqual("drink coffee")
        expect(tiredChecker("not tired")).toEqual("keep working")
    })
})

const tiredChecker = (mood) => {
    if (mood === "tired"){
        return "drink coffee"
    }
    else if (mood === "not tired"){
        return "keep working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function that will make the test pass.

describe("stressChecker", () => {
    test("a function that returns 'relax' if you are stressed and 'keep going' if you are not stressed.", () => {
        expect(stressChecker("stressed")).toEqual("relax")
        expect(stressChecker("not stressed")).toEqual("keep going")
    })
})

const stressChecker = (mood) => {
    if (mood === "stressed"){
        return "relax"
    }
    else if (mood === "not stressed"){
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300. Write the function that will make the test pass.

describe("budgetChecker", () => {
    test("function that returns 'in budget' if a price is lower than $300", () => {
        expect(budgetChecker(299)).toEqual("in budget")
        expect(budgetChecker(300)).toEqual("out of budget")
    })
})

const budgetChecker = (price) => {
    if (price < 300){
        return "in budget"
    }
    else if (price >= 300){
        return "out of budget"
    }
}

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number. Write the function that will make the test pass.

describe("smallNum", () => {
    test("function that takes in two arguments(numbers) and returns the smaller number", () => {
        expect(smallNum(5, 10)).toEqual(5)
    })
})

const smallNum = (num1, num2) => {
    if (num1 > num2){
        return num2
    }
    else if (num1 < num2){
        return num1
    }
  }

    //Write the test for a function that takes in one argument(number) and returns whether the number is odd. Write the function that will make the test pass.

describe("oddNums", () => {
  test("function that takes in one argument(number) and returns whether the number is odd", () => {
    expect(oddNums(9)).toEqual("odd")
  })
})

const oddNums = (number) => {
  if(number % 2 !== 0) {
    return "odd"
  }
}

//Write the test for a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Write the function that will make the test pass.

describe("fruitColor", () => {
  test("function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape", () => {
    expect(fruitColor("banana")).toEqual("yellow")
    expect(fruitColor("apple")).toEqual("red")
    expect(fruitColor("grape")).toEqual("purple")
  })
})

const fruitColor = (fruit) => {
  if(fruit === "banana"){
    return "yellow"
  }
  else if(fruit === "apple"){
    return "red"
  }
  else if(fruit === "grape"){
    return "purple"
  }
}

//Write the test for a function called Rick that returns "Morty". Write the function that will make the test pass

describe("rick", () => {
  test("function called Rick that returns morty", () => {
    expect(rick()).toEqual("morty")
  })
})

const rick = () => {
  return "morty"
}

//Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen. Write the function that will make the test pass

describe("greeter", () => {
  test("function called greeter that takes a name as an argument and returns a greeting with that name to the screen", () => {
    expect(greeter("ryan")).toEqual("hello ryan")
  })
})

const greeter = (name) => {
  return `hello ${name}`
}


//Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even. Write the function that will make the test pass.

describe("oddOrEven", () => {
  test("function called oddOrEven that takes an number as an argument and logs whether the number is odd or even.", () => {
    expect(oddOrEven(5)).toEqual("odd")
    expect(oddOrEven(4)).toEqual("even")
  })
})

const oddOrEven = (numb) => {
  if(numb % 2 === 0){
    return "even"
  }
  else if (numb % 2 !== 0){
    return "odd"
  }
}


//Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2. Write the function that will make the test pass.

describe("doubler", () => {
  test("function called doubler that takes an number and returns the result of the number multiplied by 2.", () => {
    expect(doubler(5)).toEqual(10)
  })
}) 

const doubler = (numb) => {
  return numb * 2
}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other. Write the function that will make the test pass.

describe("multiply", () => {
  test("function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.", () => {
    expect(multiply(4, 8)).toEqual(32)
  })
})

const multiply = (num1, num2) => {
  return num1 * num2
}

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5". Write the function that will make the test pass.

describe("divisibleBy", () =>{
  test("function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs '10 is evenly divisible by 5'.", () => {
    expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5.")
  })
})

const divisibleBy = (num1, num2) => {
  if(num1 % num2 === 0){
    return `${num1} is evenly divisible by ${num2}.`
  }
}

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'. Write the function that will make the test pass.

describe("fizzbuzz", () => {
  test("If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.", () => {
    expect(fizzbuzz(6)).toEqual("fizz")
    expect(fizzbuzz(10)).toEqual("buzz")
    expect(fizzbuzz(15)).toEqual("fizzbuzz")
    expect(fizzbuzz(4)).toEqual("NO FIZZBUZZ FOR U")
  })
})

const fizzbuzz = (num) => {
  if(num % 3 === 0 && num % 5 === 0){
    return "fizzbuzz"
  }
  else if(num % 3 === 0){
    return "fizz"
  }
  else if (num % 5 === 0){
    return "buzz"
  }
  else{
    return "NO FIZZBUZZ FOR U"
  }
}







