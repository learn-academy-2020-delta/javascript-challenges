//inheritence

class Car {
  constructor(model, year){
    this.wheels = 4
    this.model = model
    this.year = year
  }

  howManyWheels(){
    return `this car has ${this.wheels} wheels`
  }
}

class Tesla extends Car {
  constructor(model, year) {
    super(model, year)
  }
}

class Toyota extends Car {
  constructor(model, year) {
    super(model, year)
  }
}

var myCar = new Car("generic", 2020)
var myTesla = new Tesla("Model S", 2019)
var myToyota = new Toyota("Camary", 2014)


console.log(myCar);
console.log(myCar.howManyWheels());
console.log(myTesla);
console.log(myTesla.howManyWheels());
console.log(myToyota);
console.log(myToyota.howManyWheels());
