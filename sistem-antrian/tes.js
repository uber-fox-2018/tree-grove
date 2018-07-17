class MangoTree {
  constructor (){
    this.fruit = new Mango ()
  }
}

class Mango {
  constructor(){
    this.name = 'mango'
  }
}

let poon = [2,'a']

console.log(typeof JSON.stringify(poon))