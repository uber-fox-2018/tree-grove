"use strick"

const FruitTree = require('./fruitTree');

class MangoTree extends FruitTree {
	constructor (name, age, height, matureAge, healthStatus) {
		super(name, age, height, matureAge, healthStatus)
    	this._matureAge = 5;
    	this._die = 15;
  	}
}

module.exports = MangoTree