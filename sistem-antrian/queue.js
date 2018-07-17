class Queue {
  constructor() {
    this._queueNumber = null;
    this._queue = [];
  }

  addQueue(data) {
    if (data.length === 0){
      this._queueNumber = 1;
    } else {
      this._queueNumber = data[data.length - 1] + 1;
    }
    data.push(this._queueNumber);
    return this._queue = data;
  }

  removeQueue(data) {
    this._queue = data;
    this._queueNumber = data[0];
    return this._queue.shift();
  }
}

module.exports = Queue;