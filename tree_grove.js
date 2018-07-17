const imports= require('./trees.js')
const MangoTree = imports.MangoTree
const AppleTree = imports.AppleTree
const PearTree = imports.PearTree


class TreeGrove {
    constructor(num) {
        this._tree_data=[]
        this._label
    }

    inputTree(pohon, umurA, tinggiA, umurB, sehat) {
        var Obj={}
        Obj.name= pohon
        Obj.age= umurA
        Obj.height= tinggiA
        Obj.age_mature= umurB
        Obj.health_status= sehat

        this._tree_data.push(Obj)
    }

    nextYear(num) {
        for (let i=0; i<this._tree_data.length; i++) {
            this._tree_data[i]['age']= this._tree_data[i]['age'] + num
        }      
    }

    showAges() {
        let source= this._tree_data
    
        for (let i=0; i<source.length; i++) {
            console.log (source[i]['name']+ ' => age:' + source[i]['age'] )
        }
    }

    showTrees() {
        let source= this._tree_data
        var label=[]

        for (let i=0; i<source.length; i++) {
            if (label.indexOf(source[i]['name'])===-1) {
                label.push(source[i]['name'])
            }
        }
        this._label= label

        for (let i=0; i<label.length; i++) {
            var count=0

            for (let j=0; j<source.length; j++) {
                if (label[i]===source[j]['name']) {
                    count++
                }
            }
            console.log(label[i] +' jumlahnya adalah ' + count)
        }
    }


    showMatureTrees() {
        let source= this._tree_data
        var display=[]

        for (let i=0; i<source.length; i++) {
          if (source[i]['age']>=source[i]['age_mature']) {
              display.push(source[i]['name'])
          }
        } 
        console.log ('Pohon yang sudah usia mature: '+ display)

    }
 
    showDeadTrees() {
        let source= this._tree_data
        var result=[]
        
        let apple= new AppleTree()
        var apple_max= apple._max_age
        //console.log(apple_max)

        let mango= new MangoTree()
        var mango_max= mango._max_age
        //console.log(mango_max)

        let pear= new PearTree()
        var pear_max= pear._max_age
        //console.log(pear_max)

        for (let i=0; i<source.length; i++) {
            if (source[i]['name']==='MangoTree' && source[i]['age']>=mango_max) {
                result.push(source[i]['name'])
            }

            else if (source[i]['name']==='AppleTree' && source[i]['age']>=apple_max) {
                result.push(source[i]['name'])
            }

            else if (source[i]['name']==='PearTree' && source[i]['age']>=pear_max) {
                result.push(source[i]['name'])
            }

        }

        console.log ('Pohon yang mati: ' + result)

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
grove.nextYear(1)           // <= Input how many years in future do you want to see

// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()

//console.log (grove._tree_data)