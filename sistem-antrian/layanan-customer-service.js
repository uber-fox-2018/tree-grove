const Queue = require('./queue.js');

class LayananCustomerService {
  constructor() {
    this.queue = new Queue();
  }

  addAntrian(data) {
    this.queue.addQueue(data)
    // console.log('---', data);
  }
  
  removeAntrian(data) {
    this.queue.popQueue(data);
  }
}

module.exports = LayananCustomerService;