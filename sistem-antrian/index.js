const LayananCustomerService = require('./layanan-customer-service.js')
const LayananTeller = require('./layanan-teller')
const fs = require('fs')
const argv = process.argv.slice(2)

class Index {
  constructor() {
    this.data = JSON.parse(this.readFile()) //your code here
    this.cs = new LayananCustomerService() //your code here: silakan menambahkan parameter sesuai dengan kebutuhan kamu
    this.teller = new LayananTeller() ////your code here: silakan menambahkan parameter sesuai dengan kebutuhan kamu
  }

  readFile() {
    //your code here
    return fs.readFileSync('antrian.json')
  }

  writeFile() {
    //your code here
    fs.writeFileSync('antrian.json', JSON.stringify(this.data))
  }

  help(){
    console.log(`
  MENU:
  1. Ambil antrian Customer Service: node index.js 1
  2. Ambil antrian Teller: node index.js 2
  3. Panggil antrian Customer Service: node index.js 3
  4. Panggil antrian Teller: node index.js 4
    `); 
  }

  choose(command) {
    //your code here
    
    if(command === 'help' || command === undefined){
      this.help()
    }else if(command === '1'){
      this.cs.add(this.data[1].queues)
      this.writeFile()
      console.log(`Nomor antrian anda adalah CS-${this.cs.queue.nomorAntrian}`);
    }else if(command === '2'){
      this.teller.add(this.data[0].queues)
      this.writeFile()
      console.log(`Nomor antrian anda adalah TL-${this.teller.queue.nomorAntrian}`);
    }else if(command === '3'){
      if(this.data[1].queues.length === 0){
        console.log(`Antrian kosong`);
      }else{
        console.log(`Nomor antrian CS-${this.data[1].queues[0]} silakan menuju ke Customer Service`);
        this.cs.pop(this.data[1].queues)
        this.writeFile()
      }
    }else if(command === '4'){
      if(this.data[0].queues.length === 0){
        console.log(`Antrian kosong`);
      }else{
        console.log(`Nomor antrian TL-${this.data[0].queues[0]} silakan menuju ke Customer Service`);
        this.teller.pop(this.data[0].queues)
        this.writeFile()
      }
    }

    console.log(this.data);
  }

}

let command = argv[0]
let antri = new Index();
antri.choose(command)
