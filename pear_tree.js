const FruitModule = require('./fruit_tree.js');
const FruitTree = FruitModule.FruitTree;
const Fruit = FruitModule.Fruit;

class PearTree extends FruitTree {
    constructor(name, initAge, initHeight) {
        super(name, initAge, initHeight);
        this.age_limit = 20;
        this.height_limit = 18;
        this.mature_age = 4;
        this._max_height_per_year = 2;
        this.max_fruits_produced = 10;
    }
}

class Pear extends Fruit {
    constructor() {
        super();
    }
}

module.exports = PearTree;