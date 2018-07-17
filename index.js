const LayananCustomerService = require('./layanan-customer-service')
const LayananTeller = require('./layanan-teller')
const fs = require('fs')

class Index {
  constructor() {
    this._data = this.readFile()
    this._cs = new LayananCustomerService() //your code here: silakan menambahkan parameter sesuai dengan kebutuhan kamu
    this._teller = new LayananTeller() ////your code here: silakan menambahkan parameter sesuai dengan kebutuhan kamu
  }

  get data(){
    return this._data
  }

  get cs(){
    return this._cs
  }

  get teller(){
    return this._teller
  }

  readFile() {
    //your code here
    let jsonData = fs.readFileSync('./antrian.json')
    let data = JSON.parse(jsonData)
    return data
  }

  writeFile() {
    //your code here
    fs.writeFileSync('./antrian.json',JSON.stringify(this.data))
  }

  choose(menuNo) {
    //your code here
    let argv = process.argv;
    menuNo = argv[2]

    if (menuNo == 'help') {
      console.log(`1. Ambil antrian Customer Service: node index.js 1`);
      console.log(`2. Ambil antrian Teller: node index.js 2`);
      console.log(`3. Panggil antrian Customer Service: node index.js 3`);
      console.log(`4 Panggil antrian Teller: node index.js 4`);
    }else if (menuNo == 1) {
      // this.cs.addAntrianCS(this.data[1])
      this.cs.addAntrianCS(this.data[1])
      this.writeFile()
      console.log(`Nomor antrian anda adalah CS-${this.data[1].queues.length}`);
    }else if (menuNo == 2) {
      this.teller.addAntrianTeller(this.data[0])
      this.writeFile()
      console.log(`Nomor antrian anda adalah TL-${this.data[0].queues.length}`);
    }else if (menuNo == 3) {
      if (this.data[1].queues.length == 0) {
        console.log(`Antrian Kosong`);
      }else {
        console.log(`Nomor antrian ${this.data[1].queues[0]} silakan menuju ke Customer Service`);
        this.cs.panggilCustomer(this.data[1])
        this.writeFile()
      }
    }else if (menuNo == 4) {
      if (this.data[0].queues.length == 0) {
        console.log(`Antrian Kosong`);
      }else {
        console.log(`Nomor antrian ${this.data[0].queues[0]} silakan menuju ke Customer Service`);
        this.cs.panggilCustomer(this.data[0])
        this.writeFile()
      }
    }
  }

}

let antri = new Index();
antri.choose()




