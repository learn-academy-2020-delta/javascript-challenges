//inheritence

class Car {
  constructor(model, year){
    this.wheels = 4
    this.model = model
    this.year = year
    this.lights = "Off"
    this.signal = "Off"
    this.speed = 0

  }

  howManyWheels(){
    return `this car has ${this.wheels} wheels`
  }

  toggleLights(state){
    if (state === "On") {
      this.lights = "On"
    }else {
      this.lights = "Off"
    }
    return `the lights are ${this.lights}`

  }

  toggleSignal(state){
    if (state === "Left") {
      this.signal = "Left"
    }else if (state === "Right"){
      this.signal = "Right"
    }else {
      this.signal = "Off"
    }
    return `the turn signal is ${this.signal}`
  }

  accelerate(mph){
    this.speed += mph
    return `The current speed of the ${this.model} is ${this.speed} mph`


    // if (this.speed - mph >= 0) {
    //   this.speed -= mph
    //   // console.log(this.speed);
    // } else if (this.speed - mph < 0) {
    //   this.speed = 0
    //   // console.log(this.speed);
    //
    // } else {
      // this.speed += mph
    // }
    // return `The current speed is ${this.speed} mph`
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
class Volkswagen extends Car {
  constructor(model, year) {
    super(model, year)
  }
}
var myCar = new Car("generic", 2020)
var myTesla = new Tesla("Model S", 2019)
var myToyota = new Toyota("Camary", 2014)
var myVolkswagen = new Volkswagen("Passat", 2013)


console.log(myCar);
console.log(myCar.howManyWheels());
console.log(myTesla);
console.log(myTesla.howManyWheels());
console.log(myToyota);
console.log(myToyota.howManyWheels());
console.log(myVolkswagen);
console.log(myVolkswagen.toggleLights("On"));
console.log(myVolkswagen);
console.log(myTesla.toggleSignal("Left"));
console.log(myTesla);
console.log(myTesla.accelerate(10));
console.log(myTesla.accelerate(-7));
console.log(myToyota.accelerate(5));
console.log(myToyota.accelerate(-2));
console.log(myVolkswagen.accelerate(7));
console.log(myVolkswagen.accelerate(-5));
