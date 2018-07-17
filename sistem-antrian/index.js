const argv = process.argv
const menuNo = argv.slice(2)
const LayananCustomerService = require('./layanan-customer-service.js')
const LayananTeller = require('./layanan-teller')
const fs = require('fs')
class Index {
  constructor() {
    this._data = this.readFile()
    this._cs = new LayananCustomerService() 
    this._teller = new LayananTeller()
  }
  // ada layanan ada antrian || 
  get data() {
    return this._data
  }

  get cs() {
    return this._cs
  }

  get teller() {
    return this._teller
  }

  set data(newData) {
    this.data = newData
  }

  set cs(newCs) {
    this.cs = newCs
  }

  set teller(newTeller) {
    this.teller = newTeller
  }

  readFile() {
    //your code here
    let data = fs.readFileSync('./antrian.JSON', 'utf-8')
    let parseData = JSON.parse(data)
    return parseData
  }
  
  writeFile(data) {
    //your code here
    fs.writeFileSync('antrian.JSON',JSON.stringify(data))
  }
  
  choose(menuNo) {
    //your code here
    let data = this.readFile()
    // let queue = new Queue()
    if(menuNo === '1') {
      this.getQueueCS(data)
    } else if(menuNo === '2') {
      this.getQueueTeller()
    } else if(menuNo === '3') {
      this.callQueueCS()
    } else if(menuNo === '4') {
      // panggil antrian teller
      this.callQueueTeller()
    } else if(menuNo === undefined) {
      console.log('$ node index.js help');
    } else {
      console.log(
     `$ MENU:
      $ 1. Ambil antrian Customer Service: node index.js 1
      $ 2. Ambil antrian Teller: node index.js 2
      $ 3. Panggil antrian Customer Service: node index.js 3
      $ 4. Panggil antrian Teller: node index.js 4`);
    }
  }

  getQueueCS() {
    let lengthQueue = this.data[1].queues.length-1
    
    if(this.data[1].queues.length === 0) {
      this.cs.queues.addQueue(1)
    } else {
      this.cs.queues.addQueue(this.data[1].queues[lengthQueue]+1)
    }
    this.data[1].queues.push(this.cs.queues.nomorAntrian)

    // console.log('data[1].queues: ',this.data[1]);
    console.log('CS: ===>', this.cs);
    // this.data.queues.push(this.cs.queues.antrian)
    this.writeFile(this.data)
    console.log(`Nomer antrian anda adalah CS-${this.cs.queues.antrian}`)
  }

  getQueueTeller() {
    let lengthQueue = this.data[0].queues.length-1
    
    if(this.data[0].queues.length === 0) {
      this.cs.queues.addQueue(1)
    } else {
      this.cs.queues.addQueue(this.data[0].queues[lengthQueue]+1)
    }
    this.data[0].queues.push(this.cs.queues.nomorAntrian)

    // console.log('data[1].queues: ',this.data[1]);
    // console.log('CS: ===>', this.cs);
    // this.data.queues.push(this.cs.queues.antrian)
    this.writeFile(this.data)
    console.log(`Nomer antrian anda adalah CS-${this.cs.queues.antrian}`)
  }

  callQueueCS() {
    if(this.data[1].queues.length === 0) {
      console.log('Antrian Kosong');
    } else {
      console.log(`Nomer antrian CS-${this.data[1].queues[0]} silahkan menuju ke ${this.data[1].division}`);
      this.data[1].queues.shift()
      this.writeFile(this.data)
    }
    // panggil antrian CS
    // console.log(data[1].queue);
  }

  callQueueTeller() {
    if(this.data[0].queues.length === 0) {
      console.log('Antrian Kosong');
    } else {
      this.teller
      console.log(`Nomer antrian TL-${this.data[0].queues[0]} silahkan menuju ke ${this.data[0].division}`);
      this.data[0].queues.shift()
      this.writeFile(this.data)
    }
  }

}

let antri = new Index();
antri.choose(menuNo[0])
// let queue = new Queue()
// console.log(antri.data);
// console.log(antri.cs);

