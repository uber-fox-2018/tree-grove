class AppleTree {

    // Initialize a new MangoTree
    constructor (nama,age,height,mature,healthStatus) {
      this._name = nama
      this._age = age || 0
      this._height = height
      this._fruits = []
      this._healthStatus = healthStatus
      this._mature = mature
      this._batasUmur = 10
      this._batasTinggi = 8
      this._maxHarvest = 10
      this._quality = ''
  
    }
  
    get age () {
      return this._age
      
    }
  
    get height () {
      return this._height
    }
  
    get fruits () {
      return this._fruits
    }
  
    get healthStatus () {
      return this._healthStatus
    }
  
    get harvested () {19
      return this._quality
    }
  
    // Get current states here
  
    // Grow the tree
    grow () {
      if(this._age < this._batasUmur-1){
        this._age++
      }else{
        this._age++
        this._healthStatus = false
      }
      
      var tinggi = this._height + Math.random()
      var potong = String(tinggi).slice(0,4)
      if(tinggi<= this._batasTinggi){
        this._height = Number(potong)
      }else{
        this._height = this._batasTinggi
      }
  
    }
  
    // Produce some mangoes
    produceMangoes () {
      var buah = 0
      
      if(this._age>=this._mature){
        buah = Math.floor(1+ Math.random() * 10)
        for(let i = 0 ; i < buah ;i++){
          this._fruits.push(new Mango)
        }
      }
      
    }
  
    // Get some fruits
    harvest () {
      var goodQuality = 0
      var badQuality = 0
      // console.log(thihealthStatuss._fruits)
      for(let i = 0 ; i < this._fruits.length ; i++){
        // console.log(this._fruits[i].quality)
        if(this._fruits[i].quality === 'good'){
          goodQuality++
        }else{
          badQuality++
        }
      }
      this._quality = this.fruits.length + ' | ' + goodQuality +' good, ' + badQuality +' bad'
      this._fruits.length = 0
    }
  }
  
  class Apple {
    // Produce a mango
    constructor () {
      this.kualitas = ['bad','good']
      this.quality = this.kualitas[Math.floor(Math.random() * 2)]
    }
  }
  
  // driver code untuk release 0
  let pohonBuah = new AppleTree()
//   console.log(mangoTree.age)
//   do {
  pohonBuah.grow();
  pohonBuah.produceMangoes();
  pohonBuah.harvest();
    // console.log(`[Year ${mangoTree.age} Report Mango tree] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
//   } while (mangoTree.healthStatus != false)

module.exports = AppleTree
