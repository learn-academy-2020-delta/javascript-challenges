class Car {
  constructor(model, year) {
    this.model = model,
    this.year = year,
    this.numWheels = 4
  }

  numWheels() {
    return `Your car has ${this.numWheels} wheels.`
  }
}

var myCar = new Car("generic car", "myCar year")

class Tesla extends Car {
  constructor(model, year) {
    super(model, year)
  }
}

var myTesla = new Tesla("Model S", "2020")

class Toyota extends Car {
  constructor(model, year) {
    super(model, year)
  }
}

var myToyota = new Toyota("Camry", "2006")

class Volkswagen extends Car {
  constructor(model, year) {
    super(model, year)
  }
}

var myVolkswagen = new Volkswagen("Beetle", "1970")
