const FruitModule = require('./fruit_tree.js');
const FruitTree = FruitModule.FruitTree;
const Fruit = FruitModule.Fruit;

class AppleTree extends FruitTree {
    constructor(name, initAge, initHeight) {
        super(name, initAge, initHeight);
        this.age_limit = 20;
        this.height_limit = 10;
        this.mature_age = 3;
        this._max_height_per_year = 1;
        this.max_fruits_produced = 10;
    }
}

class Apple extends Fruit {
    constructor() {
        super();
    }
}

module.exports = AppleTree;