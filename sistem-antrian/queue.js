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

  addQueue(arr) {
    if (arr.length === 0){
      this.queueNumber = 1;
    } else {
      this.queueNumber = arr[arr.length - 1] + 1;
    }
    arr.push(this._queueNumber);
    return this.queue = arr;
  }

  removeQueue(arr) {
    this.queue = arr;
    this.queueNumber = arr[0];
    return this.queue.shift();
  }
}

module.exports = Queue;