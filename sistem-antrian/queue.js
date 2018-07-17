class Queue {
  constructor() {
    this._queueNumber = null;
    this._queue = []
  }

  get queueNumber(){
    return this._queueNumber;
  }

  set queueNumber(newValue){
    return this._queueNumber = newValue;
  }

  get queue(){
    return this._queue;
  }

  addQueue() {
    return this.queue.push(this.queueNumber);
  }

  removeQueue() {
    return this.queue.shift();
  }
}

module.exports = Queue;