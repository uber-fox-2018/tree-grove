const FruitTreeModule = require('./fruit_tree.js');
const FruitTree = FruitTreeModule.FruitTree
const Fruit = FruitTreeModule.Fruit
  
  
  class PearTree extends FruitTree{
    constructor (name,age,height,matureAge,healthStatus){
        super()
        this._age = age
        this._height = height
        this._matureAge = matureAge
        this._stopGrowing = 18
        this.die = 20
        this._healthStatus = healthStatus 
        this.name = name
      }
  }
  class Pear extends Fruit {
    constructor (){
      super()
    }
  }

  module.exports = {PearTree : PearTree,Pear : Pear}
