"use strict"

// Release 2

class FruitTree {

  constructor (name, age = 0, height = 0, matureAge = 0, lives= true) {
    this._name = name
    this._age = age;
    this._height = height;
    this._fruits = [];
    this._harvested = 0; 
    this._healthStatus = lives;
    this._qualityGood = 0;
    this._qualitybad = 0;
    this._matureGrow  = matureAge;
    this._maxAge = 50;

  }

  get age () {
    return this._age
  }

  get height () {
    return this._height.toFixed(1)
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return ` ${this._fruits} (${this._qualityGood} good, ${this._qualitybad} bad)`
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age += 1
    if (this._height < 10) {
      this._height += Math.random()*(0.4 - 0.2) + 0.2
    }
  }

  // Produce some mangoes
  produce () {
    if (this._age >= this._matureGrow) {
      this._fruits = []
      this._qualitybad = 0
      this._qualityGood = 0
      let fruitsQuantity = Math.round(Math.random()*(12-3)+3)
      

      for (let i = 0; i < fruitsQuantity;i++) {
        let fruit = new Mango()
        this._fruits.push(fruit)
      }
    }
  }

  // Get some fruits
  harvest () {
    this._harvested = 0
    let num = this._fruits.length
    this._harvested += num
    
    for (let i = 0; i < this._fruits.length;i++) {
      if (this._fruits[i]._quality === true) {
        this._qualityGood += 1
      } else {
        this._qualitybad += 1
      }
    }

    if (this._age === this._maxAge) {
      this._healthStatus = false
    }
    
  }
}
class Fruit {
  constructor () {
    this.qualityNumber = this.qualityTester();
    this._quality = this.quality();
  }

  quality() {
    if (this.qualityNumber > 5) {
      return this._quality = 'Good'
    } else {
      return this._quality = 'Bad'
    }
  }
  qualityTester () {
    let randomNum = Math.round(Math.random()*(10-1)+1)
    return this.qualityNumber = randomNum 
  }
}


// Release 0

class MangoTree extends FruitTree {
  constructor (name, age, height, matureAge, lives) {
    super(name, age, height, matureAge, lives)
  }
  // Initialize a new MangoTree
  
}

class Mango extends Fruit{
  // Produce a mango
  constructor () {
    super()
  }
}

// Release 1
class AppleTree extends FruitTree{
  constructor(name, age, height, matureAge, lives) {
    super(name, age, height, matureAge, lives)
  }
}
class Apple extends Fruit{
  constructor () {
    super()
  }
}

class PearTree extends FruitTree{
  constructor(age, height, matureAge, lives) {
    super(age, height, matureAge, lives)
  }
}
class Pear extends Fruit{
  constructor () {
    super()
  }
}

//  driver code untuk release 0
//  let mangoTree = new MangoTree()
//  do {
//  mangoTree.grow();
//  mangoTree.produceMangoes();
//  mangoTree.harvest();
//  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree._harvested} (Good: ${mangoTree._qualityGood} | Bad: ${mangoTree._qualitybad} )`)
// } while (mangoTree._healthStatus != false)
 

module.exports = {
  AppleTree:AppleTree,
  MangoTree:MangoTree,
  PearTree:PearTree
}