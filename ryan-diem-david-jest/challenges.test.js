
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
