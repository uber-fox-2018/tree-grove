"use strict"
const FruitTree = require('./fruit_tree.js')

class AppleTree extends FruitTree{
  constructor(name, age, height, mature, healthStatus){
    super(name, age, height, mature, healthStatus)
    this.heightMax = 14
    this.ageMax = 29
  }
}

module.exports = AppleTree
