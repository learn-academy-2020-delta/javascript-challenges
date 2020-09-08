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
//
// var blackCoffee = new Coffee("coffee", 0, 0);
// var normalCoffee = new Coffee("coffee", 1, 2);
// var secondCoffee = new Coffee("coffee", 0, 2);
// console.log(secondCoffee.coffeeProfile());

class Latte {
  constructor(milk, milkType, numberOfShots) {
    this.flavor = flavor,
    this.milkType = milkType,
    this.numberOfShots = numberOfShots,
  }

  latteProfile() {
    return `flavor: ${flavor}, milk type: ${milkType}, number of shots: ${numberOfShots}`
  }
}
