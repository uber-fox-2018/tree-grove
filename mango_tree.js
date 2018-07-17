"use strict"

const FruitTree = require('./fruit_tree.js')

class MangoTree extends FruitTree{
  constructor(name, age, height, mature, healthStatus){
    super(name, age, height, mature, healthStatus)
  }
}

module.exports = MangoTree
