const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor(){
        this._treegrove = [];
    }

    get treeGrove(){
        return this._treegrove
    }

    // cek input untuk melakukan proses sesuai nama dan class
    inputTree(name, age, height, matureAge, healthStatus) {
        if (name === 'MangoTree'){
            let mangoTree = new MangoTree (name, age, height, matureAge, healthStatus)
            this._treegrove.push(mangoTree);
        } else if (name === 'AppleTree'){
            let appleTree = new AppleTree (name, age, height, matureAge, healthStatus)
            this._treegrove.push(appleTree);
        } else if (name === 'PearTree'){
            let pearTree = new PearTree (name, age, height, matureAge, healthStatus)
            this._treegrove.push(pearTree);
        }
    }
    
    nextYear(){
        for (let i in this.treeGrove) {
            this.treeGrove[i].grow()
        }
    }

    showAges(){
        console.log('Umur pohon disini:')
        for(let i in this.treeGrove) {
            if (this.treeGrove[i]._age >= this.treeGrove[i]._die){
                console.log(`${this.treeGrove[i]._name} : ${this.treeGrove[i]._age} (sudah mati :/)`);
            } else {
                console.log(`${this.treeGrove[i]._name} : ${this.treeGrove[i]._age}`)
            }
        }
    }

    showTrees(){
        let treeName = []
        for(let i in this.treeGrove){
            treeName.push(this.treeGrove[i]._name)
        }
        console.log(`Ada pohon: ${treeName.join(', ')}`)
    }

    matureTrees(){
        let treeMatured = []
        for(let i in this.treeGrove){
            if (this.treeGrove[i]._age >= this.treeGrove[i]._matureAge && this.treeGrove[i]._age < this.treeGrove[i]._die) treeMatured.push(this.treeGrove[i]._name)
        } 
            
        if (treeMatured.length === 0){
            console.log('Belum ada pohon yang sudah berbuah')
        } else {
            console.log(`Pohon yang sudah berbuah: ${treeMatured.join(', ')}`)
        }
    }
    
    deadTrees(){
        let treeDead = []
        for(let i in this.treeGrove){
            if (this.treeGrove[i]._age >= this.treeGrove[i]._die) treeDead.push(this.treeGrove[i])
        } 
        
        if (treeDead.length === 0){
            console.log('Belum ada pohon yang mati')
        } else {
            console.log(`Pohon yang sudah mati: ${treeDead.join(', ')}`)
        }
    }
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7,true)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)

// next year
grove.nextYear()

// show trees age
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.matureTrees()

// show trees
grove.deadTrees()