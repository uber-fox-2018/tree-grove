class FruitTree {

    constructor(name, initAge, initHeight) {
        this.name = name || '';
        this._age = initAge || 0;
        this._height = initHeight || 0;
        this._fruits = [];
        this._health_status = true;
        this._harvest_message = '';
        this._max_fruits_produced = 0;
        this._mature_age = 0;
        this._age_limit = 0;
        this._height_limit = 0;
        this._max_height_per_year = 0;
    }

    get age() {
        return this._age;
    }

    get height() {
        return this._height.toFixed(2);
    }

    get fruits() {
        return this._fruits;
    }

    get health_status() {
        return this._health_status;
    }

    set health_status(value) {
        this._health_status = value;
    }

    get harvested() {
        return this._harvest_message;
    }

    get mature_age() {
        return this._mature_age;
    }

    set mature_age(value) {
        this._mature_age = value;
    }

    get age_limit() {
        this._age_limit;
    }

    set age_limit(value) {
        this._age_limit = value;
    }

    set height_limit(value) {
        this._height_limit = value;
    }

    set max_height_per_year(value) {
        this._max_height_per_year = value;
    } 

    set max_fruits_produced(value) {
        this._max_fruits_produced = value;
    }

    // Grow the tree
    grow() {
        if (this._age < this._age_limit - 1)
            this._age++;
        else {
            this._age++;
            this._health_status = false;
        }


        let temp = this._height + (Math.random() * this._max_height_per_year);
        if (temp <= this._height_limit)
            this._height = temp;
        else {
            this._height = this._height_limit;
        }

    }

    // Produce some fruits
    produceFruits() {
        let fruitCount;
        if (this._age >= this._mature_age) {
            fruitCount = Math.floor(Math.random() * this._max_fruits_produced) + 1;
            for (let i = 0; i < fruitCount; i++) {
                this._fruits.push(new Fruit());
            }
        }
    }

    // Get some fruits
    harvest() {
        let badCount = 0, goodCount = 0;
        for (let i = 0; i < this._fruits.length; i++) {
            if (this.fruits[i].quality === 'good')
                goodCount++;
            else
                badCount++;
        }
        this._harvest_message = `${this._fruits.length} (${goodCount} good, ${badCount} bad)`;
        this._fruits.length = 0;
    }
}

class Fruit {
    constructor() {
        this.quality = Math.floor(Math.random() * 2) === 0 ? 'bad' : 'good';
    }
}

module.exports = {
    FruitTree: FruitTree,
    Fruit: Fruit
}