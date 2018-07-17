const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');
// let mango = new MangoTree()
// let apple = new AppleTree()
// let pear = new PearTree()
class TreeGrove {
    constructor(){
        this.tree = []
    }

    inputTree(name, age, height, mature, healthStatus){
        let tree = null
        if (name === 'MangoTree'){
            tree = new MangoTree(name, age, height, mature, healthStatus)
        }
        if (name === 'AppleTree'){
            tree = new AppleTree(name, age, height, mature, healthStatus)
        }
        if (name === 'PearTree'){
            tree = new PearTree(name, age, height, mature, healthStatus)
        }

        this.tree.push(tree)
    }

    nextYear(){
        for (let i = 0; i < this.tree.length; i++){
            this.tree[i].grow();
            this.tree[i].produceFruit();
            this.tree[i].harvest();
        }
    }

    showAges(){
        let arr = []
        for (let i = 0; i < this.tree.length; i++){
            arr.push(this.tree[i]._age)
        }
        console.log(arr)
    }

    showTrees(){
        let arr = []
        for (let i = 0; i < this.tree.length; i++){
            arr.push(this.tree[i]._name)
        }
        console.log(arr)
    }

    showMatureTrees(){
        let arr = []
        for (let i = 0; i < this.tree.length; i++){
            if (this.tree[i]._age >= this.tree[i]._mature && this.tree[i]._age < this.tree[i].ageMax){
                arr.push(this.tree[i]._name)
            }
        }
        console.log(arr)
    }

    showDeadTrees(){
        let arr = []
        for (let i = 0; i < this.tree.length; i++){
            if (this.tree[i]._age > this.tree[i].ageMax){
                arr.push(this.tree[i]._name)
            }
        }
        console.log(arr)
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
grove.inputTree("PearTree", 7, 2, 15, true)

console.log(grove.tree)
//next year
for (let i = 0; i < 22; i++){
    grove.nextYear()
}


// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
