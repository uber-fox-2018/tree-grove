const MangoTreeModul = require('./mango_tree.js');
const MangoTree = MangoTreeModul.MangoTree
const Mango = MangoTreeModul.Mango

const AppleTreeModul = require('./apple_tree.js');
const AppleTree = AppleTreeModul.AppleTree
const Apple = AppleTreeModul.Apple

const PearTreeModul = require('./pear_tree.js');
const PearTree = PearTreeModul.PearTree
const Pear = PearTreeModul.Pear



class TreeGrove {
  constructor() {
    this._trees = []
  }

  inputTree(name, age, height, matureAge, healthStatus) {
    if (name == 'MangoTree') {
      let mangoTree = new MangoTree(name,age, height, matureAge, healthStatus)
      this._trees.push(mangoTree)
      
    }
    else if (name == 'AppleTree') {
      let appleTree = new AppleTree(name,age, height, matureAge, healthStatus)
      this._trees.push(appleTree)
      
    }
    else if (name == 'PearTree') {
      let pearTree = new PearTree(name,age, height, matureAge, healthStatus)
      this._trees.push(pearTree)
      
    }
  }
  showTrees() {

    this._trees.forEach(function(element) {
      console.log('Nama: ' + element.name)
    });
    

  }
  showAges() {

    this._trees.forEach(function(element) {
      console.log('Umur ' + element.name + ': ' + element.age +
                  ' |tinggi : ' + element.height + 'm')
    });

    

  }
  showMatureTrees() {

    this._trees.forEach(function(element) {
      if (element.age >= element.die){
        console.log(element.name +' sudah tidak berbuah sudah mati')
      }
      else if (element.age >= element._matureAge) {
        console.log(element.name +' berbuah ' + element.harvested)
      }
      
      else {
        console.log(element.name +' belum bisa panen')
      }
    });

   

  }
  showDeadTrees() {

    this._trees.forEach(function(element) {
      if (element.age < element.die) {
        console.log(element.name +' tumbuh')
      }
      else if (element.age >= element.die) {
        
        console.log(element.name +' mati')
      }
    });

    

  }

  nextYear() {
    for (let i = 0; i < this._trees.length; i++) {
      this._trees[i].grow();
      this._trees[i].produceFruites();
      this._trees[i].harvest();

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
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

// next year
for (let i = 1; i < 25; i++) {
  console.log('laporan tahun ke ' + i)
  grove.nextYear()
  grove.showTrees()
  grove.showAges()
  grove.showMatureTrees()
  grove.showDeadTrees()
  console.log('\n')
}


// // show trees ages
