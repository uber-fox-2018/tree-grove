"use strict"

// Release 0

class FruitTree {

  // Initialize a new FruitTree
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = 0
    this._healthStatus = true
    this._matureAge = 2
    this._stopGrowing = 15
    this.die = 20
    this._harvested = 0
    this.name = ''
    
    
    
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height.toFixed(2)
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return this._harvested
  }

  // Get current states here

  // Grow the tree
  grow () {
    
    if (this._age < this.die-1) {
      this._age++  
      
      
      if (this.age > this._stopGrowing){
        this._height = this._height
      }

      else if (this. age <= this._stopGrowing) {
        this._height += (Math.random() * 5)
      }

      
    }
       
    else  if (this._age === this.die-1){
      this._age++
      this._healthStatus = false
    }
    

     
}

  // Produce some Fruites
  produceFruites () {
    
    if (this._age >= this._matureAge){
      this._fruits += Math.round(Math.random()*10) 
    }
    
  }

  // Get some fruits
  harvest () {
     
    let mangga = new Fruit(this.fruits)
    mangga.kualitas(this._fruits)

    if (this.age >= this._matureAge){
      this._harvested = this._fruits + '  ('  + mangga.good + ' good, ' + mangga.bad + ' bad)'
    }
    this._fruits = 0
  }

}

class Fruit {
  // Produce a Fruit
  constructor () {
    this.good = 0
    this.bad = 0
    
  }

  kualitas (fruits) {
    for (let i=0 ; i < fruits ; i++) {
      let random = Math.round(Math.random())
      if (random == 1){
        this.good += 1
      }
      else if (random ==0){
        this.bad +=1
      }
    }
  }
  
}

  
// Release 3
class AppleTree extends FruitTree{
  constructor (){
    super()
    this._matureAge = 3
    this._stopGrowing = 16
    this.die = 25
  }
}
class Apple extends Fruit{
  constructor (){
    super()
  }
}


class ManggoTree extends FruitTree{
  constructor (){
    super()
    this._matureAge = 1
    this._stopGrowing = 13
    this.die = 15
    
  }
}
class Manggo extends Fruit {
  constructor (){
    super()
  }
}



// driver code untuk release 0

module.exports = {FruitTree:FruitTree , Fruit : Fruit}