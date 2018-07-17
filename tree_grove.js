const imports = require('./trees.js');
const MangoTree = imports.MangoTree
const AppleTree = imports.AppleTree
const PearTree = imports.PearTree

class TreeGrove {
    constructor () {
        this.trees = []
    }
    inputTree(name,age,height,matureAge,lives) {
        if (name === 'MangoTree') {
            var mangoTree = new MangoTree(name, age, height, matureAge, lives)
            this.trees.push(mangoTree)
        } else if (name === 'AppleTree') {
            var appleTree = new AppleTree(name, age, height, matureAge, lives)
            this.trees.push(appleTree)
        } else if (name === "PearTree") {
            var pearTree = new PearTree(name, age, height, matureAge, lives)
            this.trees.push(pearTree)
        }
    }
    nextYear() {
        let res = ''
        for (let i = 0 ; i < this.trees.length; i++) {
            this.trees[i].grow();
            this.trees[i].produce();
            this.trees[i].harvest();
            res += `${this.trees[i].__proto__.constructor.name} akan berumur ${this.trees[i]._age} tahun dengan perkiraan tinggi ${this.trees[i]._height.toFixed(1)} m\n`
        }
        return res
    }
    showAges() {
        let res = ''
        for (let i = 0; i < this.trees.length; i++) {
            res += `${this.trees[i].__proto__.constructor.name} sekarang berumur ${this.trees[i]._age}\n`
        }
        return res
    }
    showTrees() {
        let res = ''
        let nameTrees = []
        let quantityTrees = []
        for (let i = 0; i < this.trees.length; i++) {
            if (nameTrees.length === 0) {
                nameTrees.push(this.trees[i].__proto__.constructor.name)
                quantityTrees.push(1)
            } else {
                let temp = true
                for (let j = 0; j < nameTrees.length; j++) {
                    if (nameTrees[j] === this.trees[i].__proto__.constructor.name) {
                        temp = false
                        quantityTrees[j] += 1
                    }
                }
                if (temp) {
                    nameTrees.push(this.trees[i].__proto__.constructor.name)
                    quantityTrees.push(1)
                }
            }
        }
        for (let k = 0; k < nameTrees.length; k++) {
            res += `ada ${quantityTrees[k]} ${nameTrees[k]} di TreeGrove anda\n`
        }
        return res
    }
    showMatureTrees() {
        let res = ''
        for (let i = 0; i < this.trees.length; i++) {
            if (this.trees[i]._age === this.trees[i]._matureGrow) {
                res += `${this.trees[i].__proto__.constructor.name} sekarang berumur ${this.trees[i]._age} tahun dan siap berbuah\n`
            }
        }
        return res
    }
    showDeadTrees() {
        let res = ''
        let trigger = false
        for (let i = 0; i < this.trees.length; i++) {
            if (this.trees[i]._age === this.trees[i]._matureGrow) {
                res += `${this.trees[i].__proto__.constructor.name} telah mencapai usia maksimal hidupnya\n`
                trigger = true
            }
        }
        if (trigger) {
            return res
        }
        return 'tidak ada pohon yg mati di TreeGrove anda'
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

// next year
console.log(grove.nextYear())

// show trees ages
console.log(grove.showAges())

// show trees
console.log(grove.showTrees())

// show trees
console.log(grove.showMatureTrees())

// show trees
console.log(grove.showDeadTrees())
