const Queue = require('./queue')

class LayananTeller {
  constructor(level) {
    this.level = 'Teller'
    this.queue = new Queue()
  }

  addAntrian(data) {
    this.queue.addQueue(data)
  }  

  ambilAntrian(data) {
    this.queue.popQueue(data)
  }
}

module.exports = LayananTeller