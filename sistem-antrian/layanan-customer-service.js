const Queue = require('./queue')

class LayananCustomerService {
  constructor() {
    //your code here
    this.division = 'Customer Service',
    this.queues = new Queue()
  }

  // getQueue(obj) {
  //   this.queues.addQueue(obj)
  // }
}

class Employee {
  constructor(name, level) {
    this.name = name,
    this.level = level,
    this.isEmpty = true
  }
}

module.exports = LayananCustomerService
