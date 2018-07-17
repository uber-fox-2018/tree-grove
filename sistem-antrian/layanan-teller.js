const Queue = require('./queue')

class LayananTeller{
  constructor() {
    this._queue = new Queue()
  }

  addQueueTL(data){
    this._queue.addQueue(data)
  }

  popQueueTL(data){
    this._queue.popQueue(data)
  }


}

module.exports = LayananTeller
