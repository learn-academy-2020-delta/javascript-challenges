//Challenge #1

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

var blackCoffee = new Coffee("Black", 0, 0)
var sweetCoffee = new Coffee("Sweet", 1, 2)
var sugarCoffee = new Coffee("Sugar", 0, 2)


console.log(blackCoffee);
console.log(sweetCoffee);
console.log(sugarCoffee);

console.log(blackCoffee.coffeeProfile());
console.log(sweetCoffee.coffeeProfile());
console.log(sugarCoffee.coffeeProfile());
