const fs = require('fs');
const LayananCustomerService = require('./layanan-customer-service.js');
const LayananTeller = require('./layanan-teller.js');

class Index {
  constructor() {
    this._data = this.readFile();
    this._cs = new LayananCustomerService() //your code here: silakan menambahkan parameter sesuai dengan kebutuhan kamu
    this._teller = new LayananTeller() ////your code here: silakan menambahkan parameter sesuai dengan kebutuhan kamu
  }

  readFile() {
    const data = JSON.parse(fs.readFileSync('./antrian.json'));
    return data;
  }

  writeFile() {
    fs.writeFileSync('./antrian.json', JSON.stringify(this._data), 'utf8');
  }

  choose(menuNo) {
    var argv = process.argv;
    menuNo = argv[2];

    if(menuNo === 'help') {
      console.log('MENU:');
      console.log('1. Ambil antrian Customer Service: node index.js 1');
      console.log('2. Ambil antrian Teller: node index.js 2');
      console.log('3. Panggil antrian Customer Service: node index.js 3');
      console.log('4. Panggil antrian Teller: node index.js 4')
    } else if (menuNo == 1) {
      // console.log(this._cs)
      this._cs.addAntrian(this._data[1]);
      this.writeFile(menuNo);
      console.log(`Nomor antrian anda adalah CS-${this._cs.queue._nomorAntrian}`);
    
    } else if (menuNo == 2) {
      this._teller.addAntrian(this._data[0]);
      this.writeFile(menuNo);
      console.log(`Nomor antrian anda adalah TL-${this._teller.queue._nomorAntrian}`);
    
    } else if (menuNo == 3) {
      if (this._data[1].queues[0] > 0) {
      console.log(`Nomor antrian CS-${this._data[1].queues[0]} silahkan menuju ke Customer Service`);
      } else {
        console.log('Antrian Kosong');
      }
      this._cs.removeAntrian(this._data[1]);
      this.writeFile(menuNo);
    
    } else if (menuNo == 4) {
      if (this._data[0].queues[0] > 0) {
        console.log(`Nomor antrian TL-${this._data[0].queues[0]} silahkan menuju ke Teller`);
      } else {
        console.log('Antrian Kosong');
      }
      this._teller.removeAntrian(this._data[0]);
      this.writeFile(menuNo);
    }

  }

}

let antri = new Index();

antri.choose();