class Coffee {
    constructor(type, cream, sugar){
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar
    }
  
    coffeeProfile(){
      return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
    }
  
    creams(){
      if (this.cream > 1){
        return `${this.cream} creams`
      } else {
        return `${this.cream} cream`
      }
    }
  
    sugars(){
      if (this.sugar > 1){
        return `${this.sugar} sugars`
      } else {
        return `${this.sugar} sugar`
      }
    }
  }

//   var blackCoffee = new Coffee("black", 0, 0)
//   console.log(blackCoffee);
//   var sweetAndCreamyCoffee = new Coffee("Sweet and Creamy", 1, 2)
//   console.log(sweetAndCreamyCoffee);
//   var sweetCoffee = new Coffee("Sweet", 0, 2)
//   console.log(sweetCoffee);

class Latte {
    constructor(flavor, milkType, numberOfShots) {
        this.flavor = flavor.toLowerCase()
        this.milkType = milkType.toLowerCase()
        this.numberOfShots = numberOfShots
    }

    profile() {
        return (`Your latte is ${ this.flavor }, made with ${ this.milkType } milk, and has ${ this.numberOfShots } shot in it.`)
    } 
}

// var singleShotLatte = new Latte("vanilla", "almond", 1)
// console.log(singleShotLatte.profile());
// var doubleShotLatte = new Latte("hazelnut", "almond", 2)
// console.log(doubleShotLatte.profile());

class Cylinder {
    constructor(radius, height) {
        this.radius = radius
        this.height = height
    }

    volume() {
        return (3.14 * (this.radius ** 2) * this.height)
    }
}
var cylinder1 = new Cylinder(10, 4)
console.log(cylinder1.volume());
var cylinder2 = new Cylinder(7, 8)
console.log(cylinder2.volume());
var cylinder3 = new Cylinder(2, 3)
console.log(cylinder3.volume());


