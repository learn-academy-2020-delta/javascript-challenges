// Javascript Classes

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

// Write the code that makes a black coffee.

var blackCoffee = new Coffee("black", 0, 0);
// console.log(blackCoffee)


// Write the code that makes a coffee with 1 cream and 2 sugars.

var basicCoffee = new Coffee("basic", 1, 2);
// console.log(basicCoffee);

// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.

var noCream = new Coffee("nocream", 0, 2);
// console.log(noCream.coffeeProfile());


// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.

class Latte {
  constructor(flavor, milkType, shots){
    this.flavor = flavor
    this.milkType = milkType
    this.shots = shots
  }

  profile(){
    return `${this.flavor}: ${this.milkType}, ${this.shots}`;
  }
}

var newLatte = new Latte();
// console.log(newLatte);

// Write a method for your Latte class that outputs the latte's profile.

var normalLatte = new Latte("mocha", "normal", 1).profile()
// console.log(normalLatte);

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

var regularLatte = new Latte("regular", "no milk", 1).profile()
// console.log(regularLatte)

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

var hazelnutLatte = new Latte("hazelnut", "almond milk", 2).profile()
// console.log(hazelnutLatte)


// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class VolOfCylinder {
  constructor(radius, height) {
    this.radius = radius
    this.height = height
  }

  calculation() {
    return Math.PI * Math.pow(this.radius, 2) * this.height
  }
}

var testCylinder = new VolOfCylinder(1,1).calculation()
// console.log(testCylinder)

// Write the code that creates three unique cylinder objects
var testCylinder1 = new VolOfCylinder(2,4).calculation() //50.27
var testCylinder2 = new VolOfCylinder(5,10).calculation() //785.4
var testCylinder3 = new VolOfCylinder(8,12).calculation() //2412.74
// console.log(testCylinder1)
// console.log(testCylinder2)
// console.log(testCylinder3)

