const Queue = require('./queue')

class LayananCustomerService{
  constructor() {
    this._queue = new Queue()
  }
  addQueueCS(data){
    this._queue.addQueue(data)
  }
  popQueueCS(data){
    this._queue.popQueue(data)
  }
}


module.exports = LayananCustomerService
