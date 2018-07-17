const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');
var pohonMangga = new MangoTree
var pohonApple = new AppleTree
var pohonPear = new PearTree

class TreeGrove {
    constructor(){
        this.tree = []
    }
    inputTree(nama,age,height,mature,healthStatus){ // input pohon
        if(nama === 'MangoTree'){
            pohonMangga = new MangoTree(nama,age,height,mature,healthStatus)
            this.tree.push(pohonMangga)
        }else if(nama === 'AppleTree'){
            pohonApple = new AppleTree(nama,age,height,mature,healthStatus)
            this.tree.push(pohonApple)
        }else if(nama === 'PearTree'){
            pohonPear = new PearTree(nama,age,height,mature,healthStatus)
            this.tree.push(pohonPear)
        }
        

        
        
    }
    nextYear(){
        for(let i = 0 ; i < this.tree.length ; i++){
            this.tree[i].grow()
        }
        // mangoTree.grow()
        // console.log(this.tree[0])
    }
    showAges(){ // display umur jika pohon tidak mati
        for(let i = 0 ; i < this.tree.length ; i++){
            if(this.tree[i]._age <= this.tree[i]._batasUmur){
                console.log('Umur dari',this.tree[i]._name+': '+this.tree[i].age)
            }
            
        }
    }
    showTrees(){ // diplay nama pohon jika pohon tiidak mati
        var namaPohon = []
        for(let i = 0 ; i < this.tree.length ; i++){
            if(this.tree[i]._age <= this.tree[i]._batasUmur){
                namaPohon.push(this.tree[i]._name)
            }
            
        }
        console.log('Berikut pohon yang berada di grove:',namaPohon)
    }
    showMatureTrees(){ // diplay pohon yang sedang berbuah
        var res = []
        for(let i = 0 ; i < this.tree.length ; i++){
            if(this.tree[i]._age >= this.tree[i]._mature && this.tree[i]._age <= this.tree[i]._batasUmur){
               res.push(this.tree[i]._name)
            }
        }
        if(!res[0]){
            console.log('Sayangnya pohon anda tidak ada yang berbuah')
        }else{
            console.log('Pohon anda sedang berbuah :',res)
        }
    }
    showDeadTrees(){ // diplay pohon yang mati
        var res = []
        for(let i = 0 ; i < this.tree.length ; i++){
            if(this.tree[i]._healthStatus === false){
                res.push(this.tree[i]._name)
            }
        }
        if(!res[0]){
            console.log('Yeay, pohon anda tidak ada yang mati')
        }else{
            console.log('Pohon di grove ada yang mati, yaitu :',res)
        }
    }
}

var grove = new TreeGrove()


// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 2, 2, 15, true)

// console.log(grove.tree[3]._name)
// next year
grove.nextYear()    
// console.log(grove.tree)
// grove.nextYear() 
// grove.nextYear() 
// // show trees ages
grove.showAges()

// // show trees
grove.showTrees()

// // show trees
grove.showMatureTrees()

// // show trees
grove.showDeadTrees()