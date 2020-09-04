//
// var person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",
//   description: function() {
//     return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}.`
//   }
// }
//
// //Write the code that accesses the first name of the person object.
// console.log(person.firstName);
// // Write the code that accesses the last name of the person object.
// console.log(person.lastName);
// // Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// console.log(person.homePlanet);
// // Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(person.description());

// var product = {
//   name: "chair", price: 14.99
// }
//
// const describeProduct = () => {
//   return `The product is a ${product.name}. It costs $${product.price}.`
// }
//
// console.log(describeProduct(product));

var lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
  description: function() {
     return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients}.`
  }
}

//Write the code that accesses the ingredients property.
console.log(lunch.ingredients);

//Write the code that access the 3rd ingredient of the lunch object.
console.log(lunch.ingredients[2]);

//Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const getIngredients = () => {
  return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients}.`
}

console.log(getIngredients(lunch));

//Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
console.log(lunch.description());
