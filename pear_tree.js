"use strict"

const FruitTree = require('./fruit_tree.js')

class PearTree extends FruitTree{
  constructor(name, age, height, mature, healthStatus){
    super(name, age, height, mature, healthStatus)
    this.heightMax = 16
    this.ageMax = 21
  }
}

module.exports = PearTree
