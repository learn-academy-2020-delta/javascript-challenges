//inheritence

class Car {
  constructor(){
    this.doors = 4
    this.wheels = 4
    this.model = "generic car"
    this.year = 2020

  }

  howManyWheels(){
    return `this car has ${this.wheels} wheels`
  }
}

var myCar = new Car()
//   constructor(){
//     this.model = "generic car"
//   }

console.log(myCar);
console.log(myCar.howManyWheels());
