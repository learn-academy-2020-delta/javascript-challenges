//#1
// var person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     bio: function() {
//         return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
//     }
//   }
//   console.log(person.firstName);
//   console.log(person.lastName);
//   person.homePlanet = "Earth"
//   console.log(person.bio());


//#2
// var product = {
//     name: "chair", price: 14.99
//   }
// const addCopy = (item) => {
//     return `The product is a ${item.name}. It costs $${item.price}.` 
// } 
// console.log(addCopy(product))


//#3
var lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    menu2: function(){
        return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.`
    }
  }

console.log(lunch.ingredients);
console.log(lunch.ingredients[2]);
console.log(lunch.menu2());
// const menu = (meal) => {
//     return `The ingredients for a ${meal.name} ${lunch.type} are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`
// }
//console.log(menu(lunch));
