const FruitTreeModule = require('./fruit_tree.js');
const FruitTree = FruitTreeModule.FruitTree
const Fruit = FruitTreeModule.Fruit
  
  
  class AppleTree extends FruitTree{
    constructor (name,age,height,matureAge,healthStatus){
        super()
        this._age = age
        this._height = height
        this._matureAge = matureAge
        this._stopGrowing = 15
        this.die = 17
        this._healthStatus = healthStatus 
        this.name = name
      }
  }
  class Apple extends Fruit {
    constructor (){
      super()
    }
  }

  module.exports = {AppleTree : AppleTree,Apple : Apple}
