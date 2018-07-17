const argv = process.argv
const menuNo = argv[2]
const fs = require('fs')

const LayananCustomerService = require('./layanan-customer-service')
const LayananTeller = require('./layanan-teller')
const queues = require('./queue')

class Index {
  constructor() {
    this.data = this.readFile()
    this.cs = new LayananCustomerService() //your code here: silakan menambahkan parameter sesuai dengan kebutuhan kamu
    this.teller = new LayananTeller() ////your code here: silakan menambahkan parameter sesuai dengan kebutuhan kamu
  }

  readFile() {
    //your code here
    return JSON.parse(fs.readFileSync('antrian.json'))
  }

  writeFile() {
    //your code here
    fs.writeFileSync('antrian.json', JSON.stringify(this.data))
  }

  choose(menuNo) {
    //your code here
    if (menuNo === 'help') {
      console.log('$ MENU:')
      console.log('$ 1. Ambil antrian Customer Service: node index.js 1')
      console.log('$ 2. Ambil antrian Teller: node index.js 2')
      console.log('$ 3. Panggil antrian Customer Service: node index.js 3')
      console.log('$ 4. Panggil antrian Teller: node index.js 4')
    } else if (menuNo === '1') {
      this.cs.add_CS_Queue(this.data[1].queues)
      this.writeFile()
      console.log(`Nomor antrian anda adalah CS-${this.data[1].queues.length}`)
    } else if (menuNo === '2') {
      this.teller.add_Teller_Queue(this.data[0].queues)
      this.writeFile()
      console.log(`Nomor antrian anda adalah TL-${this.data[0].queues.length}`)
    } else if (menuNo == '3') {
      if (this.data[1].queues.length === 0) {
        console.log(`Antrian CS kosong`)
      } else {
        console.log(`Nomor antrian CS-${this.data[1].queues[0]} silakan menuju ke Customer Service`)
        this.cs.remove_CS_Queue(this.data[1].queues)
        this.writeFile()
      }
    } else if (menuNo === '4') {
      if (this.data[0].queues.length === 0) {
        console.log(`Antrian TL kosong`)
      } else {
        console.log(`Nomor antrian TL-${this.data[0].queues[0]} silakan menuju ke Teller`)
        this.teller.remove_Teller_Queue(this.data[0].queues)
        this.writeFile()
      }
    }  
  }
}

let antri = new Index();
antri.choose(menuNo)
