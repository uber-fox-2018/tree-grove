const Queue = require('./queue');

class CustomerService {
  constructor() {
    this._queue = new Queue();
  }

  get queue(){
    return this._queue;
  }

  add (){
    console.log(this.queue.queue)
    if (this.queue.queue.length === 0){
      this.queue.queueNumber = 1;
    } else {
      this.queue.queueNumber = this.queue.queue[this.queue.queue.length - 1] + 1;
    }
    this.queue.addQueue();
    return this.queue.queueNumber;
  }

  call (){

  }
}

module.exports = CustomerService;