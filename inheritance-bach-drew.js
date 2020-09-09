// Javascript Class Inheritance

class Car {
    constructor(model, year) {
        this.model = model
        this.year = year
        this.wheels = 4
        this.lights = "off"
        this.signal = "off"
        this.speed = 0
    }
    lightSwitch() {
        if(this.lights === "off") {
            this.lights = "on"
        } else if (this.lights === "on") {
            this.lights = "off"
        }
    }
    turnSignal() {
        if(this.signal === "off") {
            this.signal = "on"
        } else if (this.signal === "on") {
            this.signal = "off"
        }
    }
    fullSpeed() {
        this.speed += 10
    }
    fullBrake() {
        this.speed -= 7
    }
    leastSpeed() {
        this.speed += 5
    }
    leastBrake() {
        this.speed -= 2
    }
    halfSpeed() {
        this.speed += 7
    }
    halfBrake() {
        this.speed -= 5
    }
    carInfo() {
        return `The car's model is a ${ this.year } ${ this.model}. It has ${ this.wheels} wheels. It's lights are currently in the ${ this.lights} position. It's turning signals are currently ${ this.signal }. It's current speed is ${ this.speed }.`
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
// Story: As a programmer, I can make a car.
//Write a variable called myCar which is an instance of the class Car
var myCar = new Car("generic car", "my car year")
// console.log(myCar)

// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// console.log(myCar)

// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
// console.log(myCar)

// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4
// console.log(myCar.wheels)

// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
var myTesla = new Tesla()
// console.log(myTesla)

// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
var myNewTesla = new Tesla("Model S")
// console.log(myNewTesla)

// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
myNewTesla = new Tesla("Model S", "2015")
// console.log(myNewTesla)

// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
var myToyota = new Toyota()
// console.log(myToyota)

// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
var myToyota = new Toyota("Camry")
// console.log(myToyota)

// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
myToyota = new Toyota("Camry", 2000)
// console.log(myToyota)

// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
var myVolkswagen = new Volkswagen()
// console.log(myVolkswagen)

// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
var myVolkswagen = new Volkswagen("Buggy")
// console.log(myVolkswagen)

// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
var myVolkswagen = new Volkswagen("Buggy", 1993)
// console.log(myVolkswagen)

// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
// console.log(myVolkswagen)
// Story: As a programmer, I can turn the lights in all my cars on and off.
myVolkswagen.lightSwitch()
// console.log(myVolkswagen)

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
myVolkswagen.turnSignal()
// console.log(myVolkswagen)

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.
// console.log(myVolkswagen)

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.
myTesla.fullSpeed()
// console.log(myTesla)

// Story: As a programmer, I can slow my Tesla down by 7 per braking.
myTesla.fullBrake()
// console.log(myTesla)

// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.
myToyota.leastSpeed()
// console.log(myToyota)

// Story: As a programmer, I can slow my Toyota down by 2 per braking.
myToyota.leastBrake()
// console.log(myToyota)

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.
myVolkswagen.halfSpeed()
// console.log(myVolkswagen)
// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.
myVolkswagen.halfBrake()
// console.log(myVolkswagen)

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.*/
console.log(myVolkswagen.carInfo())