"use strict"

class AppleTree{

  constructor (name, age, height, mature) {
      this._name = name
      this._age = age
      this._height = height
      this._mature = mature
      this._ageLimit = Math.floor(Math.random()*10)+1
      this._harvested = 0
      this._healthStatus = true
      this._fruits = []
      this._quality = ''
  }
  
  get name(){
    return this._name
  }
  
  get age() {
    return this._age    
  }

  get height () {
    return this._height
  }

  get ageLimit(){
    return this._ageLimit
  }
  
  get mature () {
    return this._mature
  }

  get harvested () {
    return this._harvested
  }
  
  get healthStatus () {
    return this._healthStatus
  }
  
  get fruits () {
    return this._fruits
  }

  grow () {
    let heightPlus =  1 + Math.random(2)

    if (this._age < this._ageLimit-1){
      this._fruits = []
      this._age++
      this._height += heightPlus
    }else {
      this._age++
      this._height += heightPlus
      this._healthStatus = false
    }
  }

  produceMangoes () {
    let randomProduce = 1 + Math.floor(Math.random()*5)
    let randomQuality = ['Good','Bad']
    
    if (this._age >= this._mature){
      for (let i = 0 ; i < randomProduce ; i++){
        let randomIndexQuality = Math.floor(Math.random()*2)
        this._fruits.push(randomQuality[randomIndexQuality])
      }
    }  
  }
  
  harvest () {
      let qGood = 0
      let qBad = 0
      for (let i = 0 ; i < this._fruits.length ; i++){
          if (this._fruits[i] === 'Good'){
              qGood ++
            }else {
                qBad ++
            }
        }
        this._harvested = qGood + qBad
        if (this._harvested !== 0){
      this._quality = `(${qGood} good, ${qBad} bad)`
    }else {
      this._quality = ''
    } 
  }
}

// for (let i = 0 ; i < fruitArr.length ; i++){
//   do {
//     fruitArr[i].grow();
//     fruitArr[i].produceMangoes();
//     fruitArr[i].harvest();
//     console.log(`[Year ${fruitArr[i].age} Report] Height = ${fruitArr[i]._height.toFixed(2)} m | Fruits harvested = ${fruitArr[i].harvested} ${fruitArr[i]._quality}`)
//     } while (fruitArr[i].healthStatus !== false)
// }    

module.exports = AppleTree