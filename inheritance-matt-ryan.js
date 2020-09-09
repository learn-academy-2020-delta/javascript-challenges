// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4
// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
//
// Story: As a programmer, I can turn the lights in all my cars on and off.
//
// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
class Car {
  constructor(model, year) {
    this.model = "generic car"
    this.year = "myCar year"
    this.wheels = 4
    this.lights = "off"
    this.signal = "off"
    this.speed = 0
  }


  lightSwitch(){
    if(this.lights === "off"){
      return this.lights = "on"
    }
    else
      return this.lights = "off"
    }

  teslaAcceleration() {
    this.speed += 10
    return `you've accelerated to ${this.speed}mph`
  }

  teslaBrakes() {
    this.speed -= 7
    return `you've slowed down to ${this.speed}mph`
  }

  toyotaAcceleration() {
    this.speed += 5
    return `you've accelerated to ${this.speed}mph`
  }

  toyotaBrakes() {
    this.speed -= 2
    return `you've slowed down to ${this.speed}mph`
  }

  volksAccel() {
    this.speed += 7
    return `you've accelerated ${this.speed}mph`
  }

  volksBrakes() {
    this.speed -= 5
    return `you've slowed down to ${this.speed}mph`
  }
  carInfo(){
  return `${this.model} ${this.year} ${this.wheels} ${this.lights} ${this.speed}`
  }
}
var myCar = new Car()

class Tesla extends Car{
  constructor(model, year) {
    super(model, year)
    this.model = "model s"
    this.year = 2020
  }
}
var myTesla = new Tesla
console.log(myTesla.carInfo())
// console.log(myTesla)
// console.log(myTesla.lightSwitch())
// console.log(myTesla)

class Toyota extends Car {
  constructor(model, year){
    super(model, year)
    this.model = "camry"
    this.year = 2016
  }
}
var myToyota = new Toyota
// console.log(myToyota)
class Volkswagen extends Car {
  constructor(){
    super()
    this.model = "gulf"
    this.year = 1989
  }
}
