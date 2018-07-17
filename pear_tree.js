"use strick"

const FruitTree = require('./fruitTree');

class PearTree extends FruitTree {
    constructor (name, age, height, matureAge, healthStatus) {
        super(name, age, height, matureAge, healthStatus)
        this._matureAge = 10; 
        this._die = 20; 
    }
}

module.exports = PearTree
  