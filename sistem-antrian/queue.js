class Queue {
  constructor() {
    this._queueNumber = null;
    this._queue = [];
  }

  get queue (){
    return this._queue;
  }

  set queue (newQueue){
    return this._queue = newQueue;
  }

  get queueNumber (){
    return this._queueNumber;
  }

  set queueNumber (newNumber){
    return this._queueNumber = newNumber;
  }

  addQueue(data) {
    if (data.length === 0){
      this.queueNumber = 1;
    } else {
      this.queueNumber = data[data.length - 1] + 1;
    }
    data.push(this._queueNumber);
    return this.queue = data;
  }

  removeQueue(data) {
    this.queue = data;
    this.queueNumber = data[0];
    return this.queue.shift();
  }
}

module.exports = Queue;