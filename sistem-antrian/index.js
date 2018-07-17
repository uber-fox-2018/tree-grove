const argv = process.argv
const Queue = require('./queue')
const fs = require('fs')
const LayananCustomerService = require('./layanan-customer-service')
const LayananTeller = require('./layanan-teller')
var command = argv[2]



class Index {
  constructor() {
    this._data = //your code here
    this._cs = new LayananCustomerService() //your code here: silakan menambahkan parameter sesuai dengan kebutuhan kamu
    this._teller = new LayananTeller() ////your code here: silakan menambahkan parameter sesuai dengan kebutuhan kamu
    this._queue = new Queue()

  }

  readFile() {
    //your code here
   var antrian = fs.readFileSync('./antrian.json','utf8')
   var obj = JSON.parse(antrian)
    return obj
  }

  writeFile(dataParsing) {
    //your code here
    fs.writeFileSync('antrian.json',JSON.stringify(dataParsing))
  }
  
  choose(menuNo) {
    //your code here
    var dataParsing = this.readFile()
    
    if(menuNo === 'help'){
      console.log('Menu :')
      console.log('1. Ambil Antrian Costumer Service : node index.js 1')
      console.log('2. Ambil Antrian Teller : node index.js 2');
      console.log('3. Panggil Antrian Costumer Service : node index.js 3');
      console.log('4. Panggail Antrian Teller : node index.js 4`');
    }else if(Number(menuNo) === 1){
        var dataParsing = this.readFile()
        this._cs.addData(dataParsing[1])
        console.log(`nomor antrian anda adalah ${dataParsing[1].queues.length}`);
        this.writeFile(dataParsing)
        
    }else if(Number(menuNo) === 2){
        var dataParsing = this.readFile()
        this._teller.addData(dataParsing[0])
        console.log(`nomor antrian anda adalah TL-${dataParsing[0].queues.length}`);
        
        this.writeFile(dataParsing)
    }else if(Number(menuNo) === 3){
        var dataParsing = this.readFile()
        if(dataParsing[1].queues.length === 0){
          console.log('antrian kosong');
        }else{
          console.log(`Nomor antrian CS-${dataParsing[1].queues[0]} silakan menuju ke Costumer Service`);
        }
        
        this._cs.shiftData(dataParsing[1])
        this.writeFile(dataParsing)
    }else if(Number(menuNo) === 4){
        var dataParsing = this.readFile()
        if(dataParsing[0].queues.length === 0){
          console.log('antrian kosong');
        }else{
          console.log(`Nomor antrian TL-${dataParsing[0].queues[0]} silakan menuju ke Teller`);
        }
        this._teller.shiftData(dataParsing[0])
        this.writeFile(dataParsing)
    }
  }

}

let antri = new Index();
antri.choose(command)

