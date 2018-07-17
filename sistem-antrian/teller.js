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
    this.queue.removeQueue(data);
  }
}

module.exports = Teller;
