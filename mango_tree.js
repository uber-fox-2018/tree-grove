"use strict"

// Release 0

class FruitTree {
  // Initialize a new MangoTree
  constructor (name, age, height, matureAge, oldAge, rip) {
    this._name = name
    this._age = age || 0
    this._height = height || 0
    this._fruits=[]
    this.matureAge = matureAge
    this.oldAge = oldAge
    this.rip = rip
    this._healthStatus = true
  }
  get name(){
    return this._name;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height.toFixed(1);
  }

  get fruits () {
     return this._fruits;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._report;
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age ++;
    if(this._age <= this.oldAge){
      this._height += Math.random()*5;
    }else if(this._age === this.rip){
      this._healthStatus = false;
    }
  }

  // Produce some mangoes
  produceFruits () {
    if(this._age >= this.matureAge && this._age <=this.rip){
      let result=[];
      let numbers = Math.floor(Math.random()*5+1);
      while(numbers>0){
        let quality =  Math.floor(Math.random()*2);
        let fruit = new Fruit();
        this._fruits.push(fruit);
        numbers--;
      }
    }
  }

  // Get some fruits
  harvest () {
    let fruits = this.fruits;
    let good=0;
    let bad=0;
    let total = this._fruits.length;
    for(let fruit of fruits){
      if(fruit.quality==="good"){
        good++;
      }else{
        bad++;
      }
    }
    this._report = `${total} (${good} good, ${bad} bad)`;
    this._fruits.length = 0;
  }

}

class Fruit {
  // Produce a mango
  constructor (quality="good") {
    this.quality = (Math.floor(Math.random()*2) ? "good":"bad")
  }

}

class MangoTree extends FruitTree{
  constructor(age, height, matureAge){
    super("MangoTree",age, height, matureAge, 9, 11)
  }
}
class AppleTree extends FruitTree{
  constructor(age, height, matureAge){
    super('AppleTree', age, height, matureAge, 10, 15)
  }
}
class PearTree extends FruitTree{
  constructor(age, height, matureAge){
    super('PearTree', age, height, matureAge, 7, 15)
  }
}

module.exports ={
	MangoTree : MangoTree,
	AppleTree : AppleTree,
	PearTree : PearTree
};
