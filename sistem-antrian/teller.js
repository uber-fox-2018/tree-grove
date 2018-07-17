const Queue = require('./queue');

class Teller {
  constructor() {
    this._queue = new Queue();
  }

  add (data){
    this._queue.addQueue(data);
  }

  call (data){
    this._queue.removeQueue(data);
  }
}

module.exports = Teller;
