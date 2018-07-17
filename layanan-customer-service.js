const Queue = require('./queue')

class LayananCustomerService {
  constructor() {
    //your code here
    this.division = 'customer-service'
    this.queues = new Queue()
  }

  addAntrianCS(data){
    this.queues.addQueue(data)
  }

  panggilCustomer(data){
    this.queues.popQueue(data)
  }
}


module.exports = LayananCustomerService