//Challenge #1

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

class LatteMaker {
  constructor(flavor, milktype, numshots){
    this.flavor = flavor.toLowerCase()
    this.milktype = milktype
    this.numshots = numshots
  }

  latteProfile(){
    return(`${this.flavor}: ${this.milktypes()}, ${this.numbershots()}`)
  }

  milktypes(){
    if (this.milktype === "almond"){
      return `${this.milktype} milk`
    } else if (this.milktype === "regular"){
      return `${this.milktype} milk`
    } else {
      return "no milk"
    }
    //return `${this.milktype} milk`
  }

  numbershots(){
    if (this.numshots > 1){
      return `${this.numshots} shots`
    } else {
      return `${this.numshots} shot`
    }
  }
}

// var blackCoffee = new Coffee("Black", 0, 0)
// var sweetCoffee = new Coffee("Sweet", 1, 2)
// var sugarCoffee = new Coffee("Sugar", 0, 2)
//
// console.log(blackCoffee);
// console.log(sweetCoffee);
// console.log(sugarCoffee);
//
// console.log(blackCoffee.coffeeProfile());
// console.log(sweetCoffee.coffeeProfile());
// console.log(sugarCoffee.coffeeProfile());

var regularLatte = new LatteMaker("Regular", 0, 1)
var doubleShotLatte = new LatteMaker("Hazelnut", "almond", 2)

console.log(regularLatte.latteProfile());
console.log(doubleShotLatte.latteProfile());
