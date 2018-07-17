const Queue = require('./queue.js')

class LayananTeller {
  constructor() {
    this.queue = new Queue();
  }

  addAntrian(data) {
    this.queue.addQueue(data);
    // console.log('>>>', data);
  }

  removeAntrian(data) {
    this.queue.popQueue(data);
  }
}

module.exports = LayananTeller;