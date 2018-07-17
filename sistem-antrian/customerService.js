const Queue = require('./queue');

class CustomerService {
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
    this.queue.removeQueue(data);
  }
}

module.exports = CustomerService;