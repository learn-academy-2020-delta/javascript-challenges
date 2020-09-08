// class Coffee {
//     constructor(type, cream, sugar){
//       this.type = type.toLowerCase()
//       this.cream = cream
//       this.cream = 0
//       this.sugar = sugar
//       this.sugar = 0
//     }
  
//     coffeeProfile(){
//       return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//     }
  
//     creams(){
//       if (this.cream > 1){
//         return `${this.cream} creams`
//       } else {
//         return `${this.cream} cream`
//       }
//     }
  
//     sugars(){
//       if (this.sugar > 1){
//         return `${this.sugar} sugars`
//       } else {
//         return `${this.sugar} sugar`
//       }
//     }
//     addSugars() {
//         this.sugar += 1
//     }
  
//     addCreams() {
//         this.cream += 1
//     }
// }

// var blackCoffee = new Coffee ('black coffee')
//     console.log(blackCoffee.coffeeProfile());
    

// var newCoffee1 = new Coffee ('Coffee w/ cream')
//     newCoffee1.addCreams();
//     newCoffee1.addSugars();
//     newCoffee1.addSugars();
//     console.log(newCoffee1.coffeeProfile());

// var newCoffee2 = new Coffee ("Coffee w/ sugar")
//     newCoffee2.addSugars();
//     newCoffee2.addSugars();
//     console.log(newCoffee2.coffeeProfile())

class Latte {
    constructor(flavor, milk, shots) {
      this.flavor = flavor
      this.flavor = "regular"
      this.milk = milk
      this.milk = 0
      this.shots = shots
      this.shots = 0
    }

    latteProfile(){
        return(`${this.flavors}: ${this.milks()}, ${this.shot()}`)
      }
   
      flavors(){
        if (this.flavor === "string"){
          return `${this.flavor} flavor`
        } else {
          return `${this.flavor} flavor`
        }
      }
      milks(){
        if (this.milk === "string"){
          return `${this.milk} milk`
        } else {
          return `${this.milk} milk`
        }
      }
    
      shot(){
        if (this.shots > 1){
          return `${this.shots} shots`
        } else {
          return `${this.shots} shots`
        }
      }
    addShot() {
        this.shots += 1
    }
    
}
    var newLatte = new Latte ()
        newLatte.addShot()
        console.log(newLatte.latteProfile());
