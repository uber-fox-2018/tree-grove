const Queue = require('./queue');

class Teller {
  constructor() {
    this._queue = new Queue();
  }

  get queue(){
    return this._queue;
  }

  add (data){
    this.queue.addQueue(data);
  }

  call (data){
    if (data.queues.length === 0){
      console.log('antrian kosong');
    } else {
      for (let i in data.detail){
        if (data.detail[i].isEmpty === true){
          data.detail[i].isEmpty = false;
          console.log(`Nomor antrian CS-${this.queue.queueNumber} silakan menuju ke ${data.detail[i].name} bagian Customer Service`)
          return this.queue.removeQueue(data.queues);
        }
      }
      
      console.log('Semua layanan CS kami sedang sibuk. Tunggulah beberapa saat lagi');
    }
  }
}

module.exports = Teller;
