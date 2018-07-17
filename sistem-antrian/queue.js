
class Queue {
  constructor() {
    this._nomorAntrian = null;
    this._antrian = [];
  }

  addQueue(data) {
    if (data.queues.length === 0) {
      this._nomorAntrian = 1;
    } else {
      this._nomorAntrian = data.queues[data.queues.length-1] + 1;
    }
    // console.log('...', data)
    data.queues.push(this._nomorAntrian);
    this._antrian = data;
    // console.log('///', data);
    // console.log('--->>', this._antrian);
  }

  popQueue(data) {
    // console.log(data.queues[0]);
    data.queues.shift();
  }
}

module.exports = Queue;
