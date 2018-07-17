const Queue = require('./queue.js')

class LayananTeller {
  constructor() {
    //your code here
    this.division = 'teller'
    this.queue = new Queue()              
  }

  add(data){
    this.queue.addQueue(data)
  }

  pop(data){
    this.queue.popQueue(data)
  }
}

module.exports = LayananTeller;