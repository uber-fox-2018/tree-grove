const Queue = require('./queue.js')

class LayananCustomerService {
  constructor() {
    //your code here
    this.division = 'customer-service'
    this.queue = new Queue()
  }

  add(data){
    this.queue.addQueue(data)
  }

  pop(data){
    this.queue.popQueue(data)
  }
}

module.exports = LayananCustomerService;