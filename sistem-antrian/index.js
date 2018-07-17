// pemanggilan kelas ke index (require) sesuai dengan kelasnya
const { LayananCustomerService }= require('./layanan-customer-service')
// const Queue = require('./queue.js')
const {LayananTeller} = require('./layanan-teller.js')
let fs = require('fs')
let argv = process.argv
let menuNo = argv[2]


class Index {
  constructor() {
    this._data =  this.readFile()//your code here
    this._cs = new LayananCustomerService() //your code here: silakan menambahkan parameter sesuai dengan kebutuhan kamu
    // console.log(this._cs); cek data CS
    this._teller = new LayananTeller() ////your code here: silakan menambahkan parameter sesuai dengan kebutuhan kamu
    // console.log(this._teller); -> cek data teller
    
  }

  readFile() { //tahap 1 membaca paket data
    //your code here
    let dataRead = JSON.parse(fs.readFileSync('./antrian.json','utf8')) //split tidak digunaka, agar rapih
    // console.log(dataRead)
    return dataRead

  
    }
    
  

  writeFile() {
    //your code here
    let dataWrite = fs.writeFileSync('./antrian.json', JSON.stringify(this._data))

    return dataWrite
  }

  choose(command) {
    //your code here

    if(command === undefined || command === 'help'){
      console.log('MENU :')
      console.log('1. Ambil antrian Customer Service: node index.js 1')
      console.log('2. Ambil antrian Teller: node index.js 2')
      console.log('3. Panggil antrian Customer Service: node index.js 3')
      console.log('4. Panggil antrian Teller: node index.js 4')
    } else if ( command === '1'){
      this._cs.addQueue(this._data[1]) // data[1] --> data CS
      this.writeFile(); //taro ke DB
      console.log(`nomor antrian anda adalah CS-${this._cs.queue._nomorAntrian}`);
      // console.log('====>argv 1')
    } else if (command === '2'){
      this._teller.addQueue(this._data[0])
      this.writeFile()
      console.log(`nomor antrian anda adalah TL-${this._cs.queue._nomorAntrian}`)
    } else if(command === '3'){
        if(this.data[1].queues.length === 0){
          console.log('Antrian kosong')
        } else {
          console.log(`Nomor Antrian CS-${this.data[1].queues[0]} silakan menuju ke Costumer Service`)
          this._cs.popQueue(this.data[1].queues)
          this.writeFile()
        }
    }else if(command === '4'){
      if(this.data[0].queues.length === 0){
        console.log('Antrian kosong')
      } else {
        console.log(`Nomor Antrian TL-${this.data[0].queues[0]} silakan menuju ke Teller`)
        this._cs.popQueue(this.data[0].queues)
        this.writeFile()
      }
    }

   



  }

}

let antri = new Index();
antri.choose(menuNo)
console.log(JSON.stringify(antri))
// // antri.choose(command)


// // note (composition) :
// // bacanya --> untuk ambil nomor antrian
//       this._cs = new LayananCustomerService
//       this._cs.queue._nomorAntrian(tidak keproperty)

