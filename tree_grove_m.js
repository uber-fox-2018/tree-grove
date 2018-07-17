const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');
let mangoTree = new MangoTree
let appleTree = new AppleTree
let pearTree = new PearTree

class TreeGrove {
    constructor(){
        this.grove = []
    }

    inputTree(treeName, ageFirstPlanted, heightFirstPlanted, ageMature, healthStatus){

        if(treeName == 'MangoTree'){
            mangoTree = new MangoTree(treeName, ageFirstPlanted, heightFirstPlanted, ageMature, healthStatus)
            this.grove.push(mangoTree)
        } else if(treeName == 'AppleTree'){
            appleTree = new AppleTree(treeName, ageFirstPlanted, heightFirstPlanted, ageMature, healthStatus)
            this.grove.push(appleTree)
        } else if(treeName == 'PearTree'){
            pearTree = new PearTree(treeName, ageFirstPlanted, heightFirstPlanted, ageMature, healthStatus)
            this.grove.push(pearTree)
        }
        
    }

    showAges(){
        let showAge = []
        for(let i = 0; i < this.grove.length; i++){
            showAge.push(this.grove[i]._treeName + ' berumur '  + this.grove[i]._age + ' tahun')
        }
        console.log('Nama buah dan umurnya ', showAge)
    }

    showTrees(){
        let treeInGrove = []
        for(let i = 0; i < this.grove.length; i++){
           treeInGrove.push(this.grove[i]._treeName)
        }
        console.log('Tanaman yang ada dikebun adalah  ', treeInGrove)
    }

    showMatureTrees(){
        let matureInGrove = []
        for(let i = 0; i < this.grove.length; i++){
           if(this.grove[i]._age >= this.grove[i]._matureAge){
              matureInGrove.push(this.grove[i]._treeName)
           }
        }
        console.log('Tanaman yang sudah mature adalah ', matureInGrove)
    }

    showDeadTrees(){
        let deadTrees = []
        for(let i = 0; i < this.grove.length; i++){
            if(this.grove[i]._healthStatus == false){
                deadTrees.push(this.grove[i]._name)
            }
        }
        console.log('Tanaman yang sudah mati dikebun  ', deadTrees)
    }

    nextYear(){
        for(let i = 0; i < this.grove.length; i++){
            this.grove[i].grow()
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
grove.inputTree("MangoTree", 8, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

// next year
grove.nextYear()

// // show trees ages
grove.showAges()

// // show trees
grove.showTrees()

// // show trees
grove.showMatureTrees()

// // show trees
grove.showDeadTrees()
