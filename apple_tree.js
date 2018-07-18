const FruitTree = require('./fruit_tree')

"use strict"

class AppleTree extends FruitTree{

  constructor (name, age, height) {
    super(name, age, height)
    this.age_limit = 15 
    this.height_limit = 10
    this.mature = 6
    this.max_height = 1
    this.max_produce = 5
  }
}

module.exports = AppleTree