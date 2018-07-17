"use strict"

class AppleTree {

  constructor (treeName, ageFirstPlanted, heightFirstPlanted, ageMature, healthStatus) {
    this._treeName = treeName
    this._matureAge = ageMature
    this._limitAge = 20
    this._limitHeight = 15
    this._age = 0 || ageFirstPlanted
    this._height = 0 || heightFirstPlanted
    this._fruits = []
    this._healthStatus = healthStatus
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height.toFixed(2)
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return this._harvest
  }
  // Get current states here

  // Grow the tree
  grow () {
    if(this._age < this._limitAge - 1){
        this._age++
        this._fruits = []
    } else {
        this._age++
        this._healthStatus = false
    }

    let temp = this._height + Math.random()
    if(this._height < this._limitHeight){
        this._height = temp
    } else {
        this._height = this._limitHeight
    }
  }

  // Produce some mangoes
  produceMangoes () {
    let countMango = Math.floor(Math.random() * 4) + 1
    let mangoQty = ['GOOD', 'BAD']

    if(this._age >= this._matureAge){
      for(let i = 0; i < countMango; i++){
        let randomQty = Math.floor(Math.random() * 2)
        this._fruits.push(mangoQty[randomQty]);
      }
    }
  }

  // Get some fruits
  harvest () {
    let mangoGood = 0
    let mangoBad = 0

    for(let i = 0; i < this._fruits.length; i++){
      if(this._fruits[i] == 'GOOD'){
        mangoGood++
      } else {
        mangoBad++
      }
    }

    this.quality = `${mangoGood} Good and ${mangoBad} Bad`
  }

}

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harvest();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthStatus != false)
  */

// console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.fruits.length} (${mangoTree.quality})`)

module.exports = AppleTree