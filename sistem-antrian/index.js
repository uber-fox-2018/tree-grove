const argv = process.argv.slice(2)
const fs = require('fs');
const Queue = require('./queue')
const LayananCustomerService = require('./layanan-customer-service')
const LayananTeller = require('./layanan-teller')
const menuNo = argv[0]


class Index {
  constructor() {
    this._data = this.readFile()//your code here
    this._cs = new LayananCustomerService() //your code here: silakan menambahkan parameter sesuai dengan kebutuhan kamu
    this._teller = new LayananTeller() ////your code here: silakan menambahkan parameter sesuai dengan kebutuhan kamu
  }

  readFile() {
    let dataString = fs.readFileSync('antrian.json','utf8')
    let data  = JSON.parse(dataString)
    return data
  }

  writeFile() {
    fs.writeFileSync('antrian.json',JSON.stringify(this._data))
  }
   

  choose(menuNo) {
    if(menuNo === '1'){
      this._cs.addQueueCS(this._data[0].queues)
      this.writeFile()    
      console.log(`Nomor antrian anda adalah CS-${this._data[0].queues[this._data[0].queues.length-1]}`)
    }else if(menuNo === '2'){
      this._teller.addQueueTL(this._data[1].queues)
      this.writeFile()
      console.log(`Nomor antrian anda adalah TL-${this._data[1].queues[this._data[1].queues.length-1]}`)
    }else if(menuNo === '3'){
      if(this._data[0].queues.length === 0){
        console.log(`Antrian Kosong`)
      }else{
        console.log(`Nomor antrian CS-${this._data[0].queues[0]} silakan menuju ke Customer Service`)
        this._cs.popQueueCS(this._data[0].queues)
        this.writeFile()
      }
    }else if(menuNo === '4'){
      if(this._data[1].queues.length === 0){
        console.log(`Antrian Kosong`)
      }else{
        console.log(`Nomor antrian CS-${this._data[1].queues[0]} silakan menuju ke Teller`)
        this._cs.popQueueCS(this._data[1].queues)
        this.writeFile()
      }  
    }else{
      console.log(`      $ Menu:
      $ 1. Ambil antrian Customer Service : node index.js 1
      $ 2. Ambil antrian Teller : node index.js 2
      $ 3. Panggil Antrian Customer Service : node index.js 3
      $ 4. Panggil Antrian Teller : node index.js 4`)
    }
  }
  
}

let antri = new Index();

antri.choose(menuNo)

module.exports = Index
