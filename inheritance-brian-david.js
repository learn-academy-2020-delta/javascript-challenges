class Car {
    constructor(model, year) {
        this.model = model,
            this.year = year,
            this.wheels = 4
        this.lights = "off"
        this.signal = "off"
        this.speed = 0
        this.accel = 0
        this.decel = 0
    }

    numWheels() {
        return `Your car has ${this.wheels} wheels.`
    }

    switchLights() {
        if (this.lights === "off") {
            return this.lights = "on"
        }
        else if (this.lights === "on") {
            return this.lights = "off"
        }
        else {
            return "Lights error..."
        }
    }

    switchSignal() {
        if (this.signal === "off") {
            return this.signal = "on"
        }
        else if (this.signal === "on") {
            return this.signal = "off"
        }
        else {
            return "Signal error..."
        }
    }

    speedUp() {
        return this.speed += this.accel
    }

    slowDown() {
        return this.speed -= this.decel
    }

    carInfo() {
        return `You are now the proud owner of a ${this.year} ${this.model}. Your car has ${this.wheels} wheels. Your lights are ${this.lights}. Your turn signal is ${this.signal}. Your current speed is ${this.speed}. You may acclerate ${this.accel}mph. You may decelerate ${this.decel}mph. Enjoy!!!`
    }
}
var myCar = new Car("generic car", "myCar year")



class Tesla extends Car {
    constructor(model, year) {
        super(model, year)
        this.accel = 10
        this.decel = 7
    }
}
var myTesla = new Tesla("Model S", "2020")



class Toyota extends Car {
    constructor(model, year) {
        super(model, year)
        this.accel = 5
        this.decel = 2
    }
}
var myToyota = new Toyota("Camry", "2006")



class Volkswagen extends Car {
    constructor(model, year) {
        super(model, year)
        this.accel = 7
        this.decel = 5
    }
}
var myVolkswagen = new Volkswagen("Beetle", "1970")

myVolkswagen.speedUp()
console.log(myVolkswagen.speed);
myVolkswagen.slowDown()
console.log(myVolkswagen.speed);
console.log(myVolkswagen.carInfo());
