const Queue = require('./queue')

class LayananTeller {
  constructor() {
    //your code here
    this.division = 'teller'
    this.queues = new Queue()
  }

  addAntrianTeller(data){
    this.queues.addQueue(data)
  }

  panggilCustomer(data){
    this.queues.popQueue(data)
  }
}


module.exports = LayananTeller