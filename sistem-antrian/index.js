const command = process.argv[2];
const input = process.argv.slice(3)
const fs = require ('fs');
const CustomerService = require('./customerService');
const Teller = require('./teller');
const Employee = require('./employee');

class Index {
  constructor() {
    this._data = JSON.parse(this.readFile());
    this._CS = new CustomerService(); 
    this._teller = new Teller();
  }

  get data () {
    return this._data;
  }

  get CS (){
    return this._CS;
  }

  get teller (){
    return this._teller;
  }

  readFile() {
    return fs.readFileSync('bonus.json').toString();
  }

  writeFile(str) {
    return fs.writeFileSync('bonus.json', str);
  }

  addQueueCS(){
    this.CS.add (this.data[1].queues);
    this.data[1].queues = this.CS.queue.queue;
    this.writeFile(JSON.stringify(this.data));
    console.log(`Nomor antrian anda adalah CS-${this.CS.queue.queueNumber}`);
  }

  addQueueTeller(){
    this.CS.add (this.data[0].queues);
    this.data[0].queues = this.CS.queue.queue;
    this.writeFile(JSON.stringify(this.data));
    console.log(`Nomor antrian anda adalah TL-${this.CS.queue.queueNumber}`);
  }

  callQueueCS(){
    this.CS.call(this.data[1]);
    this.data[1].queues = this.CS.queue.queue;
    this.writeFile(JSON.stringify(this.data));
  }

  callQueueTeller(){
    this.CS.call(this.data[0]);
    this.data[0].queues = this.CS.queue.queue;
    this.writeFile(JSON.stringify(this.data));
  }

  addEmployee(input){
    let job = input[0];
    let name = input[1];
    let newEmp = new Employee (job, name);
    
    if (job === 'teller'){
      this.data[0].detail.push(newEmp);
      this.writeFile(JSON.stringify(this.data));
      console.log('employee added successfully!');
    } else if (job === 'customer-service'){
      this.data[1].detail.push(newEmp);
      this.writeFile(JSON.stringify(this.data));
      console.log('employee added successfully!');
    } else {
      console.log('wrong job input');
    }
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
    } else if (command == 5){
      this.addEmployee(input);
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
    console.log ('5. Tambah pegawai -> node index.js 5 teller/customer-service "nama"');
  }

}

let antri = new Index();
antri.do(command)