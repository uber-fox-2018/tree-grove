const MangoTree = require('./mango_tree.js')
const AppleTree = require('./apple_tree.js')
const PearTree = require('./pear_tree.js')

class TreeGrove {
    constructor(){
        this._tree = []
    }

    inputTree(param_name, param_age, param_height, param_mature, param_status){
        let input 

        if (param_name == 'MangoTree'){
            input = new MangoTree (param_name, param_age, param_height)
        }else if (param_name == 'PearTree'){
            input = new PearTree (param_name, param_age, param_height)
        }else if (param_name == 'AppleTree'){
            input = new AppleTree (param_name, param_age, param_height)
        }else {
            input = null
        }

        if (input !== null)[
            
            input.param_mature = param_mature
            input.param_status = param_status
            this._tree.push(tree)
        ]
    }

    nextYear(){
        console.log('nextyear')
        // console.log(this._tree)
        
        this._tree.forEach(trees => {
            console.log('asd');
            
            trees.grow()
            trees.produced()
            trees.harvest()
        })
    }


    showAges(){
        this._tree.forEach(trees => {
            if (trees.param_status !== true){
                console.log(`${trees.param_name} umurnya adalah : ${trees.param_age} tahun`);
            }
        })
    }

    showTrees(){
        this._tree.forEach(trees => {
            if (trees.param_status == true){
                console.log(`${trees.param_name} tingginya adalah : ${trees.param_height} meter`);
            }
        })
    }
    
    showMatureTrees(){
        this._tree.forEach(trees => {
            if (trees.age >= trees.mature && trees.healtStatus == true){
                console.log(`${trees.param_name} berbuah : ${trees.msg}`);
            }
        })
    }

    showDeadTrees(){
        this._tree.forEach(trees => {
            if (trees.param_status === false){
                console.log(`${trees.param_name} sudah mati :sad:`);
            }
        })
    }
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 2, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

for (let i = 1 ; i <= 15 ; i++){
    
    // next year
    grove.nextYear()

    // show trees ages
    grove.showAges()

    // show trees
    grove.showTrees()

    // show trees
    grove.showMatureTrees()

    // show trees
    grove.showDeadTrees()
}