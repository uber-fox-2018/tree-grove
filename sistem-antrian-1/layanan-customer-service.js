const Queue = require('./queue')

class LayananCustomerService {
  constructor() {
    //your code here
    this.cs_queue = new Queue()
  }

  add_CS_Queue(dataCS) {
    this.cs_queue.addQueue(dataCS)
  }

  remove_CS_Queue(dataCS) {
    this.cs_queue.popQueue(dataCS)
  }
}

module.exports = LayananCustomerService
