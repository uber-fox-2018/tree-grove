const FruitModule = require('./fruit_tree.js');
const FruitTree = FruitModule.FruitTree;
const Fruit = FruitModule.Fruit;

class MangoTree extends FruitTree {
    constructor(name, initAge, initHeight) {
        super(name, initAge, initHeight);
        this.age_limit = 40;
        this.height_limit = 40;
        this.mature_age = 4;
        this._max_height_per_year = 3;
        this.max_fruits_produced = 10;
    }
}

class Mango extends Fruit {
    constructor() {
        super();
    }
}

module.exports = MangoTree;