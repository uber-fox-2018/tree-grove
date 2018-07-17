const Queue = require('./queue')

class LayananTeller {
  constructor() {
    //your code here
    this.teller_queue = new Queue()
  }

  add_Teller_Queue(dataTeller) {
    this.teller_queue.addQueue(dataTeller)
  }

  remove_Teller_Queue(dataTeller) {
    this.teller_queue.popQueue(dataTeller)
  }
}

module.exports = LayananTeller