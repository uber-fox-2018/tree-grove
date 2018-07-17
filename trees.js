"use strict"

// Release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor () {
    this._age= 0
    this._mature_age= 5
    this._stop_grow_age= 10
    this._max_age= 20
    this._height= 0
    
    this.fruitAmount= 0
    this.fruitArr=[]
    this._healthStatus= true
    this._harvested=0
    
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height.toFixed(1) + ' m '
  }

  get fruits () {
    return this.fruitAmount
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
   
    debugger
    if (this._age<this._max_age) {
      this._age++
    }
    
    if (this._age<= this._stop_grow_age) {
      this._height+= (Math.random() * 10)/10    
      let trim= this.height
      
    } 
 
    else if (this._age===this._max_age) {
      this._healthStatus = false
    }
  }

  // Produce some mangoes
  produceFruits () {
    let fruitAmount= Math.round(Math.random()*20)
    this.fruitAmount= fruitAmount
    var fruitArr=[]
    
    for (let i=1; i<=fruitAmount; i++) {
      let produce= new Fruit()
      fruitArr.push(produce.checkMethod())
    }
    this.fruitArr=fruitArr
    var fruitArr=[]
  }

  // Get some fruits
  harvest () {
    var countGood= 0
    var countBad= 0
    let fruitArr= this.fruitArr

    for (let i=0; i<fruitArr.length; i++) {
      if (fruitArr[i]==='good') {
        countGood++
      } else {
        countBad++
      }
    }

    
    this._harvested=this.fruitAmount + ' (Good: '+ countGood + ' Bad: '+ countBad +')'
    this.fruitAmount= 0 

  }
}

class Fruit {
  // Produce a fruit
  constructor () {
    this.qc=''
  }

  checkMethod () {
    let random= Math.floor(Math.random()*2)
    if (random===0) {
      return 'bad'
    } else {
      return 'good'
    }
  }
}



// OTHER FRUITS
class MangoTree extends FruitTree{
  constructor(){
    super()
  }
}

class Mango extends Fruit{
  constructor(){
    super()
  }
}


class AppleTree extends FruitTree{
  constructor(){
    super()
    this._mature_age= 6
    this._stop_grow_age= 12
    this._max_age= 25
  }
}

class Apple extends Fruit{
  constructor(){
    super()

  }
}

class PearTree extends FruitTree{
  constructor(){
    super()
    this._mature_age= 9
    this._stop_grow_age= 14
    this._max_age= 27
  }
}

class Pear extends Fruit{
  constructor(){
    super()

  }
}
/*
console.log(`The tree is alive! :smile:`)
 let mangoTree = new MangoTree()
 do {
    mangoTree.grow();
    mangoTree.produceFruits();
    mangoTree.harvest();
    //console.log(mangoTree.fruitArr)
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
 } while (mangoTree.healthStatus != false)
 console.log(`The tree has met its end. :sad:`)
 console.log(`============================================================================`)


 console.log(`The tree is alive! :smile:`)
 let appleTree = new AppleTree()
 do {
    appleTree.grow();
    appleTree.produceFruits();
    appleTree.harvest();
    //console.log(mangoTree.fruitArr)
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
 } while (appleTree.healthStatus != false)
 console.log(`The tree has met its end. :sad:`)
 console.log(`============================================================================`)


 console.log(`The tree is alive! :smile:`)
 let pearTree = new PearTree()
 do {
    pearTree.grow();
    pearTree.produceFruits();
    pearTree.harvest();
    //console.log(mangoTree.fruitArr)
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
 } while (pearTree.healthStatus != false)
 console.log(`The tree has met its end. :sad:`)
 console.log(`============================================================================`)
*/

 module.exports = {
    AppleTree:AppleTree,
    MangoTree:MangoTree,
    PearTree:PearTree
 }