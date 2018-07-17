"use strick"

const FruitTree = require('./fruitTree');

class AppleTree extends FruitTree {
    constructor (name, age, height, matureAge, healthStatus) {
        super(name, age, height, matureAge, healthStatus);
        this._matureAge = 1; 
        this._die = 11;
    }
}

module.exports = AppleTree