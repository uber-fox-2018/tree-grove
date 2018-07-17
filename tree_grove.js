const trees= require('./mango_tree.js')
const MangoTree = trees.MangoTree;
const AppleTree = trees.AppleTree;
const PearTree = trees.PearTree;

class TreeGrove {
    constructor(){
        this._grove = [];

    }
    //input current data of all kinds of trees
    inputTree(name, age, height, matureAge){
        if(name === "MangoTree"){
			this._grove.push(new MangoTree(age, height, matureAge));
		}
		else if(name === "AppleTree"){
			this._grove.push(new AppleTree(age, height, matureAge));
		}
		else if(name === "PearTree"){
			this._grove.push(new PearTree(age, height, matureAge));
		}
    }
    //grow, produceFruits
    nextYear(){
        for(let tree of this.trees){
			tree.grow();
		}
    }

    //show the ages of each tree in the grove
    get trees(){
		return this._grove;
	}

	showAges(){
		for(let tree of this.trees){
			console.log(`${tree._name} : ${tree._age}`)
		}
	}

    //return all names of trees in the grove
    showTrees(){
        let trees = [];
        for(let tree of this.trees){
			trees.push(`${tree._name}`);
        }
        return trees;
    }

    //return all names of tress that produce fruits
    showMatureTrees(){
        let matureTrees = [];
        for(let tree of this.trees){
            if(tree._age >= tree.matureAge && tree._age < tree.rip ){
                matureTrees.push(`${tree._name}`);
            }
        }
        return matureTrees;
    }

    //return names of dead trees
    showDeadTrees(){
        let deadTrees = [];
        for(let tree of this.trees){
            if(tree._age >= tree.rip){
                deadTrees.push(`${tree._name}`);
            }
        }
        return deadTrees;
    }
}

// /* ===================================================== */
// //Starts from here are outside the class TreeGrove
var grove = new TreeGrove()
// // input your trees data !
// // parameter ke-1: nama pohon
// // parameter ke-2: umur pohon ketika ditanam di taman tersebut
// // pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// // parameter ke-4: umur mature pohon tersebut
// // parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7)
grove.inputTree("MangoTree", 5, 2.4, 12)
grove.inputTree("AppleTree", 4, 1.2, 5)
grove.inputTree("PearTree", 7, 2, 15)


// next year
let num = 10;
while(num>0){
    grove.nextYear()
    num--;
}

// show trees ages
grove.showAges()

// show trees
console.log(grove.showTrees());

// show trees
console.log(grove.showMatureTrees());

// show trees
console.log(grove.showDeadTrees());
