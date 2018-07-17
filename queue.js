class Queue {
  constructor() {
    this._nomorAntrian = null;
    this._antrian = []; //your code here
  }

  addQueue(data) {
    if (data.queues.length === 0) {
      this._nomorAntrian = 1;
    } else {
      this._nomorAntrian = data.queues[data.queues.length - 1] + 1;
    }

    data.queues.push(this._nomorAntrian);
    this._antrian = data.queues;
    //your code
    console.log(this._antrian);
  }

  popQueue(data) {
    //your code here
    data.queues.shift();
    console.log(data.queues);

  }
}

module.exports = {
  Queue
};
