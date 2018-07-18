const FruitTree = require('./fruit_tree')

"use strict"


class PearTree extends FruitTree{

  constructor (name, age, height) {
    super(name, age, height)
    this.age_limit = 15
    this.height_limit = 10
    this.mature = 6
    this.max_height = 2
    this.max_produce = 10
  }
}

module.exports = PearTree