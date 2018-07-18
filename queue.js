class Queue {
  constructor() {
    this._nomorAntrian = 0; //your code here
    this._antrian = null;
  }

  addQueue(data) {
    if (data.queues == 0) {
      this._nomorAntrian = 1;
    } else {
      this._nomorAntrian = data.queues[data.queues.length - 1] + 1;
    }

    data.queues.push(this._nomorAntrian);
    this._antrian = data.queues;
    console.log(this._antrian);
  }

  popQueue(data) {
    data.queues.shift();
    console.log(data.queues);
  }
}

module.exports = {
  Queue
};
