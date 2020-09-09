// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }
//
//   coffeeProfile(){
//     return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//   }
//
//   creams(){
//     if (this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }
//
//   sugars(){
//     if (this.sugar > 1){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }


//#1
// var blackCoffee = new Coffee("coffee", 0, 0);
// var normalCoffee = new Coffee("coffee", 1, 2);
// var secondCoffee = new Coffee("coffee", 0, 2);
// console.log(secondCoffee.coffeeProfile());


//#2
// class Latte {
//   constructor(flavor, milkType, numberOfShots) {
//     this.flavor = flavor,
//     this.milkType = milkType,
//     this.numberOfShots = numberOfShots
//   }

//   latteProfile() {
//     return `flavor: ${flavor}, milk type: ${milkType}, number of shots: ${numberOfShots}`
//   }
// }

// var singleRegular = new Latte("regular", "milk", "1")
// console.log(singleRegular);

// var fancyDrink = new Latte("hazelnut", "almond", "2")
// console.log(fancyDrink);


//#3
// class Cylinder{
//   constructor(radius, height){
//     this.radius = radius,
//     this.height = height
//   }

//   cylinderVolume(){
//     return Math.PI*this.radius**2*this.height
//   }
// }
// var cylinder1 = new Cylinder(1,1)
// var cylinder2 = new Cylinder(2,1)
// var cylinder3 = new Cylinder(3,7)
// console.log(cylinder1.cylinderVolume());
// console.log(cylinder2.cylinderVolume());
// console.log(cylinder3.cylinderVolume());

//SPREAD CHALLENGES
//#1
// function combineArrays(arrOne, arrTwo) {
//   return [...arrOne, ...arrTwo]
// }

// console.log(combineArrays([2, 4, 2], [4, 6, 11]))


//#2
// function combineAndFilterOdd(arrOne, arrTwo, arrThree){
//   return[...arrOne, ...arrTwo, ...arrThree].filter(num => num % 2 !== 0)
// }

// console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))


// //#3 STRETCH
// function combineAndFilterOdd(...arrays){
//   return [].concat(...arrays).filter(num => num % 2 !== 0)
// }
//
// console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))

//String Interpolation
// //#1
// var meaningOfLife = 42
//
// console.log(`The answer to the meaning of life is ${meaningOfLife}`);

//#2
// var zooAnimals = ['giraffe', 'fennec fox', 'elephant']
//
// zooAnimals.forEach(animal =>  console.log(`The zoo has a ${animal}`))

//#3
//
// var burger = {
//     cheese: 'cheddar',
//     patty: 'black bean',
//     onions: false,
// }
//
// console.log(`${burger.patty} burger with ${burger.cheese}`);

// //STRETCH
//
// var beanBurger = {
//     cheese: 'cheddar',
//     patty: 'black bean',
//     onions: false,
// }
//
// var turkeyBurger = {
//     cheese: 'swiss',
//     patty: 'turkey',
//     onions: true,
// }
//
// const describeBurger = (burger) => {
//   if (burger.onions === true) {
//     return console.log(`${burger.patty} burger with ${burger.cheese} and onions`);
//   } else {
//     return console.log(`${burger.patty} burger with ${burger.cheese} and no onions`);
//   }
// }
//
// describeBurger(beanBurger)
// describeBurger(turkeyBurger)

//Ternary Operators
//#1
//
// const oldEnough = (age) => {
//   return age >= 18 ? `They are ${age}, they are old enough to vote!` : `They are ${age}, they are too young to vote!`
// }
//
// console.log(oldEnough(18));
// console.log(oldEnough(17));

//#2
// const oddOrEven = (array) => {
//   let whatever = [...array]
//   return whatever.map(value => value % 2 === 0 ? "even" : "odd")
// }
//
//testArray = [1, 2, 3, 4]
// console.log(oddOrEven(testArray));
