const FruitTree = require('./fruit_tree')

"use strict"

class MangoTree extends FruitTree{

  constructor (name, age, height) {
    super(name, age, height)
    this.age_limit = 15
    this.height_limit = 10
    this.mature = 9
    this.max_height = 3
    this.max_produce = 15
  }
}

module.exports = MangoTree