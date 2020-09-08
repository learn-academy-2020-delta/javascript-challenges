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
function combineArrays(arrOne, arrTwo) {
  return [...arrOne, ...arrTwo]
}

console.log(combineArrays([2, 4, 2], [4, 6, 11]))


