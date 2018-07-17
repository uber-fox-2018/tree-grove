class Queue {
  constructor() {
    this.nomorAntrian = null
    this.antrian = []
  }

  addQueue(data) {
    //your code here
    if (data.queues.length == 0) {
      this.nomorAntrian = 1
    }else {
      this.nomorAntrian = data.queues[data.queues.length-1]+1
    }
    data.queues.push(this.nomorAntrian)
    this.antrian = data
  }

  popQueue(data) {
    //your code here
    data.queues.shift(data.queues[0])
  }
}


module.exports = Queue
