const { TestScheduler } = require("jest")

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