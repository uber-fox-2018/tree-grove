const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor(){
        this._fruits = []
    }

    inputTree(name, age, height, mature){
        if (name === 'MangoTree'){
            var mangos = new MangoTree (name, age, height, mature)
            this._fruits.push(mangos)
        }else if (name === 'AppleTree'){
            var apples = new AppleTree (name, age, height, mature)
            this._fruits.push(apples)
        }else if (name === 'PearTree'){
            var pears = new PearTree (name, age, height, mature)
            this._fruits.push(pears)
        }
        
    }

    showAges(){
        // console.log('showAges');
        console.log('\nUmur pohon yang ada ditaman:');
        console.log('=============================');
        for (let i = 0 ; i < this._fruits.length ; i++){
            console.log(`- ${this._fruits[i].name} ${this._fruits[i]._age} tahun`)
        }
    }

    showTrees(){
        // console.log('showTrees');
        console.log('\nPohon yang ada ditaman:');
        console.log('=============================');
        for (let i = 0 ; i < this._fruits.length ; i++){
            console.log(`- ${this._fruits[i].name}`)
        }
    }
    
    showMatureTrees(){
        // console.log('showMatureTrees');
        console.log('\nPohon yang sedang berbuah:');
        console.log('=============================');
        for (let i = 0 ; i < this._fruits.length ; i++){
            if (this._fruits[i].age >= this._fruits[i]._mature){
                console.log(`- ${this._fruits[i].name}`)
            }else {
                console.log(`- `);
                
            }
        }
    }

    showDeadTrees(){
        // console.log('showDeadTrees');
        console.log('\nPohon yang sudah mati:');
        console.log('=============================');
        for (let i = 0 ; i < this._fruits.length ; i++){
            if (this._fruits[i].age >= this._fruits[i].__ageLimit){
                console.log(`- ${this._fruits[i].name}`)
            }else {
                console.log(`- `);
                
            }
        }

    }

    // nextYear(){
        
    // }

}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 2)
grove.inputTree("AppleTree", 4, 1.2, 5)
grove.inputTree("PearTree", 7, 2, 15)
// grove.inputTree("MangoTree", 5, 2.4, 2)

// next year
// grove.nextYear()

// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
