const command = process.argv[2];
const fs = require ('fs');
const CustomerService = require('./customerService');
const Teller = require('./teller');

class Index {
  constructor() {
    this._data = JSON.parse(this.readFile());
    this._CS = new CustomerService(); 
    this._teller = new Teller();
  }

  readFile() {
    return fs.readFileSync('queue.json').toString();
  }

  writeFile(str) {
    return fs.writeFileSync('queue.json', str);
  }

  addQueueCS(){
    this._CS.add (this._data[1].queues);
    this._data[1].queues = this._CS._queue._queue;
    this.writeFile(JSON.stringify(this._data));
    console.log(`Nomor antrian anda adalah CS-${this._CS._queue._queueNumber}`);
  }

  addQueueTeller(){
    this._teller.add (this._data[0].queues);
    this._data[0].queues = this._teller._queue._queue;
    this.writeFile(JSON.stringify(this._data));
    console.log(`Nomor antrian anda adalah TL-${this._teller._queue._queueNumber}`);
  }

  callQueueCS(){
    this._CS.call(this._data[1].queues);
    this._data[1].queues = this._CS._queue._queue;
    this.writeFile(JSON.stringify(this._data));
    console.log(`Nomor antrian CS-${this._CS._queue._queueNumber} silakan menuju ke Customer Service`);
  }

  callQueueTeller(){
    this._teller.call(this._data[0].queues);
    this._data[0].queues = this._teller._queue._queue;
    this.writeFile(JSON.stringify(this._data));
    console.log(`Nomor antrian TL-${this._teller._queue._queueNumber} silakan menuju ke Customer Service`);
  }

  do(command){
    if (command === 'help'){
      this.help();
    } else if (command == 1){
      this.addQueueCS();
    } else if (command == 2){
      this.addQueueTeller();
    } else if (command == 3){
      this.callQueueCS();
    } else if (command == 4){
      this.callQueueTeller();
    } else {
      this.help();
    }
  }

  help(){
    console.log ('MENU:');
    console.log ('1. Ambil antrian Customer Service -> node index.js 1');
    console.log ('2. Ambil antrian Teller -> node index.js 2');
    console.log ('3. Panggil antrian Customer Service -> node index.js 3');
    console.log ('4. Panggil antrian Teller -> node index.js 4');
  }

}

let antri = new Index();
antri.do(command)