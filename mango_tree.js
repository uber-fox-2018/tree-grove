const FruitTreeModule = require('./fruit_tree.js');
const FruitTree = FruitTreeModule.FruitTree
const Fruit = FruitTreeModule.Fruit
  
  
  class MangoTree extends FruitTree{
    constructor (name,age,height,matureAge,healthStatus){
      super()
      this._age = age
      this._height = height
      this._matureAge = matureAge
      this._stopGrowing = 13
      this.die = 15
      this._healthStatus = healthStatus 
      this.name = name
    }
  }
  class Mango extends Fruit {
    constructor (){
      super()
    }
  }

  module.exports = {MangoTree : MangoTree,Mango : Mango}
