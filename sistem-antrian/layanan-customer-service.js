const Queue = require('./queue')

class LayananCustomerService {
  constructor() {
    this.level = 'Customer Services'
    this.queue = new Queue()
  }

  addAntrian(data) {
    this.queue.addQueue(data)
  }  

  ambilAntrian(data) {
    this.queue.popQueue(data)
  }

}

module.exports = LayananCustomerService