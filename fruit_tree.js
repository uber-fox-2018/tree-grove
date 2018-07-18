"use strict"

class FruitTree {
    constructor(name, initAge, initHeight){
        this.name = name || ''
        this._age = initAge || 0
        this._height = initHeight || 0
        this._fruits = []
        this._healthStatus = true
        this._msg = ''
        this._max_produce = 0
        this._mature = 0
        this._ageLimit = 0
        this._heightLimit = 0
        this._max_height = 0
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

  get msg (){
    return this._msg
  }
  
  get healthStatus () {
    return this._healthStatus
  }

  set healthStatus (param){
    this._healthStatus
  }

  get age_limit (){
    return this._ageLimit
  }

  set age_limit (param){
    this._ageLimit = param
  }

  get height_limit (){
    return this._heightLimit
  }

  set height_limit (param){
    this._heightLimit = param
  }

  get mature (){
    return this._mature
  }

  set mature (param){
    this._mature = param
  }

  get max_height (){
    return this._max_height
  }

  set max_height (param){
    this._max_height = param
  }

  get max_produce (){
    return this._max_produce
  }

  set max_produce (param){
    this._max_produce = param
  }

  grow () {
    let heightRandom =  1 + Math.random(2)

    if (this._age < this._ageLimit-1){
      this._age++
    }else {
      this._age++
      this._healthStatus = false
    }
    
    if (this.height < this._heightLimit){
      this._height += heightRandom
    }else {
      this._height += 0
    }
  }

  produced () {
    if (this._age >= this._mature){
      let randomProduce = 1 + Math.floor(Math.random()*5)
      for (let i = 0 ; i < randomProduce ; i++){
        this._fruits.push(new Mango)
      }
    }  
  }

  harvest () {
    let qGood = 0
    let qBad = 0
    
    for (let i = 0 ; i < this._fruits.length ; i++){
      if (this._fruits[i]._quality === 'good'){
        qGood ++
      }else {
        qBad ++
      }
    }
    this._result = `${this._fruits.length} (${qGood} good, ${qBad} bad)`
    this._fruits = []
  }
}

class Fruit {
    constructor(){
        this._quality = Math.floor(Math.random()*2) === 0 ? 'bad' : 'good'
    }
}

module.exports = FruitTree