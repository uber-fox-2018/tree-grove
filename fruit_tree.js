"use strict"

// Release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor (name, age, height, mature, healthStatus) {
    this._name = name
    this._mature = mature
    this._age = age
    this._healthStatus = healthStatus
    this._height = height
    this._fruits = []
    this._harvested = ''
    this.heightMax = 12
    this.ageMax = 15
  }
  get mature (){
    return this._mature
  }
  set age (num){
    this._age+=num
  }
  get age () {
    return this._age
  }
  set height(num) {
    this._height+=num
  }
  get height () {
    return this._height.toFixed(2)
  }

  set fruits (input) {
    if (input  === '') {
      this._fruits = []
    } else {
      this._fruits.push(input)
    }
  }

  get fruits () {
    return this._fruits
  }

  set healthStatus (input) {
    this._healthStatus = input
  }
  get healthStatus () {
    return this._healthStatus
  }
  set harvested(input) {
    this._harvested = input
  }

  get harvested () {
    return this._harvested
  }
  // Get current states here

  // Grow the tree
  grow () {
    this.age = 1
    if (this.age <= this.heightMax){
      this.height = Math.random()*5
    }
    if (this.age >= this.ageMax){
      this.healthStatus = false
    }
  }

  // Produce some mangoes
  produceFruit () {
    // let mango = input    
    if (this.age >= this.mature){
      let totFrt = Math.round(Math.random()*10)
      for (let i = 0; i < totFrt; i++){
        this.fruits = new Fruit ()
      }
    }
  }

  // Get some fruits
  harvest () {
    let fruits = this.fruits
    let counterG = 0
    let counterB = 0
    for (let i = 0; i < fruits.length; i++){
      if (fruits[i]._quality === 'good'){
        counterG++
      } else {
        counterB++
      }  
    }
    this.harvested = `${fruits.length} (${counterG} good, ${counterB} bad)`
    this.fruits = ''
  }
}

class Fruit {
  //Produce a mango
  constructor () {
    this._quality = this.randomQuality()
  }
  randomQuality(){
    let qlt = ['good','bad']
    let result = ''+qlt[Math.floor(Math.random()*2)]
    return result;
  }
}


module.exports = FruitTree 

// Release 1
// class AppleTree {}
// class Apple {}

// Release 2
// class FruitTree {}
// class Fruit {}




