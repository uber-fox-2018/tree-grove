class Queue {
  constructor() {
    this._nomorAntrian = null
    this.antrian = []
  }

  get nomorAntrian() {
    return this._nomorAntrian
  }

  set nomorAntrian(nomor) {
    return this._nomorAntrian = nomor
  }

  getAntrian() {
    return this.antrian
  }

  addQueue(data) {
    if (data.queues.length > 0) {
      this._nomorAntrian = data.queues[data.queues.length-1] + 1
    } else {
      this._nomorAntrian = 1
    }
    data.queues.push(this._nomorAntrian)
    // this.antrian.push(data) 
  }

  popQueue(data) {
    if (data.division === 'customer-service') {
      data.queues.shift() 
    } else if (data.division === 'teller') {
      data.queues.shift()
    }
  }
}

module.exports = Queue