class Queue {
  constructor() {
    this.antrian = []
    this.nomorAntrian =  0 //your code here
  }

  addQueue(dataQueue) {
    //your code here
    this.antrian.push(dataQueue)
    this.nomorAntrian = Number(`${this.antrian}`)
  }

  shiftQueue(dataQueue) {
    //your code here
    this.antrian.shift()
    this.nomorAntrian = this.antrian.length
  }
}

module.exports = Queue