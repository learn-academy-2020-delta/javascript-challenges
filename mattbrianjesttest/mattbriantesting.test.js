//Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.
//describe the test
// describe("drink", () => {
//   //set the test
//   test("returns drink coffee if you are tired and keep working if you are not tired", () => {
//     //write expectation
//     expect(drink("tired")).toEqual("drink coffee")
//     expect(drink("not tired")).toEqual("keep working")
//   })
// })
//
// const drink = (status) => {
//   if (status === "tired") {
//     return "drink coffee"
//   } else if (status === "not tired") {
//     return "keep working"
//   } else {
//     return "you're a GOD!"
//   }
// }
//Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function that will make the test pass.
//describe the test
//   describe("status", () => {
//   //   //set the test
//     test("returns relax if you are stressed and keep going if you are not stressed", () => {
//     //     //write expectation
//       expect(status("stressed")).toEqual("relax")
//       expect(status("not stressed")).toEqual("keep going")
//     })
// })
//
// const status = (energy) => {
//   if (energy === "stressed") {
//     return "relax"
//   } else if (energy === "not stressed") {
//     return "keep going"
//   } else {
//     return "whatever"
//   }
// }
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
