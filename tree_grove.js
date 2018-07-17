const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this._trees = [];
    }

    inputTree(name, initAge, initHeight, matureAge, healthStatus) {
        let tree;

        switch (name) {
            case "MangoTree": tree = new MangoTree(name, initAge, initHeight);
                break;
            case "AppleTree": tree = new AppleTree(name, initAge, initHeight);
                break;
            case "PearTree": tree = new PearTree(name, initAge, initHeight);
                break;
            default:
                tree = null;
        }

        if (tree !== null) {
            tree.mature_age = matureAge;
            tree.health_status = healthStatus;
            this._trees.push(tree);
        }
    }

    nextYear() {
        this._trees.forEach(tree => {
            tree.grow();
            tree.produceFruits();
            tree.harvest();
        });
    }

    showTrees() {
        this._trees.forEach(tree => {
            if (tree.health_status === true)
                console.log(`${tree.name}'s height is now ${tree.height} meter`)
        });
    }

    showAges() {
        this._trees.forEach(tree => {
            if (tree.health_status !== true)
                console.log(`${tree.name} is now ${tree.age} years old.`);
        });
    }

    showMatureTrees() {
        this._trees.forEach(tree => {
            if (tree.age >= tree.mature_age &&
                tree.health_status === true)
                console.log(`Fruits harvested from ${tree.name} = ${tree.harvested}`);
        });
    }

    showDeadTrees() {
        this._trees.forEach(tree => {
            if (tree.health_status !== true)
                console.log(`${tree.name} is now dead. :(`);
        });
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
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

//print report for 20 years
for (let year = 1; year <= 20; year++) {
    // next year
    grove.nextYear();

    console.log(`[Year ${year} report]`)
    // show trees
    console.log('\nTrees:')
    grove.showTrees();

    // show trees ages
    console.log('\nTrees Ages:')
    //grove.showAges();

    // show trees
    console.log('\nMature Trees:')
    grove.showMatureTrees();

    // show trees
    console.log('\nDead Trees:')
    grove.showDeadTrees();
    console.log('\n')
}



